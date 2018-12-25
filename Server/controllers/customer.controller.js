const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const Customer = mongoose.model('Customer');

module.exports.addCustomer = (req, res, next) => {
    const customer = new Customer();
    customer.name = req.body.name;
    customer.email = req.body.email;
    customer.image = req.body.image;
    customer.address = req.body.address;
    customer.mobile = req.body.mobile;
    customer.country = req.body.country;
    customer.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            return next(err);
        }

    });
};

module.exports.getCustomers = (req, res, next) => {
    Customer.find({}, (err, docs) => {
        if (!err)
            res.send(docs);
        else {
            return next(err);
        }

    });
};

module.exports.updateCustomer = (req, res, next) => {
    Customer.findOneAndUpdate({_id: req.params.id}, req.body, {upsert:true}, function(err, doc){
        if (err) return res.send(500, { error: err });
        return res.send("succesfully saved");
    });
};

module.exports.deleteCustomer = (req, res, next) => {
    Customer.remove({_id: req.params.id}, (err, doc) => {
        if (!err)
            res.send(doc);
        else {
            return next(err);
        }

    });
};