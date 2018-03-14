/* src/api/post.js */
const { MongoClient } = require('mongodb');
const assert = require('assert');
const url = require('../config').MONGODB_URL;

module.exports = {
  getPosts(callback) {
    MongoClient.connect(url, (err0, db) => {
      db.collection('post', (err1, collection) => {
        collection.find().toArray((err2, list) => {
          callback(list);
        });
      });
    });
  },

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
};
