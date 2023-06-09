const mongoose = require("mongoose");

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them

const glossarySchema = mongoose.Schema({
  word: String,
  definition: String,
});

glossarySchema.index({ word: 'text', definition: 'text'}, {weights: {word: 10, definition: 1}})

const wordEntry = mongoose.model('wordEntry', glossarySchema, 'glossary');

module.exports = wordEntry;

