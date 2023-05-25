const mongoose=require("mongoose")

const mongourl="mongodb+srv://hari:hari@cluster1.dlyqx9j.mongodb.net/nediadata?retryWrites=true&w=majority"
const connection =mongoose.connect(mongourl)

module.exports={
    connection
}