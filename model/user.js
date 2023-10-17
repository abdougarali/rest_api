const mongoose=require('mongoose')
const{Schema,model}=mongoose;

const userschema=Schema({
    name:{type:String, required:true},
    email:{type:String,required:true}
})

const dbuser=model('user',userschema)

module.exports=dbuser;