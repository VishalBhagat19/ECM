const mongoose=require('mongoose')

const courseSchema = new mongoose.Schema(
    {
      title:{
        type: String,
        required: true,
      },
      description:{
        type: String,
        require: true,
      },
      image:{
        public_id: {
          type: String,
          
        },
        url: {
          type: String,
           
        },
      },
    },
    { timestamps: true }
  );
  
  //create collection
  const CourseModel = mongoose.model("course", courseSchema);
  //                                     ^ collection name
  
  module.exports = CourseModel;