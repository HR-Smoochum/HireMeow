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
        console.log('unable to get seekers with error ', err);
      });
  },
  getEmployers: (req, res) => {
    models.getAllEmployers()
      .then((dbRes) => {
        res.send(JSON.stringify(dbRes));
      })
      .catch((err) => {
        console.log('unable to get employers with error ', err);
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
        console.log('unable to get blog posts with error ', err);
      });
  },
};
