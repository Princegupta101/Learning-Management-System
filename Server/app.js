import express from 'express'
import cors from'cors'
import cookieParser from 'cookie-parser';
import { config } from 'dotenv';
config();

const app = express();

app.use(express.json());

app.use(cors({
    origin:[process.env.FRONTEND_URL],
    credentials:true
}));

app.use(cookieParser());

app.use('/ping',function(req,res){
    res.send('Pong');
})

app.all('*',(req,res)=>{
    res.status(404).send('OOPS!!  404 page not found ')
})

export default app;