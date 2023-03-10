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
  getNotes: () => {
    return Seeker.find({});
  },
  postResume: (file, path, seekerName) => {
    return Seeker.updateOne({ uid: seekerName }, {
      resumeFilePath: `${path}`,
    });
  },
  postSeeker: (user) => {
    return Seeker.create(user);
  },
  postEmployer: (user) => {
    return Employer.create(user);
  },
  getResumeId: (seekerId) => {
    return Seeker.find({ uid: seekerId });
  },
  getJobsByIdArray: (ids) => {
    return Job.find({ id: { $in: ids } });
  },
  getSeekersByIdArray: (ids) => {
    return Seeker.find({ uid: { $in: ids } });
  },
  updateJobApplied: async (data) => {
    const { uid, ids } = data;
    const userInfo = await Seeker.find({ uid });
    const { saved } = userInfo[0];
    // console.log('saved', saved);
    const notInIds = (id) => {
      // console.log(typeof (id));
      if (ids.includes(id)) {
        return false;
      }
      return true;
    };
    saved.interested = saved.interested.filter(notInIds);
    saved.veryInterested = saved.veryInterested.filter(notInIds);
    saved.extremelyInterested = saved.extremelyInterested.filter(notInIds);
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
    saved.veryInterested = saved.veryInterested.filter(removeId);
    saved.extremelyInterested = saved.extremelyInterested.filter(removeId);
    saved[level].push(id);
    // console.log('saved', saved);
    return Seeker.findOneAndUpdate({ uid }, { saved }, { new: true });
  },
  updateSeekerInterested: async (data) => {
    // console.log('data', data);
    const { uid, id, level } = data;
    const userInfo = await Employer.find({ uid });
    const { saved } = userInfo[0];
    // console.log('saved', saved);
    const removeId = (item) => {
      return parseInt(id, 10) !== item;
    };
    saved.interested = saved.interested.filter(removeId);
    saved.veryInterested = saved.veryInterested.filter(removeId);
    saved.extremelyInterested = saved.extremelyInterested.filter(removeId);
    saved[level].push(parseInt(id, 10));
    // console.log('saved', saved);
    return Employer.findOneAndUpdate({ uid }, { saved }, { new: true });
  },
  updateASeekerEvent: (id, seekerEvent) => {
    return Seeker.updateOne({uid: id}, {$addToSet: seekerEvent})
  },
  updateAnEmployerEvent: (id, employerEvent) => {
    return Employer.updateOne({uid: id}, {$addToSet: employerEvent})
  },
};
