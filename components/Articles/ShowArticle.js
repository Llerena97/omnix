import React from 'react';
import ArticleButton from './../Shared/ArticleButton'

const ShowArticle = (props) => {
  const {article} = props
  return (
    <>
      <div className="main">
        <img src={article.image} />
        <h3>{article.title}</h3>
        <p>{article.largeDescription}</p>
        <div className="cont-edit">
          <ArticleButton article={article._id} />
        </div>
      </div>
      <style jsx>{`
        .main {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          padding: 3%;
        }
        .main img {
          width: 100%;
          height: 12rem;
          object-fit: cover;
        }
        .main h3 {
          color: #fff;
          font-family: Nunito;
          font-size: 2rem;
          font-weight: 700;
        }
        .main p {
          color: #fff;
          font-family: Nunito;
          font-size: 1rem;
          text-align: left;
        }
        .cont-edit {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          width: 100%;
          margin-top: 2rem;
        }
        @media screen and (min-width: 1024px) {
          .main {
            padding: 3% 15%;
          }
        }
      `}</style>
    </>
  );
}
 
export default ShowArticle;