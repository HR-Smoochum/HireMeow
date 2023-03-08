const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jobsite');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to database');
});

const seeker = mongoose.Schema({
  uid: {
    type: Number,
    unique: true,
  },
  first_name: String,
  last_name: String,
  industry: String,
  resume: Object, // {title: '', skills:''}
  notes: Array,
  saved: Object,
  events: Array,
});
/* e.g
saved: {
  interested: [12, 4, 14, 3],
  veryInterested: [6, 9, 17],
  extremelyInterested: [13, 1, 5],
  applied: [2, 7, 10],
  interviewedFor: [11, 8, 16]
}
events: [
  {title: 'Interview with BirdWatchers', date: '2023-03-17T00:30:00Z'},
  {title: 'Interview with Catnap Co', date: '2023-03-21T21:30:00Z'}
]
*/

const employer = mongoose.Schema({
  uid: {
    type: Number,
    unique: true,
  },
  first_name: String,
  last_name: String,
  industry: String,
  notes: Array,
  saved: Object,
  events: Array,
});

const job = mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  title: String,
  company: String,
  logo: String,
  description: String,
  industry: String,
  location: String,
  experience: String,
  salary: String,
  employment: String, // full time/part time
  environment: String, // remote or onsite
  date: Date,
  logo: String,
});

const blogPost = mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
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
