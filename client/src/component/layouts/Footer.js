import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className=" footer text-center text-lg-start ">
  {/* Section: Social media */}
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    {/* Left */}
    {/* Left */}
    {/* Right */}
  </section>
  {/* Section: Social media */}
  {/* Section: Links  */}
  <section className>
    <div className="container text-center text-md-start mt-5">
      {/* Grid row */}
      <div className="row mt-3">
        {/* Grid column */}
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          {/* Content */}
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3" />University of Gwalior
          </h6>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        {/* Grid column */}
        {/* Grid column */}
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4">
            Courses
          </h6>
          <p>
            <Link href="#!" className="text-reset">Angular</Link>
          </p>
          <p>
            <Link href="#!" className="text-reset">React</Link>
          </p>
          <p>
            <Link href="#!" className="text-reset">Cpp</Link>
          </p>
          <p>
            <Link href="#!" className="text-reset">Java</Link>
          </p>
        </div>
        {/* Grid column */}
        {/* Grid column */}
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <Link href="#!" className="text-reset">Pricing</Link>
          </p>
          <p>
            <Link href="#!" className="text-reset">Settings</Link>
          </p>
          <p>
            <Link href="#!" className="text-reset">Orders</Link>
          </p>
          <p>
            <Link href="#!" className="text-reset">Help</Link>
          </p>
        </div>
        {/* Grid column */}
        {/* Grid column */}
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3" /> Gwalior</p>
          <p>
            <i className="fas fa-envelope me-3" />
            info@example.com
          </p>
          <p><i className="fas fa-phone me-3" /> + 01 234 567 88</p>
          <p><i className="fas fa-print me-3" /> + 01 234 567 89</p>
        </div>
        {/* Grid column */}
      </div>
      {/* Grid row */}
    </div>
  </section>
  {/* Section: Links  */}
  {/* Copyright */}
  <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
    © 2021 Copyright:
    <Link className="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</Link>
  </div>
  {/* Copyright */}
</footer>
  )
}

export default Footer