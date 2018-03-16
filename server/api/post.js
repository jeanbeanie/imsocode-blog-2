/* server/api/post.js */
const { MongoClient } = require('mongodb');
const DB = require('../../src/config').db;

module.exports = {
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
  /*
  getPostBySlug(slug, callback) {
    MongoClient.connect(url, (err0, db) => {
      db.collection('post').findOne(
        {
          slug,
        },
        (err1, result) => {
          assert.equal(err1, null);
          if (result && err1 == null) {
            callback(result);
          } else {
            callback(false);
          }
        }
      );
    });
  },


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
};
