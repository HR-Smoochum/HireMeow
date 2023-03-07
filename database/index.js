const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jobsite');

const seeker = mongoose.Schema({
  uid: Number,
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
  uid: Number,
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
  industry: String,
  location: String,
  experience: String,
  environment: String, // remote/in person
  salary: String,
  employment: String,
  date: Date,
  logo: String,
});

const blogPost = mongoose.Schema({
  uid: Number,
  title: String,
  description: String,
  date: Date,
});

module.exports = {
  Seeker: mongoose.model('Seeker', seeker, 'Seeker'),
  Employer: mongoose.model('Employer', employer, 'Employer'),
  Job: mongoose.model('Job', job, 'Job'),
  BlogPost: mongoose.model('BlogPost', blogPost, 'BlogPost'),
};
