import React from 'react'

const Card = (props) => {
  return (
    <>
       <div className='col-md-4 col-10 mx-auto'>
              <div className="card">
              <img src={props.imgsrc} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text text-secondary">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-info text-white">Read More</a>
              </div>
               </div>
              </div>
    </>
  )
}

export default Card
