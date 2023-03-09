const models = require('./models.js');

module.exports = {
  getSeekers: (req, res) => {
    models.getAllSeekers()
      .then((dbRes) => res.send(dbRes))
      .catch((err) => res.status(400).send(err));
  },
  getASeeker: (req, res) => {
    console.log('here???');
    models.getASeeker(req.params.uid)
      .then((dbRes) => res.send(dbRes[0]))
      .catch((err) => res.status(400).send(err));
  },
  getEmployers: (req, res) => {
    models.getAllEmployers()
      .then((dbRes) => res.send(dbRes))
      .catch((err) => res.status(400).send(err));
  },
  getAnEmployer: (req, res) => {
    models.getAnEmployer(req.params.uid)
      .then((dbRes) => res.send(dbRes[0]))
      .catch((err) => res.status(400).send(err));
  },
  getJobs: (req, res) => {
    models.getAllJobs()
      .then((dbRes) => res.send(dbRes))
      .catch((err) => res.status(400).send(err));
  },
  getAJob: (req, res) => {
    models.getAJob(req.params.id)
      .then((dbRes) => res.send(dbRes[0]))
      .catch((err) => res.status(400).send(err));
  },
  getBlogPosts: (req, res) => {
    models.getAllBlogPosts()
      .then((dbRes) => res.send(dbRes))
      .catch((err) => res.status(400).send(err));
  },
  updateASeekerEvent: (req, res) => {
    const interviewEvent = {
      title: req.body.employer,
      date: req.body.interviewTime,
    };
    console.log('this is backend interviewEvent', interviewEvent);
    models.updateASeekerEvent(req.params.uid, { events: interviewEvent })
      .then((dbRes) => res.send(dbRes))
      .catch((err) => res.status(400).send(err));
  },
  updateAnEmployerEvent: (req, res) => {
    const interviewEvent = {
      title: req.body.candidate,
      date: req.body.interviewTime,
    };
    console.log('this is backend interviewEvent', interviewEvent);
    models.updateAnEmployerEvent(req.params.uid, { events: interviewEvent })
      .then((dbRes) => res.send(dbRes))
      .catch((err) => res.status(400).send(err));
  },
  getJobsByIdArray: (req, res) => {
    // console.log('getJobsByIdArray query', req.query);
    models.getJobsByIdArray(req.query.ids)
      .then((dbRes) => res.send(dbRes))
      .catch((err) => res.status(400).send(err));
  },
  getSeekersByIdArray: (req, res) => {
    models.getSeekersByIdArray(req.query)
      .then((dbRes) => res.send(dbRes))
      .catch((err) => res.status(400).send(err));
  },
  updateJobApplied: (req, res) => {
    // console.log('updateJobApplied query', req.body);
    models.updateJobApplied(req.body)
      .then((dbRes) => res.send(dbRes))
      .catch((err) => res.status(400).send(err));
  },
  updateJobInterested: (req, res) => {
    console.log('updateJobInterested query', req.body);
    models.updateJobInterested(req.body)
      .then((dbRes) => res.send(dbRes))
      .catch((err) => res.status(400).send(err));
  },
  updateSeekerInterested: (req, res) => {
    models.updateSeekerInterested()
      .then((dbRes) => res.send(dbRes))
      .catch((err) => res.status(400).send(err));
  },
};
