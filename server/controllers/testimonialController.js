const Testimonial = require("../models/testimonial.model");

const getTestimonials = async (req, res) => {
    try {
        const testimonials = await Testimonial.find();
        res.json(testimonials);
    } catch (error) {
        res.json({ error: error.message });
    }
};

const addTestimonial = async (req, res) => {
    const { email, message, rating } = req.body;
    if(!email || !message || !rating) {
        return res.json({ error: "All fields are required" });
    }
    const newTestimonial = new Testimonial({
        email,
        message,
        rating
    });
    try {
        const savedTestimonial = await newTestimonial.save();
        res.json({message: "Testimonial added successfully"});
    } catch (error) {
        res.json({ error: error.message });
    }
};

const editTestimonial = async (req, res) => {};

const deleteTestimonial = async (req, res) => {};

module.exports = {
    getTestimonials,
    addTestimonial,
    editTestimonial,
    deleteTestimonial,
}