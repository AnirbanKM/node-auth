const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

// Setup Server
const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
    console.log(`Server listening on ${PORT}`);
});

app.use(express.json());

// connect to mongoDB
mongoose.connect(process.env.MDB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected!'));

// set up routes
app.use("/auth", require("./routers/userRouter"));