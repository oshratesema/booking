const express = require('express');
const { createRoom, updateRoom, deleteRoom, getRoom, getAllRooms } = require('../controllers/roomController');
const { verifyAdmin } = require('../utils/verifyToken');

const router = express.Router();

//CREATE
router.post("/:hotelId",verifyAdmin, createRoom);

// UPDATE
router.put('/:id',verifyAdmin, updateRoom)

//DELETE
router.delete("/:id/:hotelId",verifyAdmin, deleteRoom)

//GET BY ID
router.get("/:id", getRoom)

//GET ALL
 router.get("/", getAllRooms)

module.exports = router;