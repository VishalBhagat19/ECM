const RegisterCourseModel = require("../models/RegiterCourse");
const CourseModel = require("../models/courseModel");
const cloudinary=require('cloudinary').v2
cloudinary.config({ 
    cloud_name: 'dnroacutk', 
    api_key: '956193383899983', 
    api_secret: 'fiAOrevYJW_D-HW7sWgAcNIwMNs',
    // secure: true
  });

class CoursesController{
    static create=async(req,res)=>{
        const file = req.files.image
        const myimage = await cloudinary.uploader.upload(file.tempFilePath, {
            folder: 'blogs_files'})
        try {
          const { title,description } = req.body;
          const result = new CourseModel({
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
    static display = async(req,res)=>{
        try {
            const data = await CourseModel.find().populate('image');
            res.status(200).json({
                success:true,
                data
            })
        } catch (error) {
            
        }
      }
    static view=async(req,res)=>{
      try {
        const data = await CourseModel.findById(req.params.id)
        res.status(200).json({
          success:true,
          data
        })       
      } catch (error) {
        console.log(error);
      }
  
    }
    static update=async(req,res)=>{
      const file = req.files.image
    const cat_image = await cloudinary.uploader.upload(file.tempFilePath, {
        folder: 'blogs_files'})
  try {
    const {title,description} = req.body
    const data = await CourseModel.findByIdAndUpdate(req.params.id,{
      title:title,
      description:description,
      image:{
        public_id: cat_image.public_id,
        url: cat_image.secure_url
      }
    })
    res.status(201).json({
      success:true,
      message :'update successfully 😍' 
    })
} catch (error) {
    console.log(error);
  }
    }
  static delete=async(req,res)=>{
    try {
      const data =await CourseModel.findByIdAndDelete(req.params.id)
      res.status(201).json({
        success:true,
        message :'delete successfully 🥱' 
      })
    } 
    catch (error) {
      console.log(error);
  }
  }
  static getAllUser=async(req,res)=>{
    const data = await CourseModel.find()
        //console.log(user)
        res.status(200).json({
            success: true,
            data,
        });
  }
////////////////////////////////////////////////////////////////////////////regiter for course ////////////////////////
  static regiterCourse = async(req,res)=>{
    try {
      const {name,email,address,course,branch,phone} = req.body
      const result = new RegisterCourseModel({
        name: name,
        email: email,
        address:address,
        course: course,
        branch: branch,
        phone: phone,
      });
      await result.save();
      // Send a JSON response indicating success
      res.status(201).json({ 
        success:true,
        result,
        message: 'Data saved successfully' });
    } catch (err) {
      console.error(err);
      // Send a JSON response indicating failure
      res.status(500).json({ message: 'Internal Server Error' });
    }
  
}

static registerCourseview = async (req, res) => {
  try {
    const data = await RegisterCourseModel.find()
    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(error); // Corrected from console.log(err);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};

}

module.exports=CoursesController