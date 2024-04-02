const mongoose=require('mongoose');
module.exports=
mongoose.model('employes',{

    name:{type:String},
    city:{type:String},
    salary:{type:String},
    amount:{type:Number}
} )
    