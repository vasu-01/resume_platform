import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const dbConnection = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log(
      `\nMongodb connected || DB HOST : ${connectionInstance.connection.host} `
    );
  } catch (error) {
    console.log("Mongodb connection error: ", error);
    process.exit(1);
  }
};

export default dbConnection;
