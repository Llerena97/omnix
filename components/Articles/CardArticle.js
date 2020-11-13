import React from 'react';

const CardArticle = props => {
  const {data} = props
  return (
    <>
      <div className="main">
        <img src={data.image} />
        <div className="cont-info">
          <h5>{data.title}</h5>
          <p>{data.shortDescription}</p>
          <a href={`/articles/${data._id}`}>Ver Articulo</a>
        </div>
      </div>
      <style jsx>{`
        .main {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          width: 100%;
          height: auto;
          border: solid 1px #eb455f;
          margin-bottom: 1rem;
          border-radius: 1rem;
        }
        .main img {
          width: 100%;
          height: 10rem;
          object-fit: cover;
          border-radius: 1rem 1rem 0 0;
        }
        .cont-info {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          width: 100%;
          height: 100%;
          padding: 1rem;
        }
        .cont-info h5 {
          font-family: Nunito;
          font-weight: 600;
          color: #fff;
        }
        .cont-info p {
          font-family: Nunito;
          color: #fff;
        }
        .cont-info a {
          font-family: Nunito;
          text-decoration: none;
          color: #eb455f;
        }
        @media screen and (min-width: 1024px) {
          .main {
            flex-direction: row;
          }
          .main img {
            width: 40%;
            height: 15rem;
            object-fit: cover;
            border-radius: 1rem 0 0 1rem;
          }
          .cont-info {
            width: 60%;
          }
        }
      `}</style>
    </>
  );
}
 
export default CardArticle;