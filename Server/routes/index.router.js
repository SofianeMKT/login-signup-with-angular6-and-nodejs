const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const ctrlCustomer = require('../controllers/customer.controller');

const jwtHelper = require('../config/jwtHelper');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);
router.put('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.updateUserProfile);
router.get('/customers',jwtHelper.verifyJwtToken, ctrlCustomer.getCustomers);
router.post('/customers',jwtHelper.verifyJwtToken, ctrlCustomer.addCustomer);
router.put('/customers/:id',jwtHelper.verifyJwtToken, ctrlCustomer.updateCustomer);
router.delete('/customers/:id',jwtHelper.verifyJwtToken, ctrlCustomer.deleteCustomer);

module.exports = router;



