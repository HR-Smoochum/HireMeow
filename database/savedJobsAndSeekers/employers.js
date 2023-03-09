const model = require('../../server/models.js');

// update base on whatever data you need to import
// uid: Number,
// first_name: String,
// last_name: String,
// industry: String,
// notes: Array,
// saved: Object,
const employerData = [
  {
    uid: 1,
    first_name: 'Elon',
    last_name: 'Musk',
    industry: 'Tech',
    notes: [],
    saved: { interested: [1, 2], 'very interested': [3, 6], 'extremely interested': [4, 5] },
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
    notes: [],
    saved: { interested: [2, 3], 'very interested': [1, 4], 'extremely interested': [5, 6] },
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
  }];
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
load(employerData);
