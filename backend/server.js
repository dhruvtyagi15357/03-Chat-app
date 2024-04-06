const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const connect = require('./db/connect');
dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use('/api/auth', authRoutes);


app.listen(PORT, async () => {
    await connect()
    console.log(`server listening on the port: ${PORT}`);
});




