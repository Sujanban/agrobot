const jwt = require("jsonwebtoken");
const Testimonial = require("../models/testimonial.model");

const checkAuth = (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.json({ error: " Unauthorized route. Please Login" });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        console.log(error);
        res.json({ error: error.message });
    }
};

const isAdmin = (req, res, next) => {
    try {
      const token = req.cookies.token;
      if (!token) {
        return res.json({ error: " Unauthorized route. Please Login" });
      }
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      if (decoded.role !== 1) {
        return res.json({ error: "Need Admin Access!" });
      }
      req.user = decoded;
      next();
    } catch (error) {
      console.log(error);
      res.json({ error: error.message });
    }
  };
const isTestimonailOwner = async (req, res, next) => {
    try {
      const token = req.cookies.token;
      if (!token) {
        return res.json({ error: " Unauthorized route. Please Login" });
      }
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      const testimonail = await Testimonial.findById(req.params.id);
      const owner = testimonail.email;

      if (decoded.role == 1 || decoded.email == req.body.email || decoded.email == owner) {
        req.user = decoded;
        next();
      }else{
        return res.json({ error: "Need Admin Access!" });
      }
    } catch (error) {
      console.log(error);
      res.json({ error: error.message });
    }
  };

  module.exports = { checkAuth, isAdmin, isTestimonailOwner };