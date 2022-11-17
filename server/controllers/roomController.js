const Room = require("../models/roomsModel");
const Hotel = require("../models/hotelModel");
const { createError } = require("../utils/error");

const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelId;
  const newRoom = new Room(req.body);
  try {
    const savedRoom = await newRoom.save();
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $push: { rooms: savedRoom._id },
      });
    } catch (err) {
      next(err);
    }
    req.status(200).json(savedRoom);
  } catch (err) {
    next(err);
  }
};

const updateRoom = async (req, res, next) => {
    try {
      const updatedRoom = await Room.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedRoom);
    } catch (err) {
      next(err);
    }
  };
  
  const deleteRoom = async (req, res, next) => {
    const hotelId = req.params.hotelId;
    try {
      await Room.findByIdAndDelete(req.params.id);
      try{
   await Hotel.findByIdAndUpdate(hotelId, {
    $pull: {rooms: req.params._id }
   })
      }catch(err){
  next(err)
      }
      res.status(200).json("Room has been deleted.");
    } catch (err) {
      next(err);
    }
  };
  
  const getRoom = async (req, res, next) => {
    try {
      const room = await Room.findById(req.params.id);
      res.status(200).json(room);
    } catch (err) {
      next(err);
    }
  };
  
  const getAllRooms = async (req, res, next) => {
    const { min, max, ...others } = req.query;
    try {
      const rooms = await Room.find()
      res.status(200).json(rooms);
    } catch (err) {
      next(err);
    }
  };

module.exports = {createRoom, updateRoom, deleteRoom, getRoom, getAllRooms};
