import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="main">
        <p>© {new Date().getFullYear()} Omnix | Todos los derechos reservados.</p>
      </div>
      <style jsx>{`
        .main {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100vw;
          height: 4rem;
          background: #000;
          border-top: 2px solid #eb455f;
        }
        .main p {
          color: #fff;
          font-family: Nunito;
        }
      `}</style>
    </>
  )
}

export default Footer