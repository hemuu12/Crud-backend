const express=require("express")
const cors=require("cors")
const { connection } = require("./config/db")

const {postRouter}=require("./routers/post.router")



const app=express()
app.use(express.json())

app.use(cors())


app.use("/data",postRouter)
// app.get("/",async(req,res)=>{
//     res.send("Welcome Home")
// })

const port =4100

app.listen(port,async(req,res)=>{
    try {
        await connection
        console.log("Db is connected")
    } catch (error) {
        console.log("Db is not connected")
    }
    console.log(`server is listening to ${port}`)
})

