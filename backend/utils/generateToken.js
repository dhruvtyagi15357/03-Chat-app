const jwt = require("jsonwebtoken");

const generateTokenAndSetCookie = (res, id) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });


  res.cookie("token", token, {
    httpOnly: true,  // This is important to prevent XSS attacks
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in milliseconds
    sameSite: "strict", // This is important to prevent CSRF attacks
    secure: process.env.NODE_ENV === "production" ? true : false, // This is important to prevent CSRF attacks
  });
};

module.exports = generateTokenAndSetCookie;


