const axios = require('axios');

let requestURL = '/words';

module.exports = {
  pullWordList: (queryString, page) => new Promise((resolve, reject) => {
    queryString = queryString || '';
    page = page || 1;
    let queryParams = `?filter=${queryString}&page=${page}`;
    axios.get(requestURL + queryParams)
      .then(data => resolve(data))
      .catch(err => reject(err));
  }),

  addNewWord: (wordObject) => new Promise((resolve, reject) => {
    axios.put(requestURL, wordObject)
      .then(data => resolve(data))
      .catch(err => reject(err));
  })
}