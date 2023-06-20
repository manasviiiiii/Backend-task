const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const dbConnect = require("./config/db/dbconnect");
const userRoutes = require("./Routes/userRoute");
const app = express();
dbConnect();
app.use(express.json());
app.use("/api/users", userRoutes);

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Server is Running`));
