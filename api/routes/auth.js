const express=require('express')
const RegisterController=require('../controller/RegisterController')
const requireSignIn=require('../middleware/authMiddleware')
const isAdmin=require('../middleware/authMiddleware')
const authMiddleware=require('../middleware/authMiddleware')
const CoursesController = require('../controller/CoursesController')
const ContactController = require('../controller/ContactController')
const FeedbackController = require('../controller/FeedbackController')
const router=express.Router()

router.post('/register',RegisterController.register)
router.post('/login',RegisterController.login)
router.get('/test',authMiddleware.requireSignIn,authMiddleware.isAdmin,RegisterController.testmethod)
router.get('/user-auth',authMiddleware.requireSignIn,(req,res)=>{
    res.status(200).send({ok:true})
})
router.get('/admin-auth',authMiddleware.requireSignIn,authMiddleware.isAdmin,(req,res)=>{
    res.status(200).send({ok:true})
})
router.post('/forgotpassword',RegisterController.forgot)

router.post('/create',CoursesController.create)
router.get('/display',CoursesController.display)
router.get('/view/:id',CoursesController.view)
router.post('/update/:id',CoursesController.update)
router.get('/delete/:id',CoursesController.delete)
router.get('/getalluser',CoursesController.getAllUser)

router.post("/contact", ContactController.contant_insert);
router.get("/contactview", ContactController.contactview);




router.post("/registercourse", CoursesController.regiterCourse);
router.get("/registercourseview", CoursesController.registerCourseview);

router.post('/createfeedback',FeedbackController.createfeed)
router.get('/viewfeedback',FeedbackController.displayfeed)
router.get('/getallfeedback',FeedbackController.getAllFeedback)
module.exports=router