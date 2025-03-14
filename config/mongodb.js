import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("Database connected!!");
  });

  await mongoose.connect(`${process.env.MONGODB_URI}/prescripto`); // prescripto is create database in mongodb with that name 
};

export default connectDB;
