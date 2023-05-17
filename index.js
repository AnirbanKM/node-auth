const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors')

dotenv.config();

// Setup Server
const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
    console.log(`Server listening on ${PORT}`);
});

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: ["https://mern-auth-01.onrender.com"],
    credentials: true
}));

// connect to mongoDB
mongoose.connect(process.env.MDB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected!'));

// set up routes
app.get("/", function (req, res) {
    res.send("Hello, world!");
});

app.use("/auth", require("./routers/userRouter"));
app.use("/customer", require("./routers/customerRouter"));