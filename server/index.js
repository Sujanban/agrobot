const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const router = express.Router();
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const testimonialRoutes = require("./routes/testimonialRoutes");
const cookieParser = require('cookie-parser');

dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser())
const PORT = process.env.PORT || 5000;
const DATABASE = process.env.DATABASE;

mongoose
  .connect(DATABASE)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => console.log(err));

// handeling routes
app.use("/api/auth", authRoutes);

// handelinmg users
app.use("/api/users", userRoutes);

// handeling testimonials
app.use("/api/testimonials", testimonialRoutes);

// chat routes
app.use("/api/chat", chatRoutes);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
