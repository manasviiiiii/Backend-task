const express = require("express");
const { FetchUserCtrl, FetchUserCtrlbyId } = require("../controllers/UserCtrl");
const userRoute = express.Router();
userRoute.post("/", FetchUserCtrl);
userRoute.post("/:id", FetchUserCtrlbyId);
module.exports = userRoute;
