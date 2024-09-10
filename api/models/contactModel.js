const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema(
  {
    contname:{
      type: String,
      required: true,
    },
    phone:{
      type: String,
      required: true,
    },
    email:{
      type: String,
      required: true,
    },
    message:{
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

//create collection
const ContactModel = mongoose.model("contact", ContactSchema);
//                                     ^ collection name

module.exports = ContactModel;