const { User } = require('../models');


const userData = [
  {
    username: 'Sam',
    email: 'Sam@gmail.com',
    password: 'password',
    bio: 'My name is Sam!'
  },
  {
    username: 'Ram',
    email: 'Ram@gmail.com',
    password: 'password',
    bio: 'My name is Ram!'
  },
  {
    username: 'Jason',
    email: 'Jason@gmail.com',
    password: 'password',
    bio: 'My name is Jason!'
  },
  {
    username: 'Tony',
    email: 'Tony@gmail.com',
    password: 'password',
    bio: 'My name is Tony!'
  },
  {
    username: 'Shina',
    email: 'Shina@gmail.com',
    password: 'password',
    bio: 'My name is Shina!'
  },
  {
    username: 'Jenny',
    email: 'Jenny@gmail.com',
    password: 'password',
    bio: 'My name is Jenny!'
  },
  {
    username: 'John',
    email: 'John@gmail.com',
    password: 'password',
    bio: 'My name is John!'
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
