const express=require('express');
const collection=require('./mongo');
const cors=require('cors');
const { default: mongoose } = require('mongoose');

const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())



app.get('/',cors(),(req,res)=>{
    

})

app.post('/',async(req,res)=>{
    const {empname,empid,empemail,nomname,nomid,nomemail,what,how,benefits,myphoto}=req.body;
    const data={
        empname:empname,
        empid:empid,
        empemail:empemail,
        nomname:nomname,
        nomid:nomid,
        nomemail:nomemail,
        // nomrel:nomrel,
        what:what,
        how:how,
        benefits:benefits,
        myphoto:myphoto,
        // pdf:pdf
        
    }
 
    await collection.insertMany([data])
})

mongoose.connect('mongodb://localhost:27017/react-login')
app.get('/review',(req,res)=>{
    collection.find()
    .then(collection=>res.json(collection))
    .catch(err=>console.log(err))
})

app.listen(8000,()=>{
    console.log('Port Connected');
})



