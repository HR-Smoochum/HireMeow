const model = require('../../server/models.js');

// update base on whatever data you need to import
// uid: Number,
// first_name: String,
// last_name: String,
// industry: String,
// resume: Object, // {Jobtitle: '', body:'', skill:''}
// notes: Array,
// saved: Object,
const seekerData = [
  {
    uid: 1,
    first_name: 'Elon',
    last_name: 'Musk',
    industry: 'Tech',
    resume: { title: 'software engineer', skills: 'MongoDB, Node.js, Javascript' },
    notes: [],
    saved: {
      interested: [1, 2], 'very interested': [6, 8], 'extremely interested': [4], applied: [3], 'interviewed for': [5, 7],
    },
    events: [
      {
        title: 'Interview with Cat Publishing Co',
        date: '2023-03-20T16:00:00Z',
      },
      {
        title: 'Networking Event for Writers',
        date: '2023-04-08T21:30:00Z',
      },
    ],
  },
  {
    uid: 2,
    first_name: 'Bill',
    last_name: 'Gates',
    industry: 'Medical',
    resume: { title: 'Pharmaceutical Sales', skills: 'Customer service, Motivation for sales, Meeting sales goals' },
    notes: [],
    saved: {
      interested: [1, 2], 'very interested': [6, 8], 'extremely interested': [4], applied: [3], 'interviewed for': [5, 7],
    },
    events: [
      {
        title: 'Interview with Cat Publishing Co',
        date: '2023-03-20T16:00:00Z',
      },
      {
        title: 'Networking Event for Writers',
        date: '2023-04-08T21:30:00Z',
      },
    ],
  },
  {
    uid: 3,
    first_name: 'Eva',
    last_name: 'Chen',
    industry: 'Software Engineer',
    resume: { title: 'Pharmaceutical Sales', skills: 'Customer service, Motivation for sales, Meeting sales goals' },
    notes: [],
    saved: {},
    events: [
      {
        title: 'Interview with Cat Publishing Co',
        date: '2023-03-20T16:00:00Z',
      },
      {
        title: 'Networking Event for Writers',
        date: '2023-04-08T21:30:00Z',
      },
    ],
  },
  {
    uid: 4,
    first_name: 'Ava',
    last_name: 'Wong',
    industry: 'Software Engineer',
    resume: { title: 'software engineer', skills: 'MongoDB, Node.js, Javascript' },
    notes: [],
    saved: {},
    events: [
      {
        title: 'Interview with Cat Publishing Co',
        date: '2023-03-20T16:00:00Z',
      },
      {
        title: 'Networking Event for Writers',
        date: '2023-04-08T21:30:00Z',
      },
    ],
  },
  {
    uid: 5,
    first_name: 'Max',
    last_name: 'Zhou',
    industry: 'Software Engineer',
    resume: { title: 'software engineer', skills: 'MongoDB, Node.js, Javascript' },
    notes: [],
    saved: {},
    events: [
      {
        title: 'Interview with Cat Publishing Co',
        date: '2023-03-20T16:00:00Z',
      },
      {
        title: 'Networking Event for Writers',
        date: '2023-04-08T21:30:00Z',
      },
    ],
  },
];
const load = (data) => {
  model.createInDb(data, (err, res) => {
    if (err) {
      console.log('err ', err);
    } else {
      console.log('data loaded successfully', res);
    }
  });
};

// Update based on which data you need to load
load(seekerData);