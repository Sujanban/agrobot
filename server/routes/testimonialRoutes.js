const express = require("express");
const cors = require("cors");
const { checkAuth, isAdmin, isTestimonailOwner } = require("../middlewares/userAuth");
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

router.get("/",checkAuth, getTestimonials);
router.post("/addTestimonial",checkAuth, addTestimonial);
router.post("/editTestimonial/:id", checkAuth, isTestimonailOwner, editTestimonial);
router.delete("/deleteTestimonial/:id", checkAuth, isTestimonailOwner, deleteTestimonial);

module.exports = router;
