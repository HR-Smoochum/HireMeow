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
    title: 'World\'s Most Famous Cats',
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
load(blogData);
