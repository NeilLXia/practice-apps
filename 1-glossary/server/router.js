const router = require('express').Router();
const controller = require('./controller/index.js')

router.get('/words', controller.getWordList);
router.post('/words', controller.addNewWord);
router.put('/words', controller.addNewWord);

module.exports = router;