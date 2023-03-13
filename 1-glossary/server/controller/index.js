const model = require('../model/index.js');

let returnResponse = (response, statusCode, contentType, body) => {
  response.statusCode = statusCode;
  response.setHeader('Content-Type', contentType);
  response.end(JSON.stringify(body));
}

module.exports = {
  getWordList: (req, res) => {
    model.queryWords(req.query.filter, req.query.page)
      .then(data => returnResponse(res, 200, 'application/json', data))
      .catch(err => returnResponse(res, 400, 'text/plain', `ERROR: There was an error in retrieving the query data - ${err}`));
  },

  addNewWord: (req, res) => {
    model.addWord(req.body)
      .then(isWordUpdated => {
        if (isWordUpdated) returnResponse(res, 201, 'application/json', `OK: Existing definition of ${req.body.word} has been updated.`);
        returnResponse(res, 201, 'application/json', `OK: New word, ${req.body.word}, added successfully`);
      })
      .catch(err => returnResponse(res, 400, 'text/plain', `ERROR: There was an error in inserting the new word - ${err}`));
  }
}