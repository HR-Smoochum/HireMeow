const seekers = [
  {
    uid: 1,
    first_name: 'Meow',
    last_name: 'Angelou',
    industry: 'Arts & Literature',
    resume: {
      name: 'Meow Angelou',
      title: 'Pawthor',
      contact: {
        phone: '555-555-5555',
        email: 'meowangelou@example.com',
        address: {
          street: '1234 Whisker Lane',
          city: 'Anytown',
          state: 'CA',
          zip: '12345',
        },
      },
      skills: [
        'Excellent communicator',
        'Experienced in writing and storytelling',
        'Ability to inspire and uplift others',
        'Strong intuition and emotional intelligence',
        'Curiosity and love for learning',
      ],
      experience: [
        {
          title: 'Writer',
          company: 'Feline Fiction Publishers',
          startDate: 'January 2019',
          endDate: 'Present',
          responsibilities: [
            'Write and edit fiction books for cats',
            'Work with illustrators and editors to ensure high-quality publications',
            'Market and promote books to cat lovers',
            'Collaborate with other writers to create anthologies and collections',
          ],
        },
        {
          title: 'Storyteller',
          company: 'Meow Meow Storytelling Club',
          startDate: 'May 2017',
          endDate: 'Present',
          responsibilities: [
            'Tell stories to feline and human audiences',
            'Develop and adapt stories to fit the audience and occasion',
            'Engage and connect with listeners',
            'Promote storytelling events and activities',
          ],
        },
      ],
      education: [
        {
          degree: 'Bachelor of Arts in English',
          institution: 'Cat University',
          completionDate: 'May 2016',
        },
        {
          degree: 'Master of Fine Arts in Creative Writing',
          institution: 'Purrfect Writing School',
          completionDate: 'May 2018',
        },
      ],
      awards: [
        'National Book Award for Fiction',
        'Presidential Medal of Freedom',
        'Grammy Award for Best Spoken Word Album',
        'NAACP Image Award for Outstanding Literary Work',
      ],
    },
    notes: [
      {
        title: 'Networking Event',
        text: 'Attended a networking event for cat writers and made connections with several publishers and agents.',
      },
      {
        title: 'Job Application',
        text: 'Applied for a position as a copy editor at a major publishing house.',
      },
      {
        title: 'Interview',
        text: 'Had a phone interview with a cat-themed magazine for a contributing writer position.',
      },
      {
        title: 'Portfolio Review',
        text: 'Met with a freelance editor to review my writing portfolio and get feedback on my work.',
      },
    ],
    saved: {
      interested: [3, 5, 12],
      veryInterested: [1, 8, 11],
      extremelyInterested: [9, 16, 19],
      applied: [2, 7],
      interviewedFor: [4],
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
    first_name: 'Catniss',
    last_name: 'Everdeen',
    industry: 'Gastronomy',
    resume: {
      name: 'Catniss Everdeen',
      title: 'Food Critic',
      contact_information: {
        email: 'catWhiskers@catmail.com',
        phone: '(555) 555-5555',
        address: '1234 Scratchpost Lane, Anytown, USA',
      },
      objective: 'To use my exceptional taste buds and love of fine dining to provide insightful and honest reviews of the best cat food out there.',
      education: [
        {
          institution: 'Self-taught',
          degree: 'Connoisseur of cat food',
        },
        {
          institution: 'University of Napping',
          degree: 'Graduate with honors',
        },
      ],
      skills: [
        'Highly developed sense of taste',
        'Keen eye for presentation and plating',
        'Excellent verbal and written communication skills',
        'Able to work independently or as part of a team',
        'Comfortable in a fast-paced environment',
      ],
      experience: [
        {
          position: 'Food critic',
          employer: 'Feline Foodie magazine',
          description: 'Wrote over 100 reviews of cat food products and restaurants.',
        },
        {
          position: 'Judge',
          employer: 'Cat Cuisine competition',
          description: 'Evaluated the taste and presentation of various cat food dishes.',
        },
      ],
      achievements: [
        'Named "Cat Food Critic of the Year" by the International Cat Food Critics Association',
        'Received numerous awards and accolades for insightful and honest reviews',
        'Developed a loyal following of readers who trust my opinions and recommendations',
      ],
      references: 'Available upon request',
    },
    notes: [
      {
        title: 'Day 1',
        text: 'Updated my resume and cover letter\nMade a list of cat food companies and publications that might be hiring a food critic\nApplied for a few jobs and sent my resume to some contacts in the industry',
      },
      {
        title: 'Day 7',
        text: 'Followed up with the companies I applied to last week to see if they had any updates or feedback\nDid some research on networking opportunities for cat food critics and found a local cat food festival to attend',
      },
      {
        title: 'Day 14',
        text: 'Attended the cat food festival and met some industry insiders\nLearned about a new cat food company that is hiring a food critic and submitted my application on the spot',
      },
      {
        title: 'Day 21',
        text: 'Heard back from the cat food company and scheduled a phone interview for next week\nDid some preparation for the interview by researching the company and practicing answers to common food critic interview questions',
      },
      {
        title: 'Day 28',
        text: "Had a great phone interview with the cat food company and was invited for an in-person interview\nVisited the company's headquarters and met with the hiring manager and some other employees\nAnswered questions about my experience and taste preferences, and provided samples of some of my favorite cat food dishes",
      },
      {
        title: 'Day 35',
        text: 'Received an offer from the cat food company and accepted the position!\nExcited to start my new job as a food critic and try out some new cat food recipes',
      },
    ],
    saved: {
      interested: [2, 6, 10],
      veryInterested: [1, 5],
      extremelyInterested: [7, 13],
      applied: [9, 11, 15],
      interviewedFor: [8, 12],
    },
    events: [
      {
        title: 'Interview with WhiskerFoods',
        date: '2023-03-15T17:00:00Z',
      },
      {
        title: 'Tasting event at MeowMix Co',
        date: '2023-04-03T16:30:00Z',
      },
    ],
  },
  {
    uid: 3,
    first_name: 'Mouse',
    last_name: 'Ketcher',
    industry: 'Home Maintenance',
    resume: {
      name: 'Mouse Ketcher',
      title: 'Pest Exterminator',
      contact: {
        phone: '555-555-5555',
        email: 'mouseketcher@example.com',
        address: {
          street: '123 Main St',
          city: 'Anytown',
          state: 'CA',
          zip: '12345',
        },
      },
      skills: [
        'Expert hunter',
        'Quick and agile',
        'Keen senses',
      ],
      experience: [
        {
          title: 'Pest Exterminator',
          company: 'Purrfect Pest Control',
          startDate: 'January 2021',
          endDate: 'Present',
          responsibilities: [
            'Inspected homes and buildings for pests',
            'Set traps and bait to capture pests',
            'Removed pests from homes and buildings',
            'Provided recommendations to prevent future pest problems',
          ],
        },
        {
          title: 'Mouse Hunter',
          company: 'Self-Employed',
          startDate: 'January 2020',
          endDate: 'December 2020',
          responsibilities: [
            'Hunted mice in homes and gardens',
            'Captured and removed mice from homes and gardens',
            'Provided recommendations to prevent future mouse problems',
          ],
        },
      ],
      education: [
        {
          degree: 'Cat School Certification in Pest Control',
          institution: 'Feline Academy',
          completionDate: 'December 2020',
        },
      ],
    },
    notes: [
      {
        title: 'Day 1',
        text: 'Polished my resume and cover letter\nMade a list of pest control companies in the area and checked their websites for job openings\nSent my resume and cover letter to a few companies',
      },
      {
        title: 'Day 5',
        text: 'Received a call from Pawsitively Pest Control to schedule an interview\nResearched the company and prepared answers to common pest control interview questions\nReviewed my experience and qualifications for the position',
      },
      {
        title: 'Day 10',
        text: 'Had a great interview with Pawsitively Pest Control and received positive feedback\nSent a follow-up email thanking the interviewer for their time and reiterating my interest in the position\nContinued to search for other job openings and submit applications',
      },
      {
        title: 'Day 15',
        text: 'Received a job offer from Pawsitively Pest Control and accepted the position\nExcited to start my new job as a Pest Exterminator and help keep homes and buildings pest-free!',
      },
    ],
    saved: {
      interested: [1, 3, 7],
      veryInterested: [2, 8, 14],
      extremelyInterested: [10, 15],
      applied: [5],
      interviewedFor: [6, 12, 17],
    },
    events: [
      {
        title: 'Interview with Furry Friends Exterminators',
        date: '2023-03-18T17:00:00Z',
      },
      {
        title: 'Interview with Cat Control Solutions',
        date: '2023-03-24T19:30:00Z',
      },
    ],
  },
  {
    uid: 4,
    first_name: 'Sir',
    last_name: 'Pursalot',
    resume: {
      name: 'Sir Pursalot',
      title: 'Ornithologist',
      contact: {
        phone: '555-555-5555',
        email: 'sirpursalot@example.com',
        address: {
          street: '123 Main St',
          city: 'Anytown',
          state: 'CA',
          zip: '12345',
        },
      },
      skills: [
        'Expert birdwatcher',
        'Knowledgeable about local bird species',
        'Experience conducting bird surveys',
      ],
      experience: [
        {
          title: 'Ornithologist',
          company: 'Feathered Friends Society',
          startDate: 'January 2021',
          endDate: 'Present',
          responsibilities: [
            'Conducted bird surveys and documented findings',
            'Assisted with bird habitat restoration projects',
            'Organized birdwatching tours for the public',
          ],
        },
        {
          title: 'Birdwatcher',
          company: 'Self-Employed',
          startDate: 'January 2020',
          endDate: 'December 2020',
          responsibilities: [
            'Observed and identified local bird species',
            'Contributed to citizen science projects',
            'Maintained a personal database of bird sightings',
          ],
        },
      ],
      education: [
        {
          degree: 'Bachelor of Science in Biology',
          institution: 'Cat University',
          completionDate: 'May 2019',
        },
      ],
    },
    notes: [
      {
        title: 'Day 1',
        text: 'Polished my resume and cover letter\nMade a list of ornithology job openings and checked their requirements\nSent my resume and cover letter to a few companies',
      },
      {
        title: 'Day 5',
        text: 'Received a call from Avian Adventures to schedule an interview\nResearched the company and prepared answers to common ornithology interview questions\nReviewed my experience and qualifications for the position',
      },
      {
        title: 'Day 10',
        text: 'Had a great interview with Avian Adventures and received positive feedback\nSent a follow-up email thanking the interviewer for their time and reiterating my interest in the position\nContinued to search for other job openings and submit applications',
      },
      {
        title: 'Day 15',
        text: 'Received a job offer from Avian Adventures and accepted the position\nExcited to start my new job as an Ornithologist and continue learning about local bird species!',
      },
    ],
    saved: {
      interested: [4, 6, 9],
      veryInterested: [1, 7],
      extremelyInterested: [12, 16],
      applied: [3, 11],
      interviewedFor: [2, 5, 8],
    },
    event: [
      {
        title: 'Interview with BirdWatchers',
        date: '2023-03-17T17:30:00Z',
      },
      {
        title: 'Interview with Catnap Co',
        date: '2023-04-03T20:00:00Z',
      },
    ],
  },
  {
    uid: 5,
    first_name: 'Garth',
    last_name: 'Field',
    industry: 'Health & Wellness',
    resume: {
      name: 'Garth Field',
      title: 'Sleep Specialist',
      contact: {
        phone: '555-555-5555',
        email: 'garfield@lasagna.com',
        address: {
          street: '456 Elm St',
          city: 'Anytown',
          state: 'CA',
          zip: '12345',
        },
      },
      skills: [
        'Expert sleeper',
        'Experience with various sleep positions and surfaces',
        'Knowledgeable about sleep hygiene and sleep disorders',
      ],
      experience: [
        {
          title: 'Sleep Specialist',
          company: 'Cat Nap Clinic',
          startDate: 'January 2021',
          endDate: 'Present',
          responsibilities: [
            'Conducted sleep assessments and provided recommendations for better sleep',
            'Designed and implemented personalized sleep plans for clients',
            'Educated clients on sleep hygiene and healthy sleep habits',
            'Collaborated with veterinary staff to address sleep-related health issues',
          ],
        },
        {
          title: 'Sleep Research Assistant',
          company: 'Feline Sleep Center',
          startDate: 'June 2019',
          endDate: 'December 2020',
          responsibilities: [
            'Assisted with sleep studies and data collection',
            'Conducted literature reviews and analyzed data',
            'Contributed to research publications and presentations',
          ],
        },
      ],
      education: [
        {
          degree: 'Master of Science in Sleep Science',
          institution: 'Feline University',
          completionDate: 'December 2020',
        },
        {
          degree: 'Bachelor of Science in Psychology',
          institution: 'Feline University',
          completionDate: 'May 2018',
        },
      ],
    },
    notes: [
      {
        title: 'Day 1',
        text: 'Polished my resume and cover letter\nResearched sleep specialist job openings in the area\nApplied to several job postings',
      },
      {
        title: 'Day 7',
        text: 'Received an email from Sleep Solutions to schedule an interview\nResearched the company and prepared answers to common sleep specialist interview questions\nReviewed my experience and qualifications for the position',
      },
      {
        title: 'Day 14',
        text: 'Had a great interview with Sleep Solutions and received positive feedback\nSent a follow-up email thanking the interviewer for their time and reiterating my interest in the position\nContinued to search for other job openings and submit applications',
      },
      {
        title: 'Day 21',
        text: 'Received a job offer from Sleep Solutions and accepted the position\nExcited to start my new job as a Sleep Specialist and help clients achieve better sleep!',
      },
    ],
    saved: {
      interested: [2, 5],
      veryInterested: [1, 4, 6],
      extremelyInterested: [11, 14, 17],
      applied: [7, 9],
      interviewedFor: [3, 12],
    },
    events: [
      {
        title: 'Interview with Purrfect Sleep Clinic',
        date: '2023-03-20T17:30:00Z',
      },
      {
        title: 'Interview with Feline Sleep Solutions',
        date: '2023-04-04T16:00:00Z',
      },
    ],
  },
  {
    uid: 6,
    first_name: 'Tabbytha',
    last_name: 'Whiskers',
    industry: 'Home Maintenance',
    resume: {
      name: 'Tabbytha Whiskers',
      title: 'Furniture Deconstructor',
      contact: {
        phone: '555-555-5555',
        email: 'tabbytha@example.com',
        address: {
          street: '789 Oak St',
          city: 'Anytown',
          state: 'CA',
          zip: '12345',
        },
      },
      skills: [
        'Expert at scratching and clawing',
        'Experience with various types of furniture',
        'Ability to work independently or as part of a team',
        'Attention to detail',
      ],
      experience: [
        {
          title: 'Furniture Deconstruction Specialist',
          company: 'Scratch \'n Claw Furniture Removal',
          startDate: 'June 2021',
          endDate: 'Present',
          responsibilities: [
            'Received furniture removal requests and communicated with clients',
            'Deconstructed furniture using claws and teeth',
            'Ensured safe and efficient removal of furniture from homes and buildings',
            'Collaborated with other team members to complete projects on time',
          ],
        },
        {
          title: 'Furniture Tester',
          company: 'Feline Furniture Co.',
          startDate: 'January 2019',
          endDate: 'May 2021',
          responsibilities: [
            'Tested various types of furniture for durability and comfort',
            'Provided feedback to product development team',
            'Participated in photo and video shoots for marketing materials',
          ],
        },
      ],
      education: [
        {
          degree: 'High School Diploma',
          institution: 'Anytown High School',
          completionDate: 'May 2018',
        },
      ],
    },
    notes: [
      {
        title: 'Day 1',
        text: 'Polished my resume and cover letter\nResearched furniture deconstruction job openings in the area\nApplied to several job postings',
      },
      {
        title: 'Day 7',
        text: 'Received an email from Scratch \'n Claw Furniture Removal to schedule an interview\nResearched the company and prepared answers to common furniture deconstruction interview questions\nReviewed my experience and qualifications for the position',
      },
      {
        title: 'Day 14',
        text: 'Had a great interview with Scratch \'n Claw Furniture Removal and received positive feedback\nSent a follow-up email thanking the interviewer for their time and reiterating my interest in the position\nContinued to search for other job openings and submit applications',
      },
      {
        title: 'Day 21',
        text: 'Received a job offer from Scratch \'n Claw Furniture Removal and accepted the position\nExcited to start my new job as a Furniture Deconstruction Specialist and put my clawing skills to work!',
      },
    ],
    saved: {
      interested: [1, 8, 12],
      veryInterested: [3, 10],
      extremelyInterested: [5, 15, 18],
      applied: [2],
      interviewedFor: [6, 13],
    },
    events: [
      {
        title: 'Interview with Purrfect Paws',
        date: '2023-03-24T17:00:00Z',
      },
      {
        title: 'Interview with Feline Furnishings',
        date: '2023-04-03T16:30:00Z',
      },
    ],
  },
  {
    uid: 7,
    firstName: 'Allie',
    lastName: 'Kat',
    industry: 'Health & Wellness',
    resume: {
      name: 'Allie Kat',
      title: 'Professional Lap Warmer',
      contact: {
        phone: '555-555-5555',
        email: 'allieKat@example.com',
        address: {
          street: '123 Main St',
          city: 'Anytown',
          state: 'CA',
          zip: '12345',
        },
      },
      skills: [
        'Expert at warming laps',
        'Excellent customer service skills',
        'Ability to remain calm and peaceful',
        'Knowledge of various relaxation techniques',
      ],
      experience: [
        {
          title: 'Professional Lap Warmer',
          company: 'Cozy Cats Wellness Center',
          startDate: 'January 2022',
          endDate: 'Present',
          responsibilities: [
            'Warm laps of clients and provide a peaceful and calming presence',
            'Ensure clients are comfortable and relaxed during their visit',
            'Offer advice on relaxation techniques and self-care practices',
            'Maintain a clean and peaceful environment for clients',
          ],
        },
        {
          title: 'Meditation Assistant',
          company: 'Mellow Mindfulness Studio',
          startDate: 'May 2021',
          endDate: 'December 2021',
          responsibilities: [
            'Assist meditation instructors with classes',
            'Greet and check in clients, answer questions about classes and services',
            'Ensure a peaceful and welcoming environment for clients',
            'Clean and prepare the studio before and after classes',
          ],
        },
      ],
      education: [
        {
          degree: 'Certificate in Relaxation Techniques',
          institution: 'Anytown Community College',
          completionDate: 'May 2021',
        },
      ],
    },
    notes: [
      {
        title: 'Day 1',
        text: 'Polished my resume and cover letter\nResearched lap warming job openings in the area\nApplied to several job postings',
      },
      {
        title: 'Day 7',
        text: 'Received an email from Cozy Cats Wellness Center to schedule an interview\nResearched the company and prepared answers to common lap warming interview questions\nReviewed my experience and qualifications for the position',
      },
      {
        title: 'Day 14',
        text: 'Had a great interview with Cozy Cats Wellness Center and received positive feedback\nSent a follow-up email thanking the interviewer for their time and reiterating my interest in the position\nContinued to search for other job openings and submit applications',
      },
      {
        title: 'Day 21',
        text: 'Received a job offer from Cozy Cats Wellness Center and accepted the position\nExcited to start my new job as a Professional Lap Warmer and help others find relaxation and peace!',
      },
    ],
    saved: {
      interested: [2, 5, 7],
      veryInterested: [9, 13],
      extremelyInterested: [12, 17, 20],
      applied: [3],
      interviewedFor: [6, 10],
    },
    events: [
      {
        title: 'Interview with Furry Friends Inc',
        date: '2023-03-28T17:00:00Z',
      },
      {
        title: 'Interview with Purrfect Palace',
        date: '2023-04-03T16:30:00Z',
      },
    ],
  },
  {
    uid: 8,
    first_name: 'Dolly',
    last_name: 'Purrton',
    industry: 'Arts & Literature',
    resume: {
      name: 'Dolly Purrton',
      title: 'Vocal Artist',
      contact: {
        phone: '555-555-5555',
        email: 'dolly@example.com',
        address: {
          street: '456 Elm St',
          city: 'Anytown',
          state: 'CA',
          zip: '12345',
        },
      },
      skills: [
        'Proficient in multiple musical styles',
        'Strong vocal range and control',
        'Experience with live performance and studio recording',
        'Ability to collaborate with other musicians and producers',
      ],
      experience: [
        {
          title: 'Lead Vocalist',
          company: 'The Feline Fours',
          startDate: 'January 2020',
          endDate: 'Present',
          responsibilities: [
            'Performing live shows at various venues and events',
            'Collaborating with band members to develop and arrange music',
            'Recording vocals for studio albums',
            'Participating in promotional events and interviews',
          ],
        },
        {
          title: 'Backup Vocalist',
          company: 'Whisker Records',
          startDate: 'June 2018',
          endDate: 'December 2019',
          responsibilities: [
            'Providing backup vocals for various recording projects',
            'Assisting with songwriting and arranging',
            'Attending recording and mixing sessions',
          ],
        },
      ],
      education: [
        {
          degree: 'Bachelor of Fine Arts in Music',
          institution: 'Garthty College',
          completionDate: 'May 2018',
        },
      ],
    },
    notes: [
      {
        title: 'Day 1',
        text: 'Polished my resume and cover letter\nResearched vocal artist job openings in the area\nApplied to several job postings',
      },
      {
        title: 'Day 7',
        text: 'Received an email from The Meow-tropolitan Opera to schedule an audition\nPracticed vocal exercises and repertoire\nReviewed my experience and qualifications for the position',
      },
      {
        title: 'Day 14',
        text: 'Had a successful audition with The Meow-tropolitan Opera and received positive feedback\nSent a follow-up email thanking the audition panel for their time and expressing my continued interest in the company\nContinued to search for other job openings and submit applications',
      },
      {
        title: 'Day 21',
        text: 'Received a job offer from The Meow-tropolitan Opera and accepted the position\nExcited to start my new job as a Lead Vocalist and showcase my musical talent!',
      },
    ],
    saved: {
      interested: [4, 9, 11],
      veryInterested: [2, 7],
      extremelyInterested: [14, 16, 19],
      applied: [1, 6],
      interviewedFor: [3, 12],
    },
    events: [
      {
        title: 'Interview with Whisker Records',
        date: '2023-03-15T18:00:00Z',
      },
      {
        title: 'Audition for The Feline Fours',
        date: '2023-03-22T17:00:00Z',
      },
    ],
  },
  {
    uid: 9,
    first_name: 'Luna',
    last_name: 'Whiskerkins',
    industry: 'Animal Care',
    resume: {
      name: 'Luna Whiskerkins',
      title: 'Cat Caretaker',
      contact: {
        phone: '555-555-5555',
        email: 'lunawhiskerkins@example.com',
        address: {
          street: '123 Feline Lane',
          city: 'Kittyville',
          state: 'CA',
          zip: '12345',
        },
      },
      skills: [
        'Expert in feline behavior and care',
        'Experience working with cats of all breeds and ages',
        'Ability to administer medication and provide basic medical care',
        'Knowledge of grooming and nutrition for cats',
      ],
      experience: [
        {
          title: 'Cat Caretaker',
          company: 'Kitty Haven',
          startDate: 'June 2021',
          endDate: 'Present',
          responsibilities: [
            'Provide daily care for cats, including feeding, grooming, and litter box cleaning',
            'Administer medication as needed and provide basic medical care',
            'Interact with cats to promote socialization and playtime',
            'Maintain a clean and organized environment for the cats',
          ],
        },
        {
          title: 'Volunteer',
          company: 'Feline Friends',
          startDate: 'January 2019',
          endDate: 'May 2021',
          responsibilities: [
            'Assist with daily care for cats awaiting adoption',
            'Provide socialization and playtime for cats',
            'Assist with adoption events and fundraisers',
          ],
        },
      ],
      education: [
        {
          degree: 'Associate of Applied Science in Veterinary Technology',
          institution: 'Cat Care Institute',
          completionDate: 'May 2018',
        },
      ],
    },
    notes: [
      {
        title: 'Day 1',
        text: 'Polished my resume and cover letter\nResearched cat caretaker job openings in the area\nApplied to several job postings',
      },
      {
        title: 'Day 7',
        text: 'Received an email from Kitty Haven to schedule an interview\nResearched the organization and prepared answers to common cat caretaker interview questions\nReviewed my experience and qualifications for the position',
      },
      {
        title: 'Day 14',
        text: 'Had a great interview with Kitty Haven and received positive feedback\nSent a follow-up email thanking the interviewer for their time and reiterating my interest in the position\nContinued to search for other job openings and submit applications',
      },
      {
        title: 'Day 21',
        text: 'Received a job offer from Kitty Haven and accepted the position\nExcited to start my new job as a Cat Caretaker and help provide loving care for cats!',
      },
    ],
    saved: {
      interested: [2, 7, 14],
      veryInterested: [4, 9],
      extremelyInterested: [11, 16, 19],
      applied: [1],
      interviewedFor: [5, 12],
    },
    events: [
      {
        title: 'Interview with Whisker Watchers',
        date: '2023-03-24T18:00:00Z',
      },
      {
        title: 'Interview with Purrfect Pet Care',
        date: '2023-04-07T15:30:00Z',
      },
    ],
  },
  {
    uid: 10,
    first_name: 'Kit',
    last_lame: 'Clawlins',
    industry: 'Nature & Environment',
    resume: {
      name: 'Kit Clawlins',
      title: 'Dog Badgerer',
      contact: {
        phone: '555-555-5555',
        email: 'kitclawlins@catmail.com',
        address: {
          street: '123 Furrest Rd',
          city: 'Greenwood',
          state: 'WA',
          zip: '98056',
        },
      },
      skills: [
        'Expert in tracking and capturing dogs',
        'Experience with various breeds and sizes of dogs',
        'Ability to work independently or as part of a team',
        'Knowledge of local dog populations and behaviors',
      ],
      experience: [
        {
          title: 'Dog Badgerer',
          company: 'Wildlife Rescue Society',
          startDate: 'June 2021',
          endDate: 'Present',
          responsibilities: [
            'Received reports of stray dogs in the area and investigated sightings',
            'Set up traps and bait to capture stray dogs',
            'Collaborated with local animal shelters and rescue organizations to relocate captured dogs',
            'Educated the public on responsible pet ownership and dog safety',
          ],
        },
        {
          title: 'Volunteer',
          company: 'Seattle Humane Society',
          startDate: 'January 2019',
          endDate: 'May 2021',
          responsibilities: [
            'Assisted with dog socialization and training',
            'Provided care for dogs awaiting adoption',
            'Participated in adoption events and fundraisers',
          ],
        },
      ],
      education: [
        {
          degree: 'Bachelor of Science in Zoology',
          institution: 'University of Washington',
          completionDate: 'May 2018',
        },
      ],
    },
    notes: [
      {
        title: 'Day 1',
        text: 'Polished my resume and cover letter\nResearched dog badgerer job openings in the area\nApplied to several job postings',
      },
      {
        title: 'Day 7',
        text: 'Received an email from Wildlife Rescue Society to schedule an interview\nResearched the organization and prepared answers to common dog badgerer interview questions\nReviewed my experience and qualifications for the position',
      },
      {
        title: 'Day 14',
        text: 'Had a great interview with Wildlife Rescue Society and received positive feedback\nSent a follow-up email thanking the interviewer for their time and reiterating my interest in the position\nContinued to search for other job openings and submit applications',
      },
      {
        title: 'Day 21',
        text: 'Received a job offer from Wildlife Rescue Society and accepted the position\nExcited to start my new job as a Dog Badgerer and help keep the local dog population safe!',
      },
    ],
    saved: {
      interested: [2, 7, 14],
      veryInterested: [4, 9],
      extremelyInterested: [11, 16, 19],
      applied: [1],
      interviewedFor: [5, 12],
    },
    events: [
      {
        title: 'Interview with Feline Protection Agency',
        date: '2023-03-24T18:00:00Z',
      },
      {
        title: 'Interview with Doggone Adventures',
        date: '2023-04-07T15:30:00Z',
      },
    ],
  },
];

module.exports = seekers;
