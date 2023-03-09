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
    db.Seeker.create(items)
      .then((res) => {
        callback(null, res);
      })
      .catch((err) => {
        callback(err);
      });
  },
  // to clear relevant collections - update as needed
  clearDb: () => {
    db.Seeker.deleteMany()
      .then(() => {
        console.log('Collection cleared');
      })
      .catch((err) => {
        console.log('Unable to clear collection', err);
      });
  },
  getJobsByIdArray: (ids) => {
    return db.Job.find({ id: { $in: ids } });
  },
  getSeekersByIdArray: (query) => {
    const { uid, jobId } = query;
    return db.BlogPost.find({});
  },
  updateJobApplied: async (data) => {
    const { uid, ids } = data;
    const userInfo = await db.Seeker.find({ uid });
    const { saved } = userInfo[0];
    console.log('saved', saved);
    const notInIds = (id) => {
      console.log(typeof (id));
      if (ids.includes(id)) {
        return false;
      }
      return true;
    };
    saved.interested = saved.interested.filter(notInIds);
    saved['very interested'] = saved['very interested'].filter(notInIds);
    saved['extremely interested'] = saved['extremely interested'].filter(notInIds);
    ids.forEach((id) => {
      saved.applied.push(id);
    });
    console.log('saved', saved);
    return db.Seeker.findOneAndUpdate({ uid }, { saved }, { new: true });
  },
  updateJobInterested: (uid, jobId) => {
    return db.BlogPost.find({});
  },
  updateSeekerInterested: (uid, seekerId) => {
    return db.BlogPost.find({});
  },
};
