const mongoose=require('mongoose')

const registerCourseSchema = new mongoose.Schema(
    {
      name:{
        type: String,
        required: true,
      },
      email:{
        type: String,
        require: true,
      },
   
      address:{
        type: String,
        require: true,
      },
      course:{
        type:String,
        required:true
      },
      branch:{
          type:String,
          require:true,
      },
      phone:{
        type: String,
        require: true,
      },
      
    },
    { timestamps: true }
  );
  
  //create collection
  const RegisterCourseModel = mongoose.model("registercourses", registerCourseSchema);
  //                                     ^ collection name
  
  module.exports = RegisterCourseModel;