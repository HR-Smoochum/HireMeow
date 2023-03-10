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
router.put('/seekers/:uid', controller.updateASeekerEvent);
router.put('/employers/:uid', controller.updateAnEmployerEvent);
router.get('/employers', controller.getEmployers);
router.get('/employers/:uid', controller.getAnEmployer);
router.get('/jobs', controller.getJobs);
router.get('/jobs/:id', controller.getAJob);
router.get('/blogposts', controller.getBlogPosts);
router.post('/resumeData', upload.single('file'), controller.postResume);
router.get('/getResume', controller.getResume);

// get job or seekers in id array
router.get('/jobsByIdArray', controller.getJobsByIdArray);
router.get('/seekersByIdArray', controller.getSeekersByIdArray);
// update saved jobs or saved seeker's status
router.put('/jobsToApplied', controller.updateJobApplied);
router.put('/jobInterested', controller.updateJobInterested);
router.put('/seekerInterested', controller.updateSeekerInterested);

module.exports = router;
