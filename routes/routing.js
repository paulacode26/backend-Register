const express = require("express");
const router = express.Router();
const userController = require("../controllers/form.js");

router.post("/", userController.createUser);

module.exports = router;
