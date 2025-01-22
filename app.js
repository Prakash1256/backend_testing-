const express = require('express');
const connectDB = require('./db/index');
const dotenv = require('dotenv');
const User = require("./models/index");
const cors = require("cors");
const cookieParser = require("cookie-parser");
dotenv.config();

const app = express();

// Middleware to parse JSON
app.use(express.json());
app.use(cookieParser());
app.use(cors());


// router import 

const userRouter = require("./routes/user.routes");


// routes declaration 
app.use("/api/v1/users" , userRouter);

app.get('/', async (req, res) => {
    try {
        const model = new User({
            name: "prakash",
            email: "ps4059269@gmail.com",
            password: "12345678",
        });
        
        await model.save();
        res.send("User saved successfully!");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error saving user");
    }
});

const port = process.env.PORT || 3000;

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
}).catch((error) => {
    console.error("Error connecting to the database", error);
});
