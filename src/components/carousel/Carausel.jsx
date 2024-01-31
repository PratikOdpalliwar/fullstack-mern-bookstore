import React from 'react'


const Carausel = () => {
  return (
    <div>
     <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">

   
    <div className="carousel-item active">
      <img src="https://source.unsplash.com/random/200×200/?library" className="d-block w-100" style={{ height: '500px' }} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/200×200/?novels" className="d-block h-52 w-100" style={{ height: '500px' }} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/200×200/?books" className="d-block w-100" style={{ height: '500px' }} alt="..."/>
    </div>

    <div className="carousel-caption" style={{zIndex: "10"}}>
    <form className="form-inline">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button className="btn btn-outline-success bg-dark my-2 my-sm-0" type="submit">Search</button>
  </form>
    </div>

  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Carausel
