const model = require('../server/models.js');

// update base on whatever data you need to import
const blogData = [
  {
    id: 1,
    title: 'Wonderful Life of Cats',
    description: 'You will never really ever believe that there is a whole world that cats lead when you are not home at the moment. This is not going to make any sense and will surprise you but it\'s still a sentence.',
    date: '2023-03-06',
  },
  {
    id: 2,
    title: 'What Cats do when You\'re at w=Work',
    description: 'This is not going to make any sense and will surprise you but it\'s still a sentence. These are by far the most famous cats you\'ll ever encounter when you attempt to go visit the world. Of course this just going to just be a bunch of random words about cat and music.',
    date: '2023-03-06',
  },
  {
    id: 3,
    title: 'You\'ll Never Believe What My Cat Said Yesterday',
    description: 'These are by far the most famous cats you\'ll ever encounter when you attempt to go visit the world. Of course this just going to just be a bunch of random words about cat and music. Sample and review various types of cat food and treats.',
    date: '2023-03-06',
  },
  {
    id: 4,
    title: 'Ancient Cats in Egypt',
    description: 'These are by far the most famous cats you\'ll ever encounter when you attempt to go visit the world. Of course this just going to just be a bunch of random words about cat and music. Chew and swat at electrical systems and wiring.',
    date: '2023-03-05',
  },
  {
    id: 5,
    title: 'World\s Most Famous Cats',
    description: 'Celebrities love cats too and we can talk about them liking cats or loving cats as long as there is a sentence. These are by far the most famous cats you\'ll ever encounter when you attempt to go visit the world. Of course this just going to just be a bunch of random words about cat and music.',
    date: '2023-03-05',
  },
  {
    id: 6,
    title: 'Best Food for your Cat',
    description: 'These are by far the most famous cats you\'ll ever encounter when you attempt to go visit the world. Of course this just going to just be a bunch of random words about cat and music. Complete covert missions and gather intelligence.',
    date: '2023-03-05',
  },
  {
    id: 7,
    title: 'Your Cats New Favorite Toy',
    description: 'This will be their favorite toy without a doubt, without a questions. This is not going to make any sense and will surprise you but it\'s still a sentence.Here is some more and this is not going to make any sense and will surprise you but it\'s still a sentence. Celebrities love cats too and we can talk about them liking cats or loving cats as long as there is a sentence.',
    date: '2023-03-05',
  },
  {
    id: 8,
    title: 'Your Cat Will Love you for This',
    description: 'Celebrities love cats too and we can talk about them liking cats or loving cats as long as there is a sentence.',
    date: '2023-03-04',
  },
  {
    id: 9,
    title: 'Top 10 Vacations to take with your cats',
    description: 'Celebrities love cats too and we can talk about them liking cats or loving cats as long as there is a sentence..',
    date: '2023-03-04',
  },
  {
    id: 10,
    title: 'Top Places to Visit with your Cat',
    description: '',
    date: '2023-03-04',
  },
  {
    id: 11,
    title: 'Your Cat Will Never Believe This!',
    description: 'Your cat might be surprised when your cat brings this home and wants you to play. Can you believe that a cat would enjoy as song as much as they would. Don\'t be surprised when your cat brings this home and wants you to play. Can you believe that a cat would enjoy as song as much as they would. ',
    date: '2023-03-03',
  },
  {
    id: 12,
    title: 'World\'s Smartest Cats',
    description: 'Don\'t be surprised when your cat brings this home and wants you to play. Can you believe that a cat would enjoy as song as much as they would.  Don\'t be surprised when your cat brings this home and wants you to play. Can you believe that a cat would enjoy as song as much as they would.  Don\'t be surprised when your cat brings this home and wants you to play. Can you believe that a cat would enjoy as song as much as they would. ',
    date: '2023-03-02',
  },
  {
    id: 13,
    title: 'The World\'s Funniest Cats',
    description: 'Of course this just going to just be a bunch of random words about cat and music. Celebrities love cats too and we can talk about them liking cats or loving cats as long as there is a sentence. These are by far the most famous cats you\'ll ever encounter when you attempt to go visit the world. Of course this just going to just be a bunch of random words about cat and music.',
    date: '2023-03-02',
  },
  {
    id: 14,
    title: 'Cats and Dogs: World\'s Best Friends',
    description: 'These are by far the most famous cats you\'ll ever encounter when you attempt to go visit the world. Of course this just going to just be a bunch of random words about cat and music.',
    date: '2023-03-01',
  },
  {
    id: 15,
    title: 'Your Cat\'s Favorite Song',
    description: 'Can you believe that a cat would enjoy as song as much as they would. Don\'t be surprised when your cat brings this home and wants you to play. Can you believe that a cat would enjoy as song as much as they would. Don\'t be surprised when your cat brings this home and wants you to play. Can you believe that a cat would enjoy as song as much as they would. Don\'t be surprised when your cat brings this home and wants you to play.',
    date: '2023-03-01',
  },
];
const jobData = [
  {
    "id": 1,
    "title": "Software Engineer",
    "description": "We're seeking a talented software engineer to join our team and help us build cutting-edge products.",
    "industry": "Technology",
    "location": "San Francisco",
    "experience": "5+ years",
    "environment": "In person",
    "salary": "$150,000 - $200,000",
    "employment": "Full-time",
    "date": "2022-12-31T00:00:00.000Z"
  },
  {
    "id": 2,
    "title": "Marketing Manager",
    "description": "We're looking for a marketing manager to lead our marketing efforts and help us grow our customer base.",
    "industry": "Marketing",
    "location": "New York City",
    "experience": "7+ years",
    "environment": "Remote",
    "salary": "$120,000 - $150,000",
    "employment": "Full-time",
    "date": "2023-02-28T00:00:00.000Z"
  }
];

const seekerData = [
  {
    "uid": 1,
    "first_name": "John",
    "last_name": "Doe",
    "industry": "Software Engineering",
    "resume": {"title": "Software Engineer", "summary": "I have 5+ years of experience in building scalable and reliable software systems."},
    "notes": ["Met at job fair", "Impressive experience"],
    "saved": {
      "interested": [2, 5, 8],
      "very interested": [10, 15],
      "extremely interested": [20],
      "applied": [2],
      "interviewed for": [5]
    }
  },
  {
    "uid": 2,
    "first_name": "Jane",
    "last_name": "Doe",
    "industry": "Marketing",
    "resume": {"title": "Marketing Manager", "summary": "I have 7+ years of experience in creating and executing successful marketing campaigns."},
    "notes": ["Great communication skills", "Creative thinker"],
    "saved": {
      "interested": [1, 3, 5],
      "very interested": [10, 12],
      "extremely interested": [15],
      "applied": [1, 5],
      "interviewed for": [3]
    }
  },
  {
    "uid": 3,
    "first_name": "Bob",
    "last_name": "Smith",
    "industry": "Design",
    "resume": {"title": "Product Designer", "summary": "I have 3+ years of experience in designing beautiful and intuitive user experiences."},
    "notes": ["Impressive portfolio", "Team player"],
    "saved": {
      "interested": [1, 2, 5],
      "very interested": [8, 10],
      "extremely interested": [12],
      "applied": [2, 5],
      "interviewed for": [1]
    }
  }
];

const employerData = [
  {
    uid: 123456,
    first_name: "John",
    last_name: "Doe",
    industry: "Technology",
    notes: [
      "Has experience with React and Node.js",
      "Excellent communication skills",
      "Needs visa sponsorship"
    ],
    saved: {
      "candidate1": {
        "name": "Jane Smith",
        "position": "Frontend Developer",
        "resume": "https://example.com/jane-smith-resume.pdf"
      },
      "candidate2": {
        "name": "Bob Johnson",
        "position": "Backend Developer",
        "resume": "https://example.com/bob-johnson-resume.pdf"
      }
    }
  }
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
load(employerData);