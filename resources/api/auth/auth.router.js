var router = require('express').Router();
var { login, register } = require('./auth.controller');

router.post("/login", login);
router.post("/register", register);

module.exports = router;
