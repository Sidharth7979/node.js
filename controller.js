const express = require('express')
const Employee= require("../Models/employe.model.js")
const router= express.Router()

// router.get("/",(req,res)=>{
//     Employee.find()
//     .then((data)=>{
//        res.send(data)
//     })
//        .catch((err)=>{console.log(err)});
//         })

// for adding new data

        router.post("/",(req,res)=>{
         Employee.create(req.body)
         .then((data)=>{
            res.send(data)
         })
            .catch((err)=>{console.log(err)});
             })

// for delete 
router.delete("/",(req,res)=>{
   Employee.delete(req.body)
   .then((data)=>{
      res.send(data)
   })
      .catch((err)=>{console.log(err)});
       })



       router.put("/",(req,res)=>{
         Employee.updateOne(req.body)
         .then((data)=>{
            res.send(data)
         })
            .catch((err)=>{console.log(err)});
             })

// for a particular id in the collection
             router.get("/",(req,res)=>{
               const query=req.query;
               Employee.find(query)
               .then((data)=>{
                  res.send(data)
               })
                  .catch((err)=>{console.log(err)});
                   })
           

    module.exports=router 




