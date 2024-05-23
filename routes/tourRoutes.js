const express = require('express');
const tourController = require('../controllers/tourController');
const authController = require('../controllers/authController');
const reviewController = require('../controllers/reviewController');
const ReviewRouter = require('./reviewRoutes');

const Router = express.Router();

Router.route('/top-5-cheap').get(
  tourController.aliasTopTours,
  tourController.getAllTours,
);
Router.route('/tour-stats').get(tourController.getTourStats);
Router.route('/monthly-plan/:year').get(tourController.getMonthlyPlan);

Router.route('/')
  .get(authController.protect, tourController.getAllTours)
  .post(tourController.createTour);
Router.route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    tourController.deleteTour,
  );

Router.route('/:tourid/reviews').post(
  authController.protect,
  authController.restrictTo('user'),
  reviewController.createReview,
);

Router.use('/:tourid/reviews', ReviewRouter);

module.exports = Router;
