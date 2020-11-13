import React, {useState, useEffect} from 'react';
import {allArticles} from './../../requests/articles'
import ArticleButton from '../Shared/ArticleButton';
import CardArticle from './CardArticle';

const BodyArticles = (props) => {
  const {token} = props
  const [articles, setArticles] = useState([]);
  
  useEffect(() => {
    getArticles()
  }, [])

  const getArticles = async () => {
    try {
      let response = await allArticles(token)
      setArticles(response.data.articles)
    } catch (error) {
      console.log(':: ERROR ::', error)
    }
  }

  return (
    <>
      <div className="main">
        <div className="cont-gretting-button">
          <ArticleButton />
        </div>
        <div className="cont-articles">
          {articles.map(art => <CardArticle key={art._id} data={art} />)}
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
          padding: 0 5%;
        }
        .cont-gretting-button {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-end;
          width: 100%;
          height: auto;
          padding: 1rem 0;
        }
        .cont-articles {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: auto;
        }
        @media screen and (min-width: 1024px) {
          .main {
            padding: 0 15%;
          }
        }
      `}</style>
    </>
  )
}
export default BodyArticles