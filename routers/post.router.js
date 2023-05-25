const express=require("express")

const {postModel}=require("../models/post.model")

const postRouter=express.Router()


// Get Operation

postRouter.get("/employee",async(req,res)=>{

    try{
        let data
        data=await postModel.find()
        res.status(200);
        res.send({
            status: 200,
            data: data,
        })
    }
    catch(error){
        res.status(400);
        res.send({ status: 400, error: error });


    }



})


// Post Operation

postRouter.post("/addemployee",async(req,res)=>{
    const data=req.body
    try {
        let newdata=new postModel(data)
        newdata.save()
        res.send({status: 200, data:"post is been added"})
    } catch (error) {
        res.send({status: 400, error: error})
    }
})


// update operation


postRouter.put("/update/:id",async(req,res)=>{
    let Id=req.params.id
    const data=req.body
    try {
        await postModel.findByIdAndUpdate({_id:Id},data)
        res.send({status: 200, Data:"post is been updated"})
    } catch (error) {
        res.send({status: 400, error: error})
    }
})

// delete operation

postRouter.delete("/delete/:id",async(req,res)=>{
    let Id=req.params.id
    try {
        await postModel.findByIdAndDelete({_id:Id})
        res.send({status: 200,data:"post is been deleted"})
    } catch (error) {
        res.send({status: 400, error: error})
    }
})






module.exports={
    postRouter
}