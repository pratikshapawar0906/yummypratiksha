import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import GalleryImg from './GalleryImg';

const Gallary = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slidesPerView=5;

  const data = [
    { 
      id: 1, 
      img: 'images/gallery-1.jpg' 
    },
    { 
      id: 2, 
      img: 'images/gallery-2.jpg' 
    },
    { 
      id: 3, 
      img: 'images/gallery-3.jpg' 
    },
    { 
      id: 4, 
      img: 'images/gallery-4.jpg' 
    },
    { 
      id: 5, 
      img: 'images/gallery-5.jpg' 
    },
    { 
      id: 6, 
      img: 'images/gallery-6.jpg' 
    },
    { 
      id: 7, 
      img: 'images/gallery-7.jpg' 
    },
    { 
      id: 8, 
      img: 'images/gallery-8.jpg' 
    },
  ];

  return (
    <section className="light-background" style={{ padding: '60px 0px' }} id="gallery">
      <div className="col-md-12 text-center m-p" data-aos="fade-up">
        <h6 className="font-weight-lighter title">GALLERY</h6>
        <p className="display-4 title-description">
          <span className="font">CHECK</span>
          <span className="description-title">OUR GALLERY</span>
        </p>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={5}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => {
            swiper.on('slideChange', () => setActiveIndex(swiper.realIndex));
          }}
        >
          {data.map((val, index) => {
            const middleIndex = Math.floor(slidesPerView / 2);  // Middle index for 5 slides
            const isMiddle = index === (activeIndex + middleIndex) % data.length;
            return (
              <SwiperSlide key={val.id}>
                <GalleryImg img={val.img} isActive={isMiddle} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Gallary;
