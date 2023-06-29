import mongoose from "mongoose";

export const connectDb = () => {
  mongoose
    .connect(process.env.DB_URI)
    .then(() => {
      console.log("Database Conected");
    })
    .catch((e) => {
      console.log(e);
    });
};
