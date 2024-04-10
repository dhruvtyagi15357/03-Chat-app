const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

const authRoutes = require('./routes/authRoutes');
const messageRoutes = require('./routes/messageRoutes');
const userRoutes = require('./routes/userRoutes');
const connect = require('./db/connect');

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);


app.listen(PORT, async () => {
    await connect()
    console.log(`server listening on the port: ${PORT}`);
});




