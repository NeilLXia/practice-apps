const router = require("express").Router();
const controller = require("./controller");

router.post("/", controller.loginHandler);

module.exports = router;