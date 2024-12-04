import React from 'react'

const Emp = (props) => {
  return (
    <>
      <section>
        <div className= {`carousel-item ${props.isActive ? 'active' : ''}`}>
          <div className="row  justify-content-center">
              <div className="col-lg-6 " style={{marginTop: '24px' , padding: '0px 12px'}}>
                  <div className="testimonial-content">
                      <p>
                          <i className="bi bi-quote"></i>
                            <span>{props.empInfo}</span>
                          <i className="bi bi-quote "></i>
                      </p>
                      <h3 style={{fontSize: '20px', margin: '10px 0px 5px', color: '#37373f'}}>{props.empName}</h3>
                      <h4 style={{fontSize: '14px', marginBottom: '10px', color: '#9e9c9c'}}>{props.empPosition}</h4>
                      <div className="star text-warning">
                          <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                      </div>
                  </div>
              </div>
              <div className="col-lg-2 " style={{marginTop: '24px' , padding: '0px 12px'}}>
                  <img src={props.empImg} className="img-fluid testimonial-img text-center"/>
              </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Emp
