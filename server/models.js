const mongoose = require('mongoose');
const db = require('../database/index.js');

module.exports = {
  getAllSeekers: () => {
    return db.Seeker.find({});
  },
  getASeeker: (id) => {
    return db.Seeker.find({ uid: id });
  },
  getAllEmployers: () => {
    return db.Employer.find({});
  },
  getAnEmployer: (id) => {
    return db.Employer.find({ uid: id });
  },
  getAllJobs: () => {
    return db.Job.find({});
  },
  getAJob: (jobId) => {
    return db.Job.find({ id: jobId });
  },
  getAllBlogPosts: () => {
    return db.BlogPost.find({});
  },
  // THESE 2 MODELS ARE SPECIFICALLY FOR DATA LOADING:
  // to create relevant documents - update as needed
  createInDb: (items, callback) => {
    db.BlogPost.create(items)
      .then((res) => {
        callback(null, res);
      })
      .catch((err) => {
        callback(err);
      });
  },
  // to clear relevant collections - update as needed
  clearDb: () => {
    db.BlogPost.deleteMany()
      .then(() => {
        console.log('Collection cleared');
      })
      .catch((err) => {
        console.log('Unable to clear collection', err);
      });
  },
};
