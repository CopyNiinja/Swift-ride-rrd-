import cors from 'cors';
import express from 'express';
const app = express();
app.use(cors())
app.get('/',(req,res)=>{
    res.json({ name:"Faiyaz",age:25});
})
app.listen(3000,()=>{
    console.log("The server is on port 3000...");
})

