import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/router'
import Head from 'next/head'
import Login from '../components/Login'
import Register from '../components/Register';
import Footer from '../components/Shared/Footer';
import Preview from '../components/Shared/Preview';
import {checkSession} from './../lib/auth'

const Main = () => {
  const router = useRouter()
  const [loginView, setLoginView] = useState(true);
  const [preview, setPreview] = useState(true);

  useEffect(() => {
    verifySession()
  }, [])

  const verifySession = async () => {
    let response = await checkSession()
    if (response) {
      return router.push('/home')
    }
    setPreview(response)
  }

  return (
    <>
      {preview ? <Preview /> : null}
      <Head>
        <title>Omnix</title>
      </Head>
      <div className="main">
        { loginView ? 
          <Login loginView={loginView} setLoginView={setLoginView} /> 
        : <Register loginView={loginView} setLoginView={setLoginView} />
        }
        <Footer />
      </div>
      <style jsx>{`
        .main {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          width: 100vw;
          height: 100vh;
          background: #000;
          overflow: hidden;
        }
      `}</style>
    </>
  )
}
export default Main