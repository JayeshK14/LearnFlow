const mongoose = require("mongoose");
// const {MONGO_CONNECTION_URI} = require("./keys");
require('dotenv').config();

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(
            process.env.MONGO_CONNECTION_URI,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );

        console.log(`MongoDB connected ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

module.exports = connectDb;