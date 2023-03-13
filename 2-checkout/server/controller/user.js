const bcrypt = require("bcrypt");
const model = require("../model");

let responseHandler = (res, statusCode, data) => {
  console.log(data);
  res.writeHead(statusCode);
  res.end(data);
}

module.exports.loginHandler = (req, res) => {
  model.registerNewUser(req.body)
  .then(data => responseHandler(res, 201, data))
  .catch(err => responseHandler(res, 400, err));
}