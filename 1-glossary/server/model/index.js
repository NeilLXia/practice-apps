const mongoose = require('mongoose');
const wordEntry = require('../database/db.js');

let setQuery = (queryString) => {
  let query = {};
  if (queryString !== '') {
    query = { $text: { $search: queryString}};
  }
  return query;
}

module.exports = {
  queryWords: (queryString, page) => new Promise((resolve, reject) => {
    mongoose.connect('mongodb://localhost/practiceapps')
      .then(() => setQuery(queryString))
      .then(query => wordEntry.find(query).skip(10 * (page - 1)).limit(10))
      .then(data => resolve(data))
      .catch(err => reject(err))
      .finally(() => mongoose.connection.close());
  }),

  addWord: (newWord) => new Promise((resolve, reject) => {
    mongoose.connect('mongodb://localhost/practiceapps')
    .then(() => newWord.word)
    .then((query) =>
      wordEntry.findOneAndUpdate({ word: query }, newWord, { upsert: true , rawResult: true}))
    .then((data, raw) => resolve(data.lastErrorObject.updatedExisting))
    .catch(err => reject(err))
    .finally(() => mongoose.connection.close());
  })
};