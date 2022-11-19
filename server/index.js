const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();
const cookieParser = require("cookie-parser")
const cors = require('cors');

const authRoute = require('./routes/authRoute')
const usersRoute = require('./routes/usersRoute')
const hotelsRoute = require('./routes/hotelsRoute')
const roomsRoute = require('./routes/roomsRoute')

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB");
  } catch (error) {
    throw { msg: error };
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

app.use(cookieParser());
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoute)
app.use('/api/users', usersRoute)
app.use('/api/hotels', hotelsRoute)
app.use('/api/rooms', roomsRoute)

app.use((err,req,res,next) => {
  const errorStatus = err.status || 500
  const errorMessage = err.message || 'something went wrong!'
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack
  })
})

app.listen(8800, () => {
  connect();
  console.log("connected to backend");
});
