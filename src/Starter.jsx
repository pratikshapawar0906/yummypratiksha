import React from 'react'
import './App.css'
import MenuItem from './MenuItem'

const Starter = () => {
  const data = [
    {
      id: 1,
      img: 'images/menu-item-1.png',
      imgName: 'Magnam Tiste',
      ingredient: 'lorem,deren,trataro,fileda,nerada',
      price: '$ 5.95',
    },
    {
      id: 2,
      img: 'images/menu-item-2.png',
      imgName: 'Aut luia',
      ingredient: 'lorem,deren,trataro,fileda,nerada',
      price: '$ 14.95',
    },
    {
      id: 3,
      img: 'images/menu-item-3.png',
      imgName: 'Est Eligendi',
      ingredient: 'lorem,deren,trataro,fileda,nerada',
      price: '$ 8.95',
    },
    {
      id: 4,
      img: 'images/menu-item-4.png',
      imgName: 'Eos Luibusbam',
      ingredient: 'lorem,deren,trataro,fileda,nerada',
      price: '$ 12.95',
    },
    {
      id: 5,
      img: 'images/menu-item-5.png',
      imgName: 'Eos Luibusbam',
      ingredient: 'lorem,deren,trataro,fileda,nerada',
      price: '$ 12.95',
    },
    {
      id: 6,
      img: 'images/menu-item-6.png',
      imgName: 'Laboriosam Direva',
      ingredient: 'lorem,deren,trataro,fileda,nerada',
      price: '$ 9.95',
    },


  ]
  return (
    <>
      <div className="content aos-init aos-animated" data-aos="fade-up" data-aos-delay="200">
        <div className='active'>
           <div className="tab-header text-center">
               <p style={{margin: '0%', fontSize: '14px'}}>MENU</p>
               <h3>STARTERS</h3>
            </div>
            <div className="row ">
                {

                  data.map((val, index, array) => {

                    // console.log(val);
                    return (


                      <div className="col-lg-4  aos-init aos-animated" style={{marginTop:'48px'}} key={val.id || index}>
                        <MenuItem 
                           img={val.img} 
                           imgName={val.imgName}
                           ingredient={val.ingredient} 
                           price={val.price} />
                      </div>

                    )



                  })
                }

            </div>
                
        </div>
      </div>
    </>
  )
}

export default Starter
