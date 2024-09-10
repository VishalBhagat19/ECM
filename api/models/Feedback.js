const mongoose=require('mongoose')

const feedbackSchema = new mongoose.Schema(
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
  const FeedbackModel = mongoose.model("feedback",feedbackSchema);
  //                                     ^ collection name
  
  module.exports = FeedbackModel;