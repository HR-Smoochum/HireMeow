const {
  Seeker,
  Employer,
  Job,
  BlogPost,
} = require('../database/index.js');

module.exports = {
  getAllSeekers: () => {
    return Seeker.find({});
  },
  getASeeker: (id) => {
    return Seeker.find({ uid: id });
  },
  getAllEmployers: () => {
    return Employer.find({});
  },
  getAnEmployer: (id) => {
    return Employer.find({ uid: id });
  },
  getAllJobs: () => {
    return Job.find({});
  },
  getAJob: (jobId) => {
    return Job.find({ id: jobId });
  },
  getAllBlogPosts: () => {
    return BlogPost.find({});
  },

  // These are functions used within the database/savedJobsAndSeekers
  // Should be deleted later
  createInDb: (items, callback) => {
    Seeker.create(items)
      .then((res) => {
        callback(null, res);
      })
      .catch((err) => {
        callback(err);
      });
  },

  clearDb: () => {
    Seeker.deleteMany()
      .then(() => {
        console.log('Collection cleared');
      })
      .catch((err) => {
        console.log('Unable to clear collection', err);
      });
  },
};
