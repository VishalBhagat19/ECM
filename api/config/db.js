const mongoose=require('mongoose')
const colors=require('colors')

const connectDB=async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URL)
        console.log(`connected to mongodb database ${conn.connection.host}`.bgMagenta.white);
    }catch(error){
        console.log(`Error in mongodb ${error} `.bgRed.white);
    }
}

module.exports=connectDB