import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';

const ImageList = [
  { imageUrl: "/banner/01.jpg",text:"Jafep est présente sur le marché depuis 1965" },
  { imageUrl: "/banner/02.jpg",text:"Vaste gamme de lignes et produits" },
  { imageUrl: "/banner/03.jpg",text:"Installations modernes avec plus de 40.000 mètres carrés de superficie" },
  { imageUrl: "/banner/04.jpg",text:"Nous fabriquons plus de 30.000 tonnes de peinture par an" },
  { imageUrl: "/banner/05.jpg" ,text:"Système de Qualité et Engagement Environnemental (ISO 9001 et ISO 14001)"},
  { imageUrl: "/banner/06.jpeg" ,text:"Une grande expérience en exportation et implantation de nouveaux marchés"}
];

const Banner = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    >
      {ImageList.map((item, index) => (
        <SwiperSlide key={index} style={{ position: 'relative' }}>
          <img src={item.imageUrl} alt={`Slide ${index}`} className="img-fluid" style={{ width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'cover' }} />
          <div className="position-absolute top-50 start-50 translate-middle p-3 rounded" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', opacity: 0.8 }}>
            <h2 className="text-dark">{item.text}</h2>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Banner;
