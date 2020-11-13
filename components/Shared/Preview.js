import React from 'react'

const Preview = () => {
  return (
    <>
      <div className="main">
        <h1>Omnix</h1>
      </div>
      <style jsx>{`
        .main {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100vw;
          height: 100vh;
          background: #000;
          z-index: 100;
        }
        .main h1 {
          color: #eb455f;
          font-family: Nunito;
        }
      `}</style>
    </>
  )
}

export default Preview