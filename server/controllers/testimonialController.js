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
    const { name, email, message } = req.body;
    const newTestimonial = new Testimonial({
        name,
        email,
        message,
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