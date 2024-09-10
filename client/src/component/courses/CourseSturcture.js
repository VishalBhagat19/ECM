import React from 'react'

function CourseSturcture() {
  return (
    <>
    <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">

    <div class="carousel-item active">
      <img src="/assest/carousel.jpg" alt="" class="d-block w-100"/>
      <div class="carousel-caption d-none d-md-block">
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
    </div>

  
    <div class="carousel-item">
      <img src="/assest/carousel.jpg" alt="" class="d-block w-100"/>
      <div class="carousel-caption d-none d-md-block">
        <h3>Second slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
    </div>
  </div>

  
  <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

    </>
  )
}

export default CourseSturcture
