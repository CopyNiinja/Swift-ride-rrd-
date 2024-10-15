import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
dotenv.config();
const app = express();
 
// eslint-disable-next-line no-undef
mongoose.connect(process.env.MONGO_URI).then(()=>{console.log("Database connection established")}).catch((e)=>console.log(e))





const microSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    price:{
type:Number,
        required:true
    },
    description:String,
    imageUrl:String,
    type:String
})
const microbus = new mongoose.model('microbus',microSchema);



 
app.use(cors())
app.get('/',(req,res)=>{
    console.log(req,res);
    // res.json("");
})
app.get('/microbuses',async(req,res)=>{
    const data = await microbus.find();
    console.log(data);
    res.json(data);
    console.log(req,res);
    // res.json("");
})
app.listen(3000,()=>{
    console.log("The server is on port 3000...");
})

