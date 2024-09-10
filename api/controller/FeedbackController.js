const FeedbackModel = require('../models/Feedback');

const cloudinary=require('cloudinary').v2
cloudinary.config({ 
    cloud_name: 'dnroacutk', 
    api_key: '956193383899983', 
    api_secret: 'fiAOrevYJW_D-HW7sWgAcNIwMNs',
    // secure: true
  });

class FeedbackController{
   static createfeed=async(req,res)=>{
    const file = req.files.image
        const myimage = await cloudinary.uploader.upload(file.tempFilePath, {
            folder: 'blogs_files'})
        try {
          const { title,description } = req.body;
          const result = new FeedbackModel({
            title:title,
            description:description,
            image: {
              public_id: myimage.public_id,
              url: myimage.secure_url
    
          }
      })
        
          await result.save()
          res.status(201).json({
            success:true,
            result
          })
        } catch (err) {
          console.log(err);
        } 
}

static displayfeed= async(req,res)=>{
    try {
        const data = await FeedbackModel.find().populate('image');
        res.status(200).json({
            success:true,
            data
        })
    } catch (error) {
        console.log(error);
    }
  }

  static getAllFeedback=async(req,res)=>{
    const data = await FeedbackModel.find()
        //console.log(user)
        res.status(200).json({
            success: true,
            data,
        });
  }
}
module.exports=FeedbackController