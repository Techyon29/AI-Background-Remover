import 'dotenv/config'
import express, { urlencoded } from 'express'
import cors from 'cors'
import { connect } from './Config/connect.js';

const app = express();
const PORT = process.env.PORT || 8000;
app.use(express.json())
app.use(urlencoded({extended:true}))
app.use(cors());
connect(process.env.MONGODB_URL);
app.get('/',(req,res)=>{
    const html = '<h1>Server Started</h1>'
    return res.send(html)
})
app.listen(PORT,()=>console.log('Server Started at ' + PORT))