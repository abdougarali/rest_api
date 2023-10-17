const express=require('express');
const app=express();
const mongoose=require('mongoose');
require('dotenv').config();
const PORT=process.env.port||6363

app.use(express.json());
const dbuser=require('./model/user')

// app.post('/createuser',(req,res)=>{
//    const data=req.body
//    user=new dbuser(data)
//    user.save().then(()=>{res.send("user saved succeffuly")})
//    .catch((err)=>console.log(err));

// })


app.post('/newuser',async (req,res)=>{
try {
    const donneé=req.body 
    usr=new dbuser(donneé)
    saved=await usr.save()
    res.send(saved)



} catch (error) {
    res.send(error)
}

})

app.get('/getall',(req,res)=>{

dbuser.find()
.then((data)=>res.send(data))
.catch((error)=>res.send(error))

})

app.get('/alluser',async(req,res)=>{
    try {
     find=await dbuser.find()
     res.send(find)
    } catch (error) {
        res.send(error)
    }
})


app.put('/update/:id',(req,res)=>{
 const id=req.params.id
  dbuser.updateOne({_id:id},{name:'seif'})
 .then(()=>res.send('updated'))
 .catch((error)=>res.send(error))

})


app.put('/modif/:id', async(req,res)=>{
    try {
        const id=req.params.id
       updated=await dbuser.updateOne({_id:id},{email:'seif.gomycode@gmail.com'})
       res.send(updated)

    } catch (error) {
        res.send(error)
    }
})


app.delete('/deletall/:id',(req,res)=>{

    const id=req.params.id
    dbuser.findOneAndRemove({_id:id})
    .then(()=>res.send('user deleted'))
    .catch((err)=>res.send(err))


})




app.delete('/supr/:id',async (req,res)=>{
try {
    const id=req.params.id
    deleted=await dbuser.findOneAndDelete({_id:id})
    res.send(deleted)
} catch (error) {
    res.send(error)
}
})
mongoose.connect(process.env.URI)
.then(()=>console.log('data base connected'))
.catch((err)=>console.log('fail connection',err))


app.listen(PORT,(err)=>{
    err?console.log('server does not work')
    :console.log(`server running on port ${PORT}`)
})
