const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const attendenceRoutes = require("./routes/attendenceRoutes");
const shiftRoutes = require("./routes/shiftRoutes");
const holidayRoutes = require("./routes/holidayRoutes");
const authRoutes = require("./routes/authRoutes");
const verifyToken = require("./middlewares/VerifyToken");

dotenv.config();
connectDB();
const app = express();

app.use(express.json()); // to accept json data

app.use(bodyParser.urlencoded({extended: false}));

// Handle routes
app.use("/api/images", express.static(path.join(__dirname, "uploads/")));

app.use('/api/user', verifyToken, userRoutes);
app.use('/api/attendence', verifyToken, attendenceRoutes);
app.use('/api/shift', verifyToken, shiftRoutes);
app.use('/api/holiday', verifyToken, holidayRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Local server running at ${PORT}.`);
});
