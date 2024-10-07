const mongoose = require('mongoose');
const connectDB = require('./db');  // Import the connection module

const User = require('../models/User');         // Import your models
const Game = require('../models/Game');
const Message = require('../models/Message');
const Tournament = require('../models/Tournament');
const Post = require('../models/Post');
const Media = require('../models/Media');
const ShopItem = require('../models/ShopItem');

// Clear existing data from collections
async function clearData() {
  await User.deleteMany({});
  await Game.deleteMany({});
  await Message.deleteMany({});
  await Tournament.deleteMany({});
  await Post.deleteMany({});
  await Media.deleteMany({});
  await ShopItem.deleteMany({});
}

// Seed users
async function seedUsers() {
  const users = [
    {
      username: 'john_doe',
      email: 'john@example.com',
      password: 'password123',
      profile_pic: 'https://via.placeholder.com/150',
      bio: 'Basketball enthusiast and part-time coach.',
      location: {
        type: 'Point',
        coordinates: [-73.935242, 40.730610]  // NYC
      },
      friends: [],
    },
    {
      username: 'jane_doe',
      email: 'jane@example.com',
      password: 'password123',
      profile_pic: 'https://via.placeholder.com/150',
      bio: 'Soccer player and fitness lover.',
      location: {
        type: 'Point',
        coordinates: [-118.243683, 34.052235]  // LA
      },
      friends: [],
    }
  ];

  return await User.insertMany(users);
}

// Seed games
async function seedGames(users) {
  const games = [
    {
      game_name: 'Morning Basketball Game',
      location: {
        type: 'Point',
        coordinates: [-73.935242, 40.730610] // NYC
      },
      sport_type: 'Basketball',
      date_time: new Date(Date.now() + 24 * 60 * 60 * 1000),  // One day from now
      created_by: users[0]._id,
      participants: [users[0]._id, users[1]._id],
      status: 'upcoming',
      visibility: 'public',
      description: 'Join us for a fun morning game!',
    },
    {
      game_name: 'Soccer Pickup Game',
      location: {
        type: 'Point',
        coordinates: [-118.243683, 34.052235] // LA
      },
      sport_type: 'Soccer',
      date_time: new Date(Date.now() + 48 * 60 * 60 * 1000),  // Two days from now
      created_by: users[1]._id,
      participants: [users[1]._id],
      status: 'upcoming',
      visibility: 'public',
      description: 'We need more players! Come join.',
    }
  ];

  return await Game.insertMany(games);
}

// Seed messages
async function seedMessages(users, games) {
  const messages = [
    {
      sender_id: users[0]._id,
      receiver_id: users[1]._id,
      content: 'Hey Jane, are you joining the basketball game tomorrow?',
      timestamp: new Date(),
      game_id: games[0]._id,
      is_read: false,
    },
    {
      sender_id: users[1]._id,
      receiver_id: users[0]._id,
      content: 'Yes! Can’t wait!',
      timestamp: new Date(),
      game_id: games[0]._id,
      is_read: false,
    }
  ];

  return await Message.insertMany(messages);
}

// Seed tournaments
async function seedTournaments(users) {
  const tournaments = [
    {
      tournament_name: 'Streetball Championship',
      location: {
        type: 'Point',
        coordinates: [-73.935242, 40.730610] // NYC
      },
      sport_type: 'Basketball',
      date_time: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),  // 1 week from now
      created_by: users[0]._id,
      participants: [users[0]._id, users[1]._id],
      status: 'upcoming',
      winner_id: null,
      results: ''
    }
  ];

  return await Tournament.insertMany(tournaments);
}

// Seed posts
async function seedPosts(users) {
  const posts = [
    {
      user_id: users[0]._id,
      content: 'Getting ready for tomorrow’s game!',
      likes: [users[1]._id],
      comments: [],
      visibility: 'public',
    },
    {
      user_id: users[1]._id,
      content: 'Can’t wait for the soccer game this weekend!',
      likes: [users[0]._id],
      comments: [],
      visibility: 'public',
    }
  ];

  return await Post.insertMany(posts);
}

// Seed media
async function seedMedia(users, posts) {
  const media = [
    {
      user_id: users[0]._id,
      media_url: 'https://via.placeholder.com/300',
      media_type: 'image',
      post_id: posts[0]._id,
    },
    {
      user_id: users[1]._id,
      media_url: 'https://via.placeholder.com/300',
      media_type: 'image',
      post_id: posts[1]._id,
    }
  ];

  return await Media.insertMany(media);
}

// Seed shop items
async function seedShopItems() {
  const items = [
    {
      item_name: 'Basketball Shoes',
      price: 100,
      description: 'High-performance basketball shoes for athletes.',
      stock: 50,
      image_url: 'https://via.placeholder.com/200'
    },
    {
      item_name: 'Soccer Ball',
      price: 30,
      description: 'High-quality soccer ball for pickup games.',
      stock: 100,
      image_url: 'https://via.placeholder.com/200'
    }
  ];

  return await ShopItem.insertMany(items);
}

// Main seeding function
async function seed() {
  await connectDB(); // Connect to MongoDB
  console.log("Database connected successfully!");

  await clearData(); // Clear existing data
  console.log("Cleared existing data!");

  const users = await seedUsers();
  console.log("Users seeded successfully!");

  const games = await seedGames(users);
  console.log("Games seeded successfully!");

  await seedMessages(users, games);
  console.log("Messages seeded successfully!");

  await seedTournaments(users);
  console.log("Tournaments seeded successfully!");

  const posts = await seedPosts(users);
  console.log("Posts seeded successfully!");

  await seedMedia(users, posts);
  console.log("Media seeded successfully!");

  await seedShopItems();
  console.log("Shop items seeded successfully!");

  console.log("Database seeded successfully!");
  mongoose.connection.close();  // Close the connection after seeding
}

seed().catch(err => {
  console.error(err);
  mongoose.connection.close();
});
