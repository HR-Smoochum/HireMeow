const express = require('express');
const router = express.Router();
const app = express();
const controller = require('./controller.js');

router.get('/test', controller.get);
router.get('/seekers', controller.getSeekers);
router.get('/employers', controller.getEmployers);
router.get('/jobs', controller.getJobs);
router.get('/blogposts', controller.getBlogPosts);

module.exports = router;
