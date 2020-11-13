import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/router'
import Head from 'next/head'
import Header from '../../../components/Shared/Header';
import FormArticles from '../../../components/Articles/FormArticles';
import { withAuthSync } from './../../../lib/auth';
import {showArticle} from './../../../requests/articles'

const EditArticle = withAuthSync(props => {
  const {token} = props
  const router = useRouter()
  const [article, setArticle] = useState({});

  useEffect(()=>{
    getArticle(router.query.id)
  }, [])

  const getArticle = async id => {
    try {
      let response = await showArticle(id, token)
      setArticle(response.data.article)
    } catch (error) {
      console.log(':: ERROR ::', error)
    }
  }

  return (
    <>
      <Head>
        <title>Omnix - Editar Articulo</title>
      </Head>
      <div className="main">
        <Header />
        <FormArticles article={article} token={token} />
      </div>
      <style jsx>{`
        :global(body) {
          background: #000;
          overflow-x: hidden;
        }
        .main {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          width: 100%;
          height: 100%;
          background: #000;
        }
      `}</style>
    </>
  )
})

export default EditArticle