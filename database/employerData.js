const employerData = [
  {
    uid: 1,
    first_name: 'Purrito',
    last_name: 'Paws',
    industry: 'Home Maintenance',
    notes: [
      { title: 'Qualifications', text: 'Make sure to look for candidates with the right qualifications for the job in the Home Maintenance industry.' },
      { title: 'Experience', text: 'Prior experience in the Home Maintenance industry is a big plus for any candidate we consider.' },
      { title: 'Communication Skills', text: 'Look for candidates who have excellent communication skills, as this is essential for success in the Home Maintenance industry.' },
      { title: 'Attention to Detail', text: 'Pay close attention to candidates who show a strong attention to detail, as this is crucial for success in Purrito\'s team.' },
      { title: 'Passion for the Industry', text: 'It\'s important to find candidates who have a passion for the Home Maintenance industry, as this makes a huge difference in their work performance.' },
    ],
    saved: {
      interested: [1, 2, 6, 8],
      veryInterested: [3, 5],
      extremelyInterested: [7],
    },
    events: [
      {
        title: 'Home Maintenance Expo',
        date: '2023-04-15T10:00:00Z',
      },
      {
        title: 'Networking Mixer for Home Maintenance Professionals',
        date: '2023-05-03T18:00:00Z',
      },
      {
        title: 'Writing Workshop: Crafting Strong Descriptions for Your Home Maintenance Business',
        date: '2023-04-25T13:00:00Z',
      },
    ],
  },
  {
    uid: 2,
    first_name: 'Purr',
    last_name: 'Fect',
    industry: 'Nature & Environment',
    notes: [
      { title: 'Qualifications', text: 'Make sure to look for candidates with the right qualifications for the job in the Nature & Environment industry.' },
      { title: 'Experience', text: 'Prior experience in the Nature & Environment industry is a big plus for any candidate we consider.' },
      { title: 'Communication Skills', text: 'Look for candidates who have excellent communication skills, as this is essential for success in the Nature & Environment industry.' },
      { title: 'Attention to Detail', text: 'Pay close attention to candidates who show a strong attention to detail, as this is crucial for success in Purr\'s team.' },
      { title: 'Passion for the Industry', text: 'It\'s important to find candidates who have a passion for the Nature & Environment industry, as this makes a huge difference in their work performance.' },
    ],
    saved: {
      interested: [2, 5, 6],
      veryInterested: [1, 9, 10],
      extremelyInterested: [8],
    },
    events: [
      {
        title: 'Interview with Tabbytha Whiskers',
        date: '2023-03-15T14:00:00Z',
      },
      {
        title: 'Networking Event for Nature & Environment Professionals',
        date: '2023-03-28T18:00:00Z',
      },
      {
        title: 'Interview with Allie Kat',
        date: '2023-04-05T10:00:00Z',
      },
    ],
  },
  {
    uid: 3,
    first_name: 'Luci',
    last_name: 'Furr',
    industry: 'Health & Wellness',
    notes: [
      { title: 'Qualifications', text: 'Make sure to look for candidates with the right qualifications for the job in the Health & Wellness industry.' },
      { title: 'Experience', text: 'Prior experience in the Health & Wellness industry is a big plus for any candidate we consider.' },
      { title: 'Communication Skills', text: 'Look for candidates who have excellent communication skills, as this is essential for success in the Health & Wellness industry.' },
      { title: 'Attention to Detail', text: 'Pay close attention to candidates who show a strong attention to detail, as this is crucial for success in Luci\'s team.' },
      { title: 'Passion for the Industry', text: 'It\'s important to find candidates who have a passion for the Health & Wellness industry, as this makes a huge difference in their work performance.' },
    ],
    saved: {
      interested: [1, 3, 7],
      veryInterested: [4, 6],
      extremelyInterested: [10],
    },
    events: [
      {
        title: 'Interview with Tabbytha Whiskers',
        date: '2023-03-15T15:00:00Z',
      },
      {
        title: 'Health & Wellness Expo',
        date: '2023-04-02T10:00:00Z',
      },
    ],
  },
  {
    uid: 4,
    first_name: 'Ocatvia',
    last_name: 'Butler',
    industry: 'Arts & Literature',
    notes: [
      { title: 'Qualifications', text: 'Make sure to look for candidates with the right qualifications for the job in the Arts & Literature industry.' },
      { title: 'Experience', text: 'Prior experience in the Arts & Literature industry is a big plus for any candidate we consider.' },
      { title: 'Communication Skills', text: 'Look for candidates who have excellent communication skills, as this is essential for success in the Arts & Literature industry.' },
      { title: 'Attention to Detail', text: 'Pay close attention to candidates who show a strong attention to detail, as this is crucial for success in Ocatvia\'s team.' },
    ],
    saved: {
      interested: [2, 4, 5],
      veryInterested: [6, 8],
      extremelyInterested: [10],
    },
    events: [
      {
        title: 'Interview with Tabbytha Whiskers',
        date: '2023-03-22T14:00:00Z',
      },
      {
        title: 'Networking Event for Writers',
        date: '2023-04-08T21:30:00Z',
      },
      {
        title: 'Interview with Meow Angelou',
        date: '2023-04-15T10:00:00Z',
      },
    ],
  },
  {
    uid: 5,
    first_name: 'Notorious',
    last_name: 'C.A.T.',
    industry: 'Gastronomy',
    notes: [
      { title: 'Qualifications', text: 'Make sure to look for candidates with the right qualifications for the job in the Gastronomy industry.' },
      { title: 'Experience', text: 'Prior experience in the Gastronomy industry is a big plus for any candidate we consider.' },
      { title: 'Creativity', text: 'We are looking for candidates who can think outside the box and bring fresh ideas to our team.' },
      { title: 'Passion for Food', text: 'It\'s important to find candidates who have a genuine passion for food and cooking, as this makes a huge difference in their work performance.' },
      { title: 'Attention to Detail', text: 'Pay close attention to candidates who show a strong attention to detail, as this is crucial for success in Notorious C.A.T.\'s team.' },
    ],
    saved: {
      interested: [1, 3],
      veryInterested: [2, 5, 7],
      extremelyInterested: [9],
    },
    events: [
      {
        title: 'Interview with Tabbytha Whiskers',
        date: '2023-03-15T13:00:00Z',
      },
      {
        title: 'Networking Event for Gastronomy Professionals',
        date: '2023-03-25T19:00:00Z',
      },
      {
        title: 'Interview with Garth Field',
        date: '2023-04-05T14:30:00Z',
      },
    ],
  },
  {
    uid: 6,
    first_name: 'Cleo',
    last_name: 'Catra',
    industry: 'Security & Safety',
    notes: [
      { title: 'Qualifications', text: 'Make sure to look for candidates with the right qualifications for the job in the Security & Safety industry.' },
      { title: 'Experience', text: 'Prior experience in the Security & Safety industry is a big plus for any candidate we consider.' },
      { title: 'Communication Skills', text: 'Look for candidates who have excellent communication skills, as this is essential for success in the Security & Safety industry.' },
      { title: 'Attention to Detail', text: 'Pay close attention to candidates who show a strong attention to detail, as this is crucial for success in Cleo\'s team.' },
      { title: 'Critical Thinking', text: 'We need candidates who can think on their feet and problem-solve quickly in high-pressure situations.' },
    ],
    saved: {
      interested: [1, 5, 8],
      veryInterested: [2, 6],
      extremelyInterested: [3, 9],
    },
    events: [
      {
        title: 'Interview with Whiskerina Meowington',
        date: '2023-03-20T10:00:00Z',
      },
      {
        title: 'Networking Event for Security Professionals',
        date: '2023-04-05T18:00:00Z',
      },
      {
        title: 'Interview with Felix Clawdini',
        date: '2023-04-15T14:30:00Z',
      },
    ],
  },
];

module.exports = {
  employerData,
};
