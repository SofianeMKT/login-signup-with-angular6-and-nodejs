const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const User = mongoose.model('User');

module.exports.register = (req, res, next) => {
    var user = new User();
    user.fullName = req.body.fullName;
    user.email = req.body.email;
    user.password = req.body.password;
    user.username = req.body.username;
    user.address = req.body.address;
    user.mobile = req.body.mobile;
    user.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate email address or username found.']);
            else
                return next(err);
        }

    });
}

module.exports.authenticate = (req, res, next) => {
    // call for passport authentication
    passport.authenticate('local', (err, user, info) => {       
        // error from passport middleware
        if (err) return res.status(400).json(err);
        // registered user
        else if (user) return res.status(200).json({ "token": user.generateJwt() });
        // unknown user or wrong password
        else return res.status(404).json(info);
    })(req, res);
}

module.exports.userProfile = (req, res, next) =>{
    User.findOne({ _id: req._id },
        (err, user) => {
            if (!user)
                return res.status(404).json({ status: false, message: 'User record not found.' });
            else
                return res.status(200).json({ status: true, user : _.pick(user,['fullName','email', 'username', 'address', 'mobile']) });
        }
    );
}

module.exports.updateUserProfile = (req, res, next) =>{
    User.findOneAndUpdate({ _id: req._id }, {fullName: req.body.fullName}, {upsert:true},
        (err, user) => {
        if (!user)
    return res.status(404).json({ status: false, message: 'User record not found.' });
else
    {
        return res.status(200).json({
            status: true
        });
    }
}
);
}