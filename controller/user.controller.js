const asynchandler = require("../utils/asyncHandler"); // Use require for CommonJS

const registerUser = asynchandler(async (req, res) => {
    res.status(200).json({
        message: "ok"
    });
});

module.exports = registerUser; // Use module.exports to export in CommonJS
