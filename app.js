if (process.env.NODE_ENV != "production") {
    require('dotenv').config();
}
const express = require("express");
const router = express.Router();
const session = require("express-session");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync");
const ExpressError = require("./utils/ExpressErrors.js");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const MONGO_URL = "mongodb://127.0.0.1:27017/eduvantage";
const multer = require('multer');
const { log } = require('console');
const { storage } = require("./cloudConfig.js");
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const res = require('express/lib/response.js');
const University = require('./models/university/university.js');
const upload = multer({ storage: storage });

main()
    .then(() => {
        console.log("Connected to Database.");
    })
    .catch((err) => {

    })

async function main() {
    await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));
// app.use("/", userRouter);
app.engine("ejs", ejsMate);

app.use(session({
    secret: 'your_secret_key', 
    resave: false,
    saveUninitialized: true
}));

// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

app.listen(3000, () => {
    console.log("Server is listening to port 3000!");
});

// Home Page
app.get("/", (req, res) => {
    res.render("layouts/home.ejs");
});

// app.get("/student/signup", (req, res) => {
//     res.render("layouts/student/stusignup.ejs");
// })
// app.get("/student/login", (req, res) => {
//     res.render("layouts/student/stulogin.ejs");
// })
app.get("/university/signup", (req, res) => {
    res.render("layouts/university/unisignup.ejs");
})
app.get("/university/login", (req, res) => {
    res.render("layouts/university/unilogin.ejs");
})
app.get("/uniprofile", (req, res) => {
    res.render("layouts/university/uniprofile.ejs");
})
app.post("/uniprofile", upload.single("university[universityLogo]"), wrapAsync(async(req, res) =>{
    // const { id } = req.params;
    const newUni = new University(req.body);
    // newUni.University = id;

    let url = req.file.path;
    let filename = req.file.filename;
    newUni.Logo = { url, filename };

    await newUni.save();

    // Redirect to the marketplace page
    console.log(res);
    res.redirect(`/`);
}
))