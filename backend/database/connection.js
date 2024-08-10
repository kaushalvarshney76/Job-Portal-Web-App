import mongoose from "mongoose";

const connection = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGO_URI, {
            dbName: process.env.DB_NAME,
        });
        console.log(`Database connected successfully at host: ${connection.host}`)
    } catch (error) {
        console.log("Database Connection failed!!", error);
    }
}

export default connection;