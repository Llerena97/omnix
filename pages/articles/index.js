import React from 'react';
import Head from 'next/head'
import Header from '../../components/Shared/Header';
import BodyArticles from './../../components/Articles'
import { withAuthSync } from './../../lib/auth';

const Articles = withAuthSync(props => {
  const {token} = props

  return (
    <>
      <Head>
        <title>Omnix - Articulos</title>
      </Head>
      <div className="main">
        <Header />
        <BodyArticles token={token} />
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

export default Articles