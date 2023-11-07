const express = require('express');
const tourController = require('../controllers/tourController');
const Router = express.Router();

Router.route('/').get(tourController.getAllTours).post(tourController.putTour);
Router.route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = Router;
