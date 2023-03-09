const mongoose = require('mongoose'); // not necessary, mongoose already required from db import
const db = require('../database');

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
  updateASeekerEvent: (id, seekerEvent) => {
    return db.Seeker.updateOne({uid: id}, {$addToSet: seekerEvent})
  },
  // THESE 2 MODELS ARE SPECIFICALLY FOR DATA LOADING:
  // to create relevant documents - update as needed
  createInDb: (items, callback) => {
    items.forEach((item) => {
      db.Seeker.create(item)
        .then((res) => {
          callback(null, res);
        })
        .catch((err) => {
          callback(err);
        });
    });
  },
  // to clear relevant collections - update as needed
  clearDb: () => {
    db.Employer.deleteMany()
      .then(() => {
        console.log('Collection cleared');
      })
      .catch((err) => {
        console.log('Unable to clear collection', err);
      });
  },
};
