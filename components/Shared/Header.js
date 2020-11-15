import React from 'react'
import {logout} from './../../lib/auth'

const Header = () => {
  return (
    <>
      <nav className="main">
        <div>
          <a href="/home"><h4>Omnix</h4></a>
        </div>
        <div>
          <ul>
            <li><a href="/home">Inicio</a></li>
            <li><a href="/articles">Articulos</a></li>
            <li><a href="#" onClick={() => logout()}>Salir</a></li>
          </ul>
        </div>
      </nav>
      <style jsx>{`
        .main {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          height: 5rem;
          background: #000;
          border-bottom: 2px solid #eb455f;
          padding: 0 2rem;
        }
        .main h4 {
          font-family: Nunito;
          font-weight: 700;
          color: #fb8909;
        }
        ul {
          padding: 0 1rem;
        }
        ul li a {
          list-style: none;
          padding: 0 1rem;
          font-size: 1rem;
          font-weight: 600;
          text-transform: capitalize;
          cursor: pointer;
          color: #fb8909;
        }
        ul li a:hover {
          color: #eb455f;
        }
        @media screen and (min-width: 1024px) {
          ul {
            padding: 0 2rem;
          }
        }
      `}</style>
    </>
  )
}

export default Header