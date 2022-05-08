// To connect with your mongoDB database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/', {
    dbName: 'start',
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => err ? console.log(err) :
    console.log('Connected to start database'));

// Schema for users of app


const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    emailaddress: {
        type: String,
        required: true,
        unique: true,
    },
    createpassword: {
        type: String,
        required: true,
    },
    conformpassword: {
        type: String,
        required: true,
    },
});
const User = mongoose.model('details', UserSchema);
User.createIndexes();

// For backend and express
const express = require('express');
const signup = express();
const cors = require("cors");
const res = require('express/lib/response');
console.log("signup listen at port 5000");
signup.use(express.json());
signup.use(cors());
// signup.get("/", (req, resp) => {

//     resp.send("App is Working");
//     // You can check backend is working or not by 
//     // entering http://loacalhost:5000

//     // If you see App is working means
//     // backend working properly
// });

signup.post("/register", async (req, resp) => {
    try {
        const user = new User(req.body);
        let result = await user.save();
        result = result.toObject();
        if (result) {
            delete result.password;
            resp.send(req.body);
            console.log(result);
        } else {
            console.log("User already register");
        }

    } catch (e) {
        resp.send("Something Went Wrong");
    }
});

//login

signup.post("/login", async (req, resp) => {
    try {
        var userData = await User.findOne({ username: req.body.username });
        if (!userData) {
            return resp.status(400).json("Username not exist");
        }

        var validPsw = await User.findOne({ createpassword: req.body.password });
        if (!validPsw) {
            return resp.status(400).json("Password not valid");
        }

        resp.json("valid")


    } catch (e) {
        resp.send("Something Went Wrong");
    }
});


signup.listen(5000);