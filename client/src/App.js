import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import PageNotFound from './pages/PageNotFound';
import Header from './component/layouts/Header';
import Footer from './component/layouts/Footer';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Dashboard from './user/Dashboard';
import PrivateRoute from './component/Routes/Private';
import Forgot from './pages/Auth/Forgot';
import Placement from './pages/Placement';
import AdminRoute from './component/Routes/AdminRoute';
import AdminDashboard from './pages/admin/AdminDashboard';
import CreateCourses from './pages/admin/CreateCourses';
import StudentFeedback from './pages/admin/StudentFeedback';
import Users from './pages/admin/Users';
import Courses from './pages/Courses';
import Contact from './component/contact/Contact';
import ContactAdmin from './pages/admin/ContactAdmin';
import Couse from './component/courses/Couse';

function App() {
  return (
    <>
    {/* <Header/> */}
    <ToastContainer/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/dashboard' element={<PrivateRoute/>}>
      <Route path='user' element={<Dashboard/>}/>
      </Route>
      <Route path='/dashboard' element={<AdminRoute/>}>
      <Route path='admin' element={<AdminDashboard/>}/>
      <Route path='admin/create-course' element={<CreateCourses/>}/>
      <Route path='admin/feedback' element={<StudentFeedback/>}/>
      <Route path='admin/users' element={<Users/>}/>
      <Route path='admin/contact' element={<ContactAdmin/>}/>
      </Route>
      <Route path='/about' element={<About/>}/>
      <Route path='/courses' element={<Courses/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/couse' element={<Couse/>}/>
      <Route path='/placement' element={<Placement/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/forgotpassword' element={<Forgot/>}/>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
    {/* <Footer/> */}
    </>
  );
}

export default App;
