import { Navigation, Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

import { Autoplay } from 'swiper/modules';

export default () => {
    const data=[
        {
            id:1,
            img:'images/OIP3.jpeg',
            eventName:'Custom Parties',
            eventPrice:'$99',
            eventInfo:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur consequunturvlibero, quidem ipsam illo obcaecati. Harum accusamus praesentium, provident sint vero at magnam nihil odio',

        },
        {
            id:2,
            img:'images/OIP2.jpeg',
            eventName:'Private Parties',
            eventPrice:'$289',
            eventInfo:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur consequunturvlibero, quidem ipsam illo obcaecati. Harum accusamus praesentium, provident sint vero at magnam nihil odio',

        },
        {
            id:3,
            img:'images/OIP1.jpeg',
            eventName:'Birthday Parties',
            eventPrice:'$499',
            eventInfo:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur consequunturvlibero, quidem ipsam illo obcaecati. Harum accusamus praesentium, provident sint vero at magnam nihil odio',

        },
        {
            id:4,
            img:'images/OIP4.jpg',
            eventName:'Wedding Parties',
            eventPrice:'$899',
            eventInfo:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur consequunturvlibero, quidem ipsam illo obcaecati. Harum accusamus praesentium, provident sint vero at magnam nihil odio',

        }
        
    ]
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={3}
      loop={true}
      autoplay={{ delay: 3000,  disableOnInteraction: false,}}
      pagination={{ clickable: true ,}}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
       {   
            data.map((item) => (

                <SwiperSlide key={item.id}>
                    <div
                        style={{
                          height: '600px',
                          backgroundImage: `url(${item.img})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          position: 'relative',
                          borderRadius: '10px',
                          overflow: 'hidden',
                          
                        }}
                    >
                        <div
                            style={{
                              position: 'absolute',
                              bottom: '20px',
                              left: '20px',
                              backgroundColor: 'rgba(0, 0, 0, 0.5)',
                              color: 'white',
                              padding: '10px',
                              borderRadius: '5px',
                            }}
                        >
                          <h3>{item.eventName}</h3>
                          <p>{item.eventPrice}</p>
                          <p style={{ fontSize: '14px' }}>{item.eventInfo}</p>
                       </div>
                  </div>
                </SwiperSlide>
            ))
        }
    </Swiper>
  );
};