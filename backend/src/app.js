import express from "express";
import {createServer} from "node:http";
import {Server} from "socket.io";
import mongoose from "mongoose";
import cors from "cors";
import { connectToSocket } from "./controllers/socketManager.js";
import userRoutes from "./routes/users.routes.js"

const app = express();//app connects with express
const server = createServer(app);//server connects with app , hence server connects with express indirectly through app 
const io = connectToSocket(server);


app.set("port" , (process.env.Port || 8000))
app.use(cors());//to handle error like allow sttp , for setting ip
app.use(express.json({limit: "40kb"}));
app.use(express.urlencoded({limit: "40kb" , extended: true}));
app.use("/api/v1/users", userRoutes);


const start = async() => {
    app.set("mongo_user")
    const connectionDb =await mongoose.connect("mongodb+srv://komalmhaske253_db_user:Komal%402510@cluster0.clfotzx.mongodb.net/")
    
    console.log("MONGO Connected DB Host: ${connectionDb.connection.host}")
    
    server.listen(app.get("port"),() => {
        console.log("LISTENIN ON PORT 8000");
    });
}
start();