import React, {useState, useEffect} from 'react';
import {allArticles} from './../../requests/articles'
import ArticleButton from '../Shared/ArticleButton';
import CardArticle from './CardArticle';
import InfiniteScroll from 'react-infinite-scroll-component';

const BodyArticles = (props) => {
  const {token} = props
  const [articles, setArticles] = useState([]);

  const [page, setPage] = useState(1);
  const [areThereMoreArticles, setAreThereMoreArticles] = useState(true);
  
  useEffect(() => {
    getArticles()
  }, [])

  useEffect(() => {
    getArticles()
  }, [page])

  const getArticles = async (pageSize = 5) => {
    try {
      let pageNumber = page;
      let response = await allArticles({pageSize,pageNumber}, token)
      if (page === 1) {
        setArticles(response.data.articles)
      } else {
        setArticles([...articles, ...response.data.articles])
      }
      response.data.articles.length === 0 || response.data.articles.length < pageSize ? setAreThereMoreArticles(false) : setAreThereMoreArticles(true)
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
          <InfiniteScroll
            dataLength={articles.length}
            next={() => setPage(page + 1)}
            hasMore={areThereMoreArticles}
            loader={<h4>Loading...</h4>}
          >
            {articles.map(art => <CardArticle key={art._id} data={art} />)}
          </InfiniteScroll>
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