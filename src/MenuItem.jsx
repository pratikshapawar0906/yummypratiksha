import React from 'react'

const MenuItem = (props) => {
  
  // console.log(props)

  return (
    <>
  
  

            <img src={props.img} alt={props.imgName} className="img-fluid img-menu" />

            <h4 className="img-name">{props.imgName}</h4>
            <p className="ingredient">{props.ingredient}</p>
            
            <p className="price">{props.price}</p>

    </>
  )
}

export default MenuItem
