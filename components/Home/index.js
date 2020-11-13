import React from 'react';

const BodyHome = props => {
  const {articles} = props
  return (
    <>
      <div className="main">
        <h2>Inicio</h2>
      </div>
      <style jsx>{`
        .main {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: calc(100vh - 9rem);
          background: #000;
        }
        .main h2{
          color: #fff;
        }
      `}</style>
    </>
  )
}
export default BodyHome