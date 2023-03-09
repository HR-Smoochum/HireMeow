// schemas
const {
  Seeker,
  Employer,
  Job,
  BlogPost,
} = require('./index.js');

// data
const seekers = require('./exampleData/seekers.js');
const employers = require('./exampleData/employers.js');
const jobs = require('./exampleData/jobs.js');
const blogs = require('./exampleData/blogs.js');

// clear db
const dropDB = () => {
  const promises = [
    Seeker.deleteMany({}),
    Employer.deleteMany({}),
    Job.deleteMany({}),
    BlogPost.deleteMany({}),
  ];

  return Promise.all(promises);
};

// load function
const loadDB = () => {
  const promises = [
    Seeker.insertMany(seekers),
    Employer.insertMany(employers),
    Job.insertMany(jobs),
    BlogPost.insertMany(blogs),
  ];

  return Promise.all(promises);
};

dropDB()
  .then(() => {
    console.log('successfully deleted collection');
    return loadDB();
  })
  .then(() => {
    console.log('successfully loaded data');
    process.exit();
  })
  .catch((err) => {
    console.log('error loading data', err);
  });
