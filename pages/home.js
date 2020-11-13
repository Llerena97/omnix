import React, {useState, useEffect} from 'react';
import Head from 'next/head'
import BodyHome from '../components/Home';
import Footer from '../components/Shared/Footer';
import Header from '../components/Shared/Header';
import { withAuthSync } from './../lib/auth';
import {lastArticles} from './../requests/articles'

const Home = withAuthSync(props => {
  const {token} = props
  const [articles, setArticles] = useState([]);

  useEffect(()=>{
    getArticles()
  }, [])

  const getArticles = async () => {
    try {
      let response = await lastArticles(token)
      setArticles(response.data.articles)
    } catch (error) {
      console.log(':: ERROR ::', error)
    }
  }

  return (
    <>
      <Head>
        <title>Omnix - Home</title>
      </Head>
      <div className="main">
        <Header />
        <BodyHome articles={articles} />
        <Footer />
      </div>
      <style jsx>{`
        .main {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          height: 100%;
          background: #000;
          overflow-x: hidden;
        }
      `}</style>
    </>
  )
})

export default Home