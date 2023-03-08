// LIBRARY IMPORTS
const express = require('express');

// LOCAL IMPORTS
const controller = require('./controller.js');

const router = express.Router();

// ROUTES
router.get('/seekers', controller.getSeekers);
router.get('/seekers/:uid', controller.getASeeker);
router.get('/employers', controller.getEmployers);
router.get('/employers/:uid', controller.getAnEmployer);
router.get('/jobs', controller.getJobs);
router.get('/jobs/:id', controller.getAJob);
router.get('/blogposts', controller.getBlogPosts);

module.exports = router;
