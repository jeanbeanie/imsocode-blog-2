/* server/api/post.js */
const { MongoClient } = require('mongodb');
const DB = require('../../src/config').db;

module.exports = {
  // Find all posts in the collection
  getPosts(callback) {
    MongoClient.connect(DB.url, (err0, database) => {
      if (err0) {
        console.log('Error connecting to database.', err0);
      }
      const db = database.db(DB.name);
      db.collection('post', (err1, collection) => {
        if (err1) {
          console.log('Error connecting to post collection!', err1);
        }
        collection.find().toArray((err2, list) => {
          if (err1) {
            console.log('Error retreiving posts collection as an array!', err1);
          }
          callback(list);
        });
      });
    });
  },

  // Find a post that matches passed in slug
  getPostBySlug(slug, callback) {
    MongoClient.connect(DB.url, (err0, database) => {
      if (err0) {
        console.log('Error connecting to database.', err0);
      }
      const db = database.db(DB.name);
      db.collection('post', (err1) => {
        if (err1) {
          console.log('Error connecting to post collection!', err1);
        }
        db.collection('post').findOne(
          {
            slug,
          },
          (err2, result) => {
            if (result && err2 == null) {
              callback(result);
            } else {
              callback(false);
            }
          },
        );
      });
    });
  },
};
/*
  getCategories(callback) {
    MongoClient.connect(url, (err0, db) => {
      db.collection('category', (err1, collection) => {
        collection.find().toArray((err2, list) => {
          callback(list);
        });
      });
    });
  },
  */
