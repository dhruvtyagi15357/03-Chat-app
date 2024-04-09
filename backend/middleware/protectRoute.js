const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).send("Unauthorized no token provided");
        }

        const payload = jwt.verify(token, process.env.JWT_SECRET);

        if (!payload) {
            return res.status(401).send("Unauthorized");
        }

        const user = await User.findById(payload.id);
        if (!user) {
            return res.status(401).send("Unauthorized");
        }
        req.user = user;
        next();

    } catch (err) {
        console.log(err)
        res.status(500).send("Internal Server Error in auth middleware");
    }
}

module.exports = protectRoute;