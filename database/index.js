const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jobsite');

// jobs
// blogpost

const seeker = mongoose.Schema({
  uid: String,
  first_name: String,
  last_name: String,
  industry: String,
  resume: String,
  notes: Array,
});

const employer = mongoose.Schema({
  uid: String,
  first_name: String,
  last_name: String,
  industry: String,
  notes: Array,
});

const job = mongoose.Schema({
  title: String,
  description: String,
  location: String,
  salary: Number,
  employment: String,
  experience: String,
  environment: String, // remote/in person
  date: Date,
});

const blogPost = mongoose.Schema({
  uid: String,
  title: String,
  description: String,
  date: Date,
});

const Seeker = mongoose.model('Seeker', seeker, 'Seeker');
const Employer = mongoose.model('Employer', employer, 'Employer');
const Job = mongoose.model('Job', job, 'Job');
const BlogPost = mongoose.model('BlogPost', blogPost, 'BlogPost');

module.exports = {
  // createTeam: (teamName, teamList) => {
  //   return Machine.create({
  //     name: teamName,
  //     team: teamList,
  //   });
  // },
  // getTeam: (teamName) => Machine.find({ name: teamName }),
  // getTeams: () => Machine.find({}),
};
