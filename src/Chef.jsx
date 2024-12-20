import React from 'react'
import ProChef from './proChef'

const Chef = () => {
  const data=[
    {
      id:1,
      img:'images/chefs-1.jpg',
      chefName:'Walter White',
      chefPosition:'Master Chef',
      chefInfo:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, numquam dolores repudiandae sunt autem dolore ',
    },
    {
      id:2,
      img:'images/chefs-2.jpg',
      chefName:'Walter White',
      chefPosition:'Master Chef',
      chefInfo:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, numquam dolores repudiandae sunt autem dolore ',
    },
    {
      id:3,
      img:'images/chefs-3.jpg',
      chefName:'Walter White',
      chefPosition:'Master Chef',
      chefInfo:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, numquam dolores repudiandae sunt autem dolore ',
    }
  ]
  return (
    <>
      <section  id="chef" style={{padding:'60px 0px'}}>
        <div className="col-md-12 text-center aos-init aos-animated " data-aos="fade-up"  >
            <h6 className=" font-weight-lighter title responsive-title">CHEFS</h6>
            <p className="display-4 title-description responsive-description">
              <span className='font'>OURS</span>
              <span className="description-title">PROFESSIONAL CHEFS</span>
            </p>
        </div>
        <div className="container"  >
            <div className="row justify-content-center">
                      
              {

                   data.map((val, index, array) => {

                     // console.log(val);
                     return (


                       <div className="col-md-4  aos-init aos-animated" data-aos="fade-up" data-aos-delay="100"style={{marginTop:'48px'}} key={val.id || index}>
                         <ProChef
                            img={val.img} 
                            chefName={val.chefName}
                            chefPosition={val.chefPosition} 
                            chefInfo={val.chefInfo} 
                         />
                       </div>

                     )



                   })
              }
            </div>
        </div>
      </section>
    </>
  )
}

export default Chef
