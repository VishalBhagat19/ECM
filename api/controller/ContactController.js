const ContactModel = require("../models/contactModel");

class ContactController{
    static contant_insert = async (req, res) => {
        try {
          const { contname, email, phone, message } = req.body;
          const result = new ContactModel({
            contname: contname,
            email: email,
            phone: phone,
            message: message,
          });
          await result.save();
          res.status(201).json({
            success: true,
            result,
          });
        } catch (err) {
          console.log(err);
        }
      };
      static contactview = async (req, res) => {
        try {
          const data = await ContactModel.find()
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
        
module.exports=ContactController