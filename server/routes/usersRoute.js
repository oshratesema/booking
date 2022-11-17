const express = require('express')
const {deleteUser, updateUser, getUser, getAllUsers } = require("../controllers/userController");
const { verifyToken, verifyUser, verifyAdmin } = require('../utils/verifyToken');

const router = express.Router();

// router.get('/checkAuthentication', verifyToken, (req, res, next)=>{
//     res.send('hello user you are logged in')
// })

// router.get('/checkUser/:id', verifyUser, (req, res, next)=>{
//     res.send('hello user, you are logged in and you can delete your account')
// })

// router.get('/checkAdmin/:id', verifyAdmin, (req, res, next)=>{
//     res.send('hello admin, you are logged in!')
// })

// UPDATE
router.put('/:id',verifyUser, updateUser)

//DELETE
router.delete("/:id",verifyUser, deleteUser)

//GET BY ID
router.get("/:id",verifyUser, getUser)

//GET ALL
 router.get("/",verifyAdmin, getAllUsers)

module.exports = router;