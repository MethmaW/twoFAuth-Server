const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require("cors");

//Import Routes
const authRoute = require('./routes/auth')
const postRoute = require('./routes/posts')


const app = express();
dotenv.config();


app.use(cors());


//Connect to DB
mongoose.connect(process.env.CONNECT_DB,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    },
  () => console.log("Connected to DB")
);


//Middlewear
app.use(express.json());



//Route middlewear
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute)



app.listen(process.env.LOCAL_PORT, () => console.log("Server is up and running"))