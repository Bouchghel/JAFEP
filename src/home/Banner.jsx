import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';

const ImageList = [
  { imageUrl: "/banner/01.jpeg",text:"Jafep est présente sur le marché depuis 1965" },
  { imageUrl: "/banner/02.jpeg",text:"Vaste gamme de lignes et produits" },
  { imageUrl: "/banner/03.jpeg",text:"Installations modernes avec plus de 40.000 mètres carrés de superficie" },
  { imageUrl: "/banner/04.jpeg",text:"Nous fabriquons plus de 30.000 tonnes de peinture par an" },
  { imageUrl: "/banner/05.jpeg" ,text:"Système de Qualité et Engagement Environnemental (ISO 9001 et ISO 14001)"},
  { imageUrl: "/banner/06.jpeg" ,text:"Une grande expérience en exportation et implantation de nouveaux marchés"}
];

const Banner = () => {
  return (
      <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
              delay: 2500,
              disableOnInteraction: false,
          }}
          pagination={{
              clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
      >
          {ImageList.map((item, index) => (
              <SwiperSlide key={index} style={{ position: 'relative' }}>
                  <img src={item.imageUrl} alt={`Slide ${index}`} style={{ width: '100%', height: '600px', objectFit: 'cover' }}/>
                  <div style={styles.textOverlay}>
                      <h2 style={styles.text}>{item.text}</h2>
                  </div>
              </SwiperSlide>
          ))}
      </Swiper>
  );
}

const styles = {
  textOverlay: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: 'white',
      textAlign: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0)',
      padding: '20px',
      borderRadius: '10px'
  },
  text: {
      fontSize: '40px',
      color:'rgba(50,52,58,55)'
  }
};

export default Banner;
