const express = require("express"); // Import express
const router = express.Router(); // Use express.Router() to create the router

const registerUser = require("../controller/user.controller");

router.route("/register").post(registerUser);

module.exports = router; // Export the router
