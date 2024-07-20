const express = require("express");
const { register,login } = require("../controllers/authController");
const cors = require("cors");
const router = express.Router();

// middleware
router.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);

router.post("/register", register);
router.post("/login", login);

module.exports = router;