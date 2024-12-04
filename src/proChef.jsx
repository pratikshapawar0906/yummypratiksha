import React from 'react'

const proChef = (props) => {
  return (
    <>
      
            <div className=" card team-member">
                <div className=" card-header member-img" style={{padding: '0px'}}>
                    <img src={props.img} className="img-fluid rounded"/>
                    <div className="social rounded"  >
                        <a href=""><i className="bi bi-twitter-x "></i></a>
                        <a href=""><i className="bi bi-facebook "></i></a>
                        <a href=""><i className="bi bi-instagram "></i></a>
                        <a href=""><i className="bi bi-linkedin "></i></a>
                    </div>
                </div>
                <div className=" card-body text-center member-info">
                    <h4 style={{marginBottom: '5px'}}>{props.chefName}</h4>
                    <span style={{fontSize: '14px'}}>{props.chefPosition}</span>
                    <p style={{paddingTop: '15px', fontStyle: 'italic'}}>{props.chefInfo}</p>
                </div>
            </div>
    </>
  )
}

export default proChef
