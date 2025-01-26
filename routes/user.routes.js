const express = require("express"); // Import express
const router = express.Router(); // Use express.Router() to create the router

const registerUser = require("../controller/user.controller");
const upload = require("../middleware/multermiddleware")

router.route("/register").post(
    // upload.fields([
    //     {
    //        name:"avatar",
    //        maxcount:2
    //     },
    //     {
    //        name:"coverImage",
    //        maxcount:1
    //     }
    // ]),
    registerUser);

module.exports = router; // Export the router
