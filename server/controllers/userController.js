const User = require('../models/userModel')

const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted.");
  } catch (err) {
    next(err);
  }
};

const getUser = async (req, res, next) => {
  try {
    const user = await user.findById(req.params._id);
    res.status(200).json(User);
  } catch (err) {
    next(err);
  }
};

const getAllUsers = async (req, res, next) => {
  const { min, max, ...others } = req.query;
  try {
    const users = await User.find({
      ...others,
      cheapestPrice: { $gt: min | 1, $lt: max || 999 },
    }).limit(req.query.limit);
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

module.exports = {updateUser, deleteUser, getUser,getAllUsers}