const expressAsyncHandler = require("express-async-handler");
const User = require("../model/User");
const FetchUserCtrl = expressAsyncHandler(async (req, res) => {
  try {
    const users = await User.find({});

    res.json(users);
  } catch (error) {
    res.json(error);
  }
});
const FetchUserCtrlbyId = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);

    res.json(user);
  } catch (error) {
    res.json(error);
  }
});
module.exports = { FetchUserCtrl, FetchUserCtrlbyId };
