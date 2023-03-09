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

  getJobsByIdArray: (ids) => {
    return Job.find({ id: { $in: ids } });
  },
  getSeekersByIdArray: (query) => {
    const { uid, jobId } = query;
    return BlogPost.find({});
  },
  updateJobApplied: async (data) => {
    const { uid, ids } = data;
    const userInfo = await Seeker.find({ uid });
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
    return Seeker.findOneAndUpdate({ uid }, { saved }, { new: true });
  },
  updateJobInterested: async (data) => {
    const { uid, id, level } = data;
    const userInfo = await Seeker.find({ uid });
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
    return Seeker.findOneAndUpdate({ uid }, { saved }, { new: true });
  },
  updateSeekerInterested: ({ uid, seekerId }) => {
    return BlogPost.find({});
  },
  updateASeekerEvent: (id, seekerEvent) => {
    return Seeker.updateOne({uid: id}, {$addToSet: seekerEvent})
  },
  updateAnEmployerEvent: (id, employerEvent) => {
    return Employer.updateOne({uid: id}, {$addToSet: employerEvent})
  },
};
