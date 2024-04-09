const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

const authRoutes = require('./routes/authRoutes');
const connect = require('./db/connect');
const messageRoutes = require('./routes/messageRoutes');

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);


app.listen(PORT, async () => {
    await connect()
    console.log(`server listening on the port: ${PORT}`);
});




