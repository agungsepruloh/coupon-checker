const express = require("express");
const connectDB = require("./config/db");
const CouponRoute = require("./routes/CouponRoute");

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define routes
app.use(CouponRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
