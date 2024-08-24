const express = require("express");
const cors = require("cors");
const {
    getTestimonials,
    addTestimonial,
    editTestimonial,
    deleteTestimonial,
} = require("../controllers/testimonialController");
const router = express.Router();

router.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

router.get("/", getTestimonials);
router.post("/addTestimonial", addTestimonial);
router.post("/editTestimonial", editTestimonial);
router.delete("/deleteTestimonial/:id", deleteTestimonial);

module.exports = router;