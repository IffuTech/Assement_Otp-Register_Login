const jwt = require("jsonwebtoken");
const secretkey = "irshad09";

function generateJWTToken(user) {
  const payload = {
    userId: user._id,
    email: user.email,
  };

  const token = jwt.sign(payload, secretkey, { expiresIn: "1d" });

  return token;
}

module.exports = { generateJWTToken };
