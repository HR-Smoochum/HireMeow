const path = require('path');
const models = require('./models.js');
const fs = require('fs');

module.exports = {
  getSeekers: (req, res) => {
    models.getAllSeekers()
      .then((dbRes) => res.send(dbRes))
      .catch((err) => res.status(400).send(err));
  },
  getASeeker: (req, res) => {
    console.log('here???');
    models.getASeeker(req.params.uid)
      .then((dbRes) => res.send(dbRes[0]))
      .catch((err) => res.status(400).send(err));
  },
  getEmployers: (req, res) => {
    models.getAllEmployers()
      .then((dbRes) => res.send(dbRes))
      .catch((err) => res.status(400).send(err));
  },
  getAnEmployer: (req, res) => {
    models.getAnEmployer(req.params.uid)
      .then((dbRes) => res.send(dbRes[0]))
      .catch((err) => res.status(400).send(err));
  },
  getJobs: (req, res) => {
    models.getAllJobs()
      .then((dbRes) => res.send(dbRes))
      .catch((err) => res.status(400).send(err));
  },
  getAJob: (req, res) => {
    models.getAJob(req.params.id)
      .then((dbRes) => res.send(dbRes[0]))
      .catch((err) => res.status(400).send(err));
  },
  getBlogPosts: (req, res) => {
    models.getAllBlogPosts()
      .then((dbRes) => res.send(dbRes))
      .catch((err) => res.status(400).send(err));
  },
  updateASeekerEvent: (req, res) => {
    const interviewEvent = {
      title: req.body.employer,
      date: req.body.interviewTime,
    };
    console.log('this is backend interviewEvent', interviewEvent);
    models.updateASeekerEvent(req.params.uid, { events: interviewEvent })
      .then((dbRes) => res.send(dbRes))
      .catch((err) => res.status(400).send(err));
  },
  updateAnEmployerEvent: (req, res) => {
    const interviewEvent = {
      title: req.body.candidate,
      date: req.body.interviewTime,
    };
    console.log('this is backend interviewEvent', interviewEvent);
    models.updateAnEmployerEvent(req.params.uid, { events: interviewEvent })
      .then((dbRes) => res.send(dbRes))
      .catch((err) => res.status(400).send(err));
  },
  getJobsByIdArray: (req, res) => {
    // console.log('getJobsByIdArray query', req.query);
    models.getJobsByIdArray(req.query.ids)
      .then((dbRes) => res.send(dbRes))
      .catch((err) => res.status(400).send(err));
  },
  getSeekersByIdArray: (req, res) => {
    console.log('getSeekersByIdArray', req.query.ids);
    models.getSeekersByIdArray(req.query.ids)
      .then((dbRes) => res.send(dbRes))
      .catch((err) => res.status(400).send(err));
  },
  updateJobApplied: (req, res) => {
    // console.log('updateJobApplied query', req.body);
    models.updateJobApplied(req.body)
      .then((dbRes) => res.send(dbRes))
      .catch((err) => res.status(400).send(err));
  },
  updateJobInterested: (req, res) => {
    // console.log('updateJobInterested query', req.body);
    models.updateJobInterested(req.body)
      .then((dbRes) => res.send(dbRes))
      .catch((err) => res.status(400).send(err));
  },
  updateSeekerInterested: (req, res) => {
    models.updateSeekerInterested(req.body)
      .then((dbRes) => res.send(dbRes))
      .catch((err) => res.status(400).send(err));
  },
  postResume: (req, res) => {
    const fileInfo = req.file;
    const fileName = fileInfo.filename;
    // TODO: update with actual UID
    const seekerUID = 4;
    // need to add this file to the relevant user section
    models.postResume(fileInfo, fileName, seekerUID)
      .then((dbRes) => {
        res.send(dbRes);
      })
      .catch((err) => res.status(400).send(err));
  },
  getResumeId: (req, res) => {
    models.getResumeId(4)
      .then((response) => {
        const resumeId = response[0].resumeFilePath;
        res.send(resumeId);
      })
      .catch((err) => {
        console.log('could not retrieve from database ', err);
      });
  },
  getResume: (req, res) => {
    // TODO: server dynamic file based on UID
    // create variable to store requestedFilePath
    // find the current user in the database
      // find that user's resume link
      // set requestedFilePath equal to that resume link
    const requestedFile = '44a6779349ed5a664ed26e0cb98d1cc0';
    const relevantFilePath = path.join(__dirname, '../database/uploads/', requestedFile);

    fs.readFile(relevantFilePath, (err, content) => {
      if (err) {
        console.log('error reading ', err);
      } else {
        res.writeHead(200, { 'Content-type': 'application/pdf' });
        res.end(content);
      }
    });
  },
  getNotes: (req, res) => {
    models.getNotes()
      .then((response) => {
        const fourth = response.filter((seeker) => {
          return seeker.uid === '4';
        });
        res.send(fourth[0]);
      })
      .catch((err) => {
        console.log('unable to query database, error: ', err);
      });
  },
  postSeeker: (req, res) => {
    models.postSeeker(req.body)
      .then(() => {
        res.sendStatus(201);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },
  postEmployer: (req, res) => {
    models.postEmployer(req.body)
      .then(() => {
        res.sendStatus(201);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },
};
