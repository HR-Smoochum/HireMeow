const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jobsite');

const seeker = mongoose.Schema({
  uid: String,
  first_name: String,
  last_name: String,
  industry: String,
  resume: Object,
  notes: Array,
  saved: Object,
  /* example saved object
  { interested: [123, 431, 454, 343], very interested: [6, 9, 17], extremely interested: [234, 4234, 343], applied: [43,56,23], interviewed for: [45, 8, 2]}
  */
});

const employer = mongoose.Schema({
  uid: String,
  first_name: String,
  last_name: String,
  industry: String,
  notes: Array,
  saved: Object, // candidates they have saved
});

const job = mongoose.Schema({
  id: Number,
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
