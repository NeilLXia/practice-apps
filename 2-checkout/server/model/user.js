const db = require("../db.js");
const Promise = require("bluebird");
const bcrypt = Promise.promisifyAll(require("bcrypt"), { multiArgs: true });

let splitEmailAddress = (email) => {
  let atSignIndex = email.indexOf('@');
  let username = email.slice(0, atSignIndex);
  let domain = email.slice(atSignIndex + 1);
  return { "username": username, "domain": domain };
}

module.exports.registerNewUser = (data) => new Promise((resolve, reject) => {
  const user = splitEmailAddress(data.email);

  return db.connectAsync()
    .then(() => {
      return db.queryAsync(`SELECT * FROM users WHERE username='${user.username}' AND domain='${user.domain}';`)
    })
    .then(([results, fields]) => {
      if (results.length > 0) reject("This email already has a registered account.");
      return bcrypt.genSalt()
    })
    .then(salt => bcrypt.hash(data.password, salt))
    .then(password =>
      db.queryAsync(`INSERT INTO users (username, domain, password) VALUES ('${user.username}','${user.domain}','${password}')`))
    .then(() => resolve('New user registered.'))
    .catch(err => reject(err))
});

module.exports.userLogin = (data) => new Promise((resolve, reject) => {
  const user = splitEmailAddress(data.email);

  return db.connectAsync()
    .then(() => {
      return db.queryAsync(`SELECT * FROM users WHERE username='${user.username}' AND domain='${user.domain}';`)
    })
    .then(([results, fields]) => {
      if (results.length === 0) reject("This email does not have a registered account");
      return bcrypt.compare(data.password, results[0].password);
    })
    .then(() => resolve('Login successful'))
    .catch(err => reject(err))
});