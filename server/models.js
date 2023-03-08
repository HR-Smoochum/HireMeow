const mongoose = require('mongoose'); // not necessary, mongoose already required from db import
const db = require('../database');

module.exports = {
  getAllSeekers: () => {
    return db.Seeker.find({});
  },
  getAllEmployers: () => {
    return db.Employer.find({});
  },
  getAllJobs: () => {
    return db.Job.find({});
  },
  getAllBlogPosts: () => {
    return db.BlogPost.find({});
  },
  // to create relevant documents - update as needed
  createInDb: (items, callback) => {
    items.forEach((item) => {
      db.Employer.create(item)
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
        console.log('cleared');
      })
      .catch((err) => {
        console.log('unable to clear, with error ', err);
      });
  },
};
