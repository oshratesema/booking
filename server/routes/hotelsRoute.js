const express = require("express");
const { createHotel, deleteHotel, updateHotel, getHotel, getAllHotels, countByCity } = require("../controllers/hotelController");
const Hotel = require("../models/hotelModel");
const createError = require('../utils/error');
const {verifyAdmin } = require("../utils/verifyToken");

const router = express.Router();

//CREATE
router.post("/",verifyAdmin, createHotel);

// UPDATE
router.put('/:id',verifyAdmin, updateHotel)

//DELETE
router.delete("/find/:id",verifyAdmin, deleteHotel)

//GET BY ID
router.get("/:id", getHotel)

//GET ALL
 router.get("/", getAllHotels)
 router.get("/countByCity", countByCity)
 router.get("/countByType", getAllHotels)

module.exports = router;
