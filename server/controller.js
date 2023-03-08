const models = require('./models.js');

module.exports = {
  get: (req, res) => {
    res.send('hello from jobsite!');
  },
  getSeekers: (req, res) => {
    models.getAllSeekers()
      .then((dbRes) => {
        res.send(JSON.stringify(dbRes));
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },
  getEmployers: (req, res) => {
    models.getAllEmployers()
      .then((dbRes) => {
        res.send(JSON.stringify(dbRes));
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },
  getJobs: (req, res) => {
    models.getAllJobs()
      .then((dbRes) => {
        res.send(JSON.stringify(dbRes));
      })
      .catch((err) => {
        console.log('unable to get jobs with error ', err);
      });
  },
  getBlogPosts: (req, res) => {
    models.getAllBlogPosts()
      .then((dbRes) => {
        res.send(JSON.stringify(dbRes));
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },
};
