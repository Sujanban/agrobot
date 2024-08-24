const express = require("express");
const cors = require("cors");
const {
  getUsers,
  editUser,
  deleteUser,
} = require("../controllers/userController");
const router = express.Router();

router.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

router.get("/", getUsers);
router.post("/editUser", editUser);
router.delete("/deleteUser/:id", deleteUser);

module.exports = router;