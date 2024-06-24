const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const router = express.Router();
const authRoutes = require("./routes/authRoutes");
const chatRoutes = require("./routes/chatRoutes");

dotenv.config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;
const DATABASE = process.env.DATABASE;

mongoose
  .connect(DATABASE)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => console.log(err));

router.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// handeling routes
app.use("/api/auth", authRoutes);

// chat routes
app.use('/api/chat', chatRoutes);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
