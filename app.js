import express from "express";
import userRoutes from "./routes/userRoute.js";
import {config} from "dotenv"
config({
    path:"./data/config.env"
})


export const app = express();

//Middlewares
app.use(express.json());
app.use("/users",userRoutes);





