const mongoose = require("mongoose");
const wordEntry = require('./db.js');

const words = [
  new wordEntry({ word: 'woke', definition: 'aware of and actively attentive to important societal facts and issues (especially issues of racial and social justice)\noften used in contexts that suggest someone\'s expressed beliefs about such matters are not backed with genuine concern or action' }),
  new wordEntry({ word: 'position', definition: 'a point of view adopted and held to\n\na market commitment in securities or commodities\n\nrelative place, situation, or standing' }),
  new wordEntry({ word: 'fascism', definition: 'a political philosophy, movement, or regime (such as that of the Fascisti) that exalts nation and often race above the individual and that stands for a centralized autocratic government headed by a dictatorial leader, severe economic and social regimentation, and forcible suppression of opposition' }),
  new wordEntry({ word: 'analyze', definition: 'to study or determine the nature and relationship of the parts of (something) by analysis' }),
  new wordEntry({ word: 'analysis', definition: 'a detailed examination of anything complex in order to understand its nature or to determine its essential features : a thorough study' }),
  new wordEntry({ word: 'species', definition: 'a class of individuals having common attributes and designated by a common name' }),
  new wordEntry({ word: 'communication', definition: 'a process by which information is exchanged between individuals through a common system of symbols, signs, or behavior' }),
  new wordEntry({ word: 'download', definition: 'to transfer (data, files, etc.) from one location (such as a large computer or the cloud) to another (such as a smaller computer, smartphone, or storage device)' }),
  new wordEntry({ word: 'cognitive', definition: 'of, relating to, being, or involving conscious intellectual activity (such as thinking, reasoning, or remembering)' }),
  new wordEntry({ word: 'abdicate', definition: 'to relinquish (something, such as sovereign power) formally' }),
  new wordEntry({ word: 'fear', definition: 'an unpleasant often strong emotion caused by anticipation or awareness of danger' }),
  new wordEntry({ word: 'fibrous', definition: 'containing, consisting of, or resembling fibers' }),
  new wordEntry({ word: 'love', definition: 'strong affection for another arising out of kinship or personal ties' }),
  new wordEntry({ word: 'audacity', definition: 'the quality or state of being audacious' }),
  new wordEntry({ word: 'audacious', definition: 'intrepidly daring\nrecklessly bold' }),
  new wordEntry({ word: 'prevalent', definition: 'generally or widely accepted, practiced, or favored' }),
  new wordEntry({ word: 'widespread', definition: 'widely diffused or prevalent' }),
  new wordEntry({ word: 'discriminate', definition: 'to mark or perceive the distinguishing or peculiar features of' })
];

mongoose.connect('mongodb://localhost/practiceapps');

wordEntry.collection.drop();

words.map(async (word, index) => {
  await word.save((err, result) => {
    console.log('Example data seeded to database');
    mongoose.disconnect();
  })
});