import React from 'react'
import './Home.css'
import { useAuth } from '../context/Auth'
import Layout from '../component/layouts/Layout'

function Home() {
  const[auth,setAuth]=useAuth()
  return (
    <Layout title={'Home'}>
    <div id="carouselExampleDark" className="carousel carousel-dark slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={2} aria-label="Slide 3" />
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={3} aria-label="Slide 4" />
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={4} aria-label="Slide 5" />
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={5} aria-label="Slide 6" />
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={6} aria-label="Slide 7" />
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={7} aria-label="Slide 8" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval={2000}>
            <img src="image/slider1.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className='text-white'>Welcome to University of Gwalior</h5>
              <p className='text-white'>Admission open!!</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval={2000}>
            <img src="/image/slider2.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className='text-white'>Welcome to University of Gwalior</h5>
              <p className='text-white'>Admission open!!</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval={2000}>
            <img src="/image/slider3.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className='text-white'>Welcome to University of Gwalior</h5>
              <p className='text-white'>Admission open!!</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval={2000}>
            <img src="/image/slider4.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className='text-white'>Welcome to University of Gwalior</h5>
              <p className='text-white'>Admission open!!</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval={2000}>
            <img src="/image/slider5.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className='text-white'>Welcome to University of Gwalior</h5>
              <p className='text-white'>Admission open!!</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval={2000}>
            <img src="/image/slider6.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className='text-white'>Welcome to University of Gwalior</h5>
              <p className='text-white'>Admission open!!</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval={2000}>
            <img src="/image/slider7.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className='text-white'>Welcome to University of Gwalior</h5>
              <p className='text-white'>Admission open!!</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/image/slider8.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className='text-white'>Welcome to University of Gwalior</h5>
              <p className='text-white'>Admission open!!</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className='silder-bottom'>
        <div className='container-fluid'>
          <div className='row'>
            <marquee>Welcome to University of Gwalior</marquee>
          </div>
        </div>
      </div>

      <div className='faculty'>
        <div className='container-fluid'>
          <div className='row'>
            <h1>Our Faculty</h1>
            <div className='col-md-2 x'>
              <img src='/image/faculty1.jpg' />
              <h3>ROXI CHI LUENA</h3>
              <h5>CS Department</h5>
            </div>
            <div className='col-md-2 x'>
              <img src='/image/faculty2.jpg' />
              <h3>ROXI CHI LUENA</h3>
              <h5>Civil Department</h5>
            </div>
            <div className='col-md-2 x'>
              <img src='/image/faculty3.jpg' />
              <h3>ROXI CHI LUENA</h3>
              <h5>Mechnical Department</h5>
            </div>
            <div className='col-md-2 x'>
              <img src='/image/faculty3.jpg' />
              <h3>ROXI CHI LUENA</h3>
              <h5>Electrical Department</h5>
            </div>
            <div className='col-md-2 x'>
              <img src='/image/faculty3.jpg' />
              <h3>ROXI CHI LUENA</h3>
              <h5>Agriculture Department</h5>
            </div>
            <div className='col-md-2 x'>
              <img src='/image/faculty3.jpg' />
              <h3>ROXI CHI LUENA</h3>
              <h5>Medical Department</h5>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid why">
<div class="container">
 <div class="row">
   <h1 class="mt-4 text-center title">LATEST NEWS</h1>
   <div class="col-md-4 a">
     <img src="https://www.lpu.in/images/boxing-championships-2022.jpg" class="w-100 mt-4 "/>
     <h3>Proud moment as our student, Parveen, wins the Bronze medal at the World Boxing Championship 2022 and was invited for lunch with our Honourable PM, Shri Narendra Modi!</h3>
   </div>
   <div class="col-md-4 a">
     <img src="  https://www.lpu.in/images/boxing-team.jpg" class="w-100 mt-4 "/>
     <h3>Proud moment as our student, Parveen, wins the Bronze medal at the World Boxing Championship 2022 and was invited for lunch with our Honourable PM, Shri Narendra Modi!</h3>
   </div>
   <div class="col-md-4 a">
     <img src="https://www.lpu.in/images/khelo-india.jpg" class="w-100 mt-4 "/>
     <h3>Proud moment as our student, Parveen, wins the Bronze medal at the World Boxing Championship 2022 and was invited for lunch with our Honourable PM, Shri Narendra Modi!</h3>
   </div>
 </div>
</div>
</div>

<div class="container-fluid why1 mt-4">
<div class="row">
 <div class="col-md-4">
   <img src="https://gwalior-university01.netlify.app/images/icon1.png"class="b"/> 
   <h3 class="text-center">JOIN TODAY</h3>
   <br/>
   <p class="text-center">You Can Apply Online for Admission</p>
 </div>
 <div class="col-md-4">
   <img src="https://gwalior-university01.netlify.app/images/icon2.png" class="b"/>
  
   <h3 class="text-center"> Apply Online for Degree</h3>
   <br/>
   <p class="text-center">Click here to online apply for Degree</p>
 </div>
 <div class="col-md-4">
   <img src="https://gwalior-university01.netlify.app/images/icon1.png" class="b"/>
   
   <h3 class="text-center">Apply for Police ITI Courses</h3>
   <br/>
   <p class="text-center">Click here to online apply for Degree</p>
 </div> 
</div> 
</div> 


<br/><br/><br/>
<div class="container-fluid  shiva">
<div class="container">
 <div class="row">
     <h1 class="title text-center">OUR STARTUPS</h1>
     <div class="col-md-3 c">
       <img src="https://gwalior-university01.netlify.app/images/startup1.jpg" class="mt-4" />
       <h3 class="text-center mt-4">INSIGHTFUL TALKS</h3>
       <h6 class="text-center">INSIGHTFUL TALKS</h6>
       <p>Insightful talks began in 2018 as conference where Technology, entertainment and design converged. We cover almost every area of human thinking from science to business to global issues. Our platform is devoted to spreading ideas.</p>
     </div>
     <div class="col-md-3 c">
       <img src="https://gwalior-university01.netlify.app/images/startup2.jpg" class="mt-4"  />
        <h3 class="text-center mt-4">Spanshots</h3>
       <h6 class="text-center">Spanshots </h6>
       <p>Spanshots is the world’s first App/Web motion picture-sharing and social networking service that enables its users to take motion pictures and share them on Facebook with their friends.</p>
     </div>
     <div class="col-md-3 c">
       <img src="https://gwalior-university01.netlify.app/images/startup3.jpg" class="mt-4"/>
        <h3 class="text-center mt-4">GYANSHALA</h3>
       <h6 class="text-center">GYANSHALA</h6>
       <p>GyanShala is a firm specializing in Training, Workshop, Development, on-campus cultural program and CRT based programs. We offer pre-placement training for engineers, corporate training for executives, voice & accent training to teachers and other faculty development programs.</p>
     </div>
     <div class="col-md-3 c">
       <img src="https://gwalior-university01.netlify.app/images/startup4.jpg" class="mt-4"/>
        <h3 class="text-center mt-4">DOORSTEPSHOPPEE</h3>
       <h6 class="text-center">DOORSTEPSHOPPEE</h6>
       <p>Doorstepshoppee Services Private Limited is an online e-commerce company which aims to revolutionize the current trade and purchase scenario with its dynamic website/app. Now you can order anything without leaving the comfort of your home.</p>
     </div>
 </div>
</div>
</div> 
<br/><br/><br/><br/>
<div class="container-fluid why2 ">
<div class="container">
 <div class="row">
   <h1>Record placements on a single day by MNCs in North-Central India</h1>
   <div class="col-md-3 d" >
     <img src="https://gwalior-university01.netlify.app/images/icon3.png"/>
     <h2>8000</h2>
     <h6>STUDENTS</h6>
   </div>
   <div class="col-md-3 d">
     <img src="https://gwalior-university01.netlify.app/images/icon4.png"/>
     <h2>980</h2>
     <h6>PUBLICATIONS</h6>
   </div>
   <div class="col-md-3 d">
     <img src="https://gwalior-university01.netlify.app/images/icon5.png"/>
     <h2>71144</h2>
     <h6>PLACEMENT OPPORTUNITIES</h6>
   </div>
   <div class="col-md-3 d">
     <img src="https://gwalior-university01.netlify.app/images/icon6.png"/>
     <h2>3534</h2>
     <h6>STUDENTS PLACED IN LAST 3 YEARS</h6>
   </div>
 </div>
</div>
</div>  
<div class="container-fluid why3 mt-4">
<div class="container">
 <div class="row">
    <div class="col-md-6">
      <p>GWALIOR UNIVERSITY  STUDENTS ARE GUIDED ON NICHE TECHNOLOGIES LIKE GOOGLE. POSSESSING SUCH SKILL SETS SEPERATES THEM FROM THE ORDINARY AND LEADS THEN TO GRAB TOP NOTCH PLACEMENTS</p>
    </div>
    <div class="col-md-6">
      <img src="https://gwalior-university01.netlify.app/images/google.jpg" class="image-fluid w-100 "/>
    </div>
   </div>
 </div>
</div>
       <pre>{JSON.stringify(auth,null,4)}</pre>
    </Layout>
  )
}

export default Home