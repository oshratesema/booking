const express = require("express");
const { createHotel, deleteHotel, updateHotel, getHotel, getAllHotels, countByCity, countByType} = require("../controllers/hotelController");
const {verifyAdmin } = require("../utils/verifyToken");

const router = express.Router();

//CREATE
router.post("/",verifyAdmin, createHotel);

// UPDATE
router.put('/:id',verifyAdmin, updateHotel)

//DELETE
router.delete("/:id",verifyAdmin, deleteHotel)

//GET BY ID
router.get("/find/:id", getHotel)

//GET ALL
 router.get("/", getAllHotels)
 router.get("/countByCity", countByCity)
 router.get("/countByType", countByType)

module.exports = router;
