const Testimonial = require("../models/testimonial.model");

const getTestimonials = async (req, res) => {
  try {
    const { role } = req.user;
    if (role == 0) {
      const testimonials = await Testimonial.find({ email: req.user.email });
      res.json(testimonials);
    } else {
      const testimonials = await Testimonial.find();
      res.json(testimonials);
    }
  } catch (error) {
    res.json({ error: error.message });
  }
};

const addTestimonial = async (req, res) => {
  const { email, message, rating } = req.body;
  if (!email || !message || !rating) {
    return res.json({ error: "All fields are required" });
  }

  if (req.user.role == 0) {
    const alreadyExist = await Testimonial.findOne({ email: req.user.email });
    if (alreadyExist) {
      return res.json({ error: "You have already added a testimonial" });
    }
  }

  const newTestimonial = new Testimonial({
    email,
    message,
    rating,
  });
  try {
    const savedTestimonial = await newTestimonial.save();
    res.json({ message: "Testimonial added successfully" });
  } catch (error) {
    res.json({ error: error.message });
  }
};

const editTestimonial = async (req, res) => {
  const { id } = req.params;
  const { email, message, rating } = req.body;
  try {
    const updatedTestimonial = await Testimonial.findByIdAndUpdate(
      id,
      { email, message, rating },
      { new: true }
    );
    res.json({ message: "Testimonial updated successfully" });
  } catch (error) {
    res.json({ error: error.message });
  }
};

const deleteTestimonial = async (req, res) => {
  const { id } = req.params;
//   const testData = await Testimonial.findById(id);
//   const { email } = testData;
//   if (email !== req.user.email) {
//     return res.json({
//       error: "You are not authorized to delete this testimonial",
//     });
//   }
  try {
    const deletedTestimonial = await Testimonial.findByIdAndDelete(id);
    res.json({ message: "Testimonial deleted successfully" });
  } catch (error) {
    res.json({ error: error.message });
  }
};

module.exports = {
  getTestimonials,
  addTestimonial,
  editTestimonial,
  deleteTestimonial,
};
