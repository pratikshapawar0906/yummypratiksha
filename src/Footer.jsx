import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="footer bg-dark text-light"  >
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-3  d-flex" style={{fontSize: '14px', marginTop: '16px', padding: '0px 12px'}}>
                               <i className="bi bi-geo-alt" style={{fontSize: '24px', color: '#CE1212',marginRight: '15px'}}></i>
                               <div className="footer-a">
                                  <h3 style={{fontSize:'16px', marginBottom: '15px', fontWeight: '700'}}>Address</h3>
                                  <p style={{margin: '0%'}}>A108 Adam Street</p>
                                  <p style={{margin: '0%'}}>New York,NY 5302522</p>
                               </div>
                        </div>
                        <div className="col-lg-3 d-flex" style={{fontSize: '14px', marginTop: '16px', padding: '0px 12px'}}>
                            <i className="bi bi-telephone" style={{fontSize: '24px', color: '#CE1212',marginRight: '15px'}}></i>
                               <div className="footer-a">
                                  <h3 style={{fontSize:'16px', marginBottom: '15px', fontWeight: '700'}}>Contact</h3>
                                  <p style={{margin: '0%'}}><strong>Phone:</strong>+ 5589 55488 55</p>
                                  <p style={{margin: '0%'}}><strong>Email:</strong>info@example.com</p>
                               </div>
                        </div>
                        <div className="col-lg-3 d-flex" style={{fontSize: '14px', marginTop: '16px', padding: '0px 12px'}}>
                            <i className="bi bi-clock" style={{fontSize: '24px', color: '#CE1212',marginRight: '15px'}}></i>
                               <div className="footer-a">
                                  <h3 style={{fontSize:'16px', marginBottom: '15px', fontWeight: '700'}}>Opening Hours</h3>
                                  <p style={{margin: '0%'}}><strong>Mon-sat</strong>:11AM:23PM</p>
                                  <p style={{margin: '0%'}}><strong>Sunday:</strong>Closed</p>
                               </div>
                        </div>
                        <div className="col-lg-3 " style={{fontSize: '14px', marginTop: '16px', padding: '0px 12px'}}>
                             <h4 style={{fontSize:'16px', marginBottom: '15px', fontWeight: '700'}}>follow us</h4>
                            <div className="social-link d-flex ">
                              <a href="#" className="twitter"><i className="bi bi-twitter-x"></i></a>
                              <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                              <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                              <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                            </div>      
                               
                        </div>
                    </div>
                </div>
                <div className="container text-center copyright mt-4">
                   <p style={{margin: '0%', fontSize: '14px'}}><i className="bi bi-copyright"></i>Copywrite<strong>Yummy</strong>All Rights Reserved</p>
                   <div className="credits">
                    Designed by
                    <a href="https://boostrapmade.com/" style={{color: '#CE1212', textDecoration: 'none'}}>Boostrapmade</a>
                   </div>
                </div>
      </footer>
   </>
  )
}

export default Footer
