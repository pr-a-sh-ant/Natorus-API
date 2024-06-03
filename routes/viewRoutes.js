const express = require('express');
const viewController = require('../controllers/viewsController');
const authController = require('../controllers/authController');

const router = express.Router();

router.get('/', viewController.getOverview);
router.get('/tours/:slug', authController.protect, viewController.getTour);

router.get('/login', viewController.getLogin);
router.get('/sign-up', viewController.getSignup);

module.exports = router;
