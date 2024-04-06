const mongoose = require('mongoose');

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("connected to mongoDB");
        
    } catch (err) {
        console.log("Cannot connect to mongoDB!", err)
    }
}


module.exports = connect;