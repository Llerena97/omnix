import React from 'react';
import Head from 'next/head'
import BodyHome from '../components/Home';
import Footer from '../components/Shared/Footer';
import Header from '../components/Shared/Header';
import { withAuthSync } from './../lib/auth';

const Home = withAuthSync(props => {
  return (
    <>
      <Head>
        <title>Omnix - Home</title>
      </Head>
      <div className="main">
        <Header />
        <BodyHome />
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