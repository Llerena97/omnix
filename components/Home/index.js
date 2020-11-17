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
        <div className="cont-carousel">
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
            {articles.map(art => <SwiperSlide key={art._id} ><div className="card"><CardArticle data={art}/></div></SwiperSlide>)}
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
        .cont-carousel {
          width: 80%;
          height: 80%;
          background: #000;
        }
        .card {
          background: #000;
          padding: 1rem;
        }
        @media screen and (min-width: 1024px) {
          .cont-carousel {
            width: 80%;
            height: 70%;
          }
          .card {
            padding: 1rem;
          }
        }
      `}</style>
    </>
  )
}
export default BodyHome