const models = require('./models.js');

module.exports = {
  getSeekers: (req, res) => {
    models.getAllSeekers()
      .then((dbRes) => res.send(dbRes))
      .catch((err) => res.status(400).send(err));
  },
  getASeeker: (req, res) => {
    models.getASeeker(req.params.uid)
      .then((dbRes) => res.send(dbRes))
      .catch((err) => res.status(400).send(err));
  },
  getEmployers: (req, res) => {
    models.getAllEmployers()
      .then((dbRes) => res.send(dbRes))
      .catch((err) => res.status(400).send(err));
  },
  getAnEmployer: (req, res) => {
    models.getAnEmployer(req.params.uid)
      .then((dbRes) => res.send(dbRes))
      .catch((err) => res.status(400).send(err));
  },
  getJobs: (req, res) => {
    models.getAllJobs()
      .then((dbRes) => res.send(dbRes))
      .catch((err) => res.status(400).send(err));
  },
  getAJob: (req, res) => {
    models.getAJob(req.params.id)
      .then((dbRes) => res.send(dbRes))
      .catch((err) => res.status(400).send(err));
  },
  getBlogPosts: (req, res) => {
    models.getAllBlogPosts()
      .then((dbRes) => res.send(dbRes))
      .catch((err) => res.status(400).send(err));
  },
};
