const register = async (req, res) => {
  try {
    res.json("Hello");
  } catch (err) {
    console.log(err);
  }
};

module.exports = { register };
