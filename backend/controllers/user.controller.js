const User = require("../models/user.model");

const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUser = req.user._id;
        const users = await User.find({ _id: { $ne: loggedInUser } }).select(
          "fullName username profilePicture"
        );

        res.status(200).json({ users });
    } catch (err) {
        console.log(err)
        res.status(500).send("Internal Server Error in getting users for sidebar");
    }
}

module.exports = { getUsersForSidebar };