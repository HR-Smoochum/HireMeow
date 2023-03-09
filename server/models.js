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
    // console.log('saved', saved);
    return db.Seeker.findOneAndUpdate({ uid }, { saved }, { new: true });
  },
  updateJobInterested: async (data) => {
    const { uid, id, level } = data;
    const userInfo = await db.Seeker.find({ uid });
    const { saved } = userInfo[0];
    // console.log('saved', saved);
    const removeId = (item) => {
      return id !== item;
    };
    saved.interested = saved.interested.filter(removeId);
    saved['very interested'] = saved['very interested'].filter(removeId);
    saved['extremely interested'] = saved['extremely interested'].filter(removeId);
    saved[level].push(id);
    // console.log('saved', saved);
    return db.Seeker.findOneAndUpdate({ uid }, { saved }, { new: true });
  },
  updateSeekerInterested: (uid, seekerId) => {
    return db.BlogPost.find({});
  },
};
