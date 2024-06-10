import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';

const ImageList = [
  { imageUrl: "/category/01.jpg", category: "PEINTURE GLYCEROPHTALLIQUE" },
  { imageUrl: "/category/02.jpg", category: "ENDUITS" },
  { imageUrl: "/category/03.jpg", category: "TEINTE" },
  { imageUrl: "/category/04.jpg", category: "IMPRIMATION" },
  { imageUrl: "/category/05.jpg", category: "PEINTURE DE DECORATION" },
  { imageUrl: "/category/06.jpg", category: "PEINTURE ECOLOGIQUE" },
  { imageUrl: "/category/07.jpg", category: "PEINTURE D'ETANCHIETE , ET ANTIHUMIDITE" },
  { imageUrl: "/category/08.jpg", category: "PEINTURE VINYLIQUE OU ACRYLIQUE MATE" },
  { imageUrl: "/category/09.jpg", category: "PEINTURE VINYLIQUE OU ACRYLIQUE SATINADO" },
  { imageUrl: "/category/10.jpg", category: "PEINTURE INDUSTRIELLE" },
  { imageUrl: "/category/11.jpg", category: "VERNIS" }
];

const HomeCategory = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getSlideSize = () => {
    if (windowWidth <= 480) {
      return { width: '150px', height: '150px' };
    } else if (windowWidth <= 768) {
      return { width: '200px', height: '200px' };
    } else {
      return { width: '400px', height: '400px' };
    }
  };

  const styles = {
    swiper: {
      width: '100%',
      paddingTop: '20px',
      paddingBottom: '50px',
      display: 'flex',
      justifyContent: 'center',
    },
    swiperSlide: {
      backgroundPosition: 'center',
      position: 'relative',
      backgroundSize: 'cover',
      ...getSlideSize(),
    },
    swiperSlideImg: {
      display: 'block',
      width: '100%',
      height: '100%', // Ensure the image covers the entire slide
      objectFit: 'cover',
    },
    textOverlay: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      backgroundColor: 'rgba(255, 255, 255, 0.8)', // White background with some transparency
      color: 'rgb(3, 51, 58)',
      textAlign: 'center',
      padding: '10px 0',
      fontSize: '16px',
      fontWeight: 'bold',
      zIndex: 1,
    },
  };

  return (
    <div className='category-section style-4' id='inspiration'>
      <div className='container'>

        {/*section header*/}
        <div className='section-header text-center'>
          <span className='subtitle'>Inspirations</span>
          <h2 className='title'>Peinture Categories</h2>
        </div>

        {/*section card*/}

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 10,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
          style={styles.swiper}
        >
          {ImageList.map((item, index) => (
            <SwiperSlide
              key={index}
              style={{ ...styles.swiperSlide, backgroundImage: `url(${item.imageUrl})` }}
            >
              <img
                src={item.imageUrl}
                alt={`Slide ${index}`}
                style={styles.swiperSlideImg}
              />
              <div style={styles.textOverlay}>{item.category}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default HomeCategory;
