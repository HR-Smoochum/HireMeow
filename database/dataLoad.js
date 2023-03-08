// LOCAL IMPORTS
const model = require('../server/models.js');
const seekerData = require('./seekerData.js');
const employerData = require('./employerData.js');
const jobData = require('./jobData.js');
const blogData = require('./blogPostData.js');

// LOAD FUNCTION
const load = (data) => {
  model.createInDb(data, (err, res) => {
    if (err) {
      console.log('err ', err);
    } else {
      console.log('Data loaded successfully', res);
    }
  });
};

// First go to models.js and update the load model collection name based on which collection you're loading
// Navigate to this directory (cd database) in your terminal and run this file via node
// model.clearDb();

load(seekerData.seekerData);
// load(employerData.employerData);
// load(jobData.jobData);
// load(blogData.blogData);
