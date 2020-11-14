import React from 'react';
import SwiperCore, {Pagination, Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import CardArticle from '../Articles/CardArticle';
SwiperCore.use([Pagination, Autoplay]);

const BodyHome = props => {
  const {articles} = props
  return (
    <>
      <div className="main">
        <h5>Ultimos Articulos</h5>
        <div style={{width: '80%', height: '70%'}}>
          <Swiper
            pagination={{ clickable: true }}
            spaceBetween={500}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true
            }}
          >
            {articles.map(art => <SwiperSlide key={art._id} ><div style={{padding: '2rem 1rem'}}><CardArticle data={art}/></div></SwiperSlide>)}
          </Swiper>
        </div>
      </div>
      <style jsx>{`
        .main {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: calc(100vh - 9rem);
          background: #000;
        }
        .main h5{
          color: #fff;
          font-family: Nunito;
          font-size: 2rem;
          font-weight: 600;
        }
      `}</style>
    </>
  )
}
export default BodyHome