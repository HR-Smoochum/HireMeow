// LIBRARY IMPORTS
const express = require('express');
const multer = require('multer');
const upload = multer({ dest: './database/uploads/' });

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
router.post('/resumeData', upload.single('file'), controller.postResume);
router.get('/getResume', controller.getResume);

module.exports = router;
