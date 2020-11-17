import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import {logout} from './../../lib/auth'

const Header = () => {
  const [desplegableMenu, setDesplegableMenu] = useState(false)
  return (
    <>
      <nav className="main">
        <div>
          <a href="/home"><h4>Omnix</h4></a>
        </div>
        <div className="bar-desktop">
          <ul>
            <li><a href="/home">Inicio</a></li>
            <li><a href="/articles">Articulos</a></li>
            <li><a href="#" onClick={() => logout()}>Salir</a></li>
          </ul>
        </div>
        <div className="bar-mobile">
          <FontAwesomeIcon
            icon={desplegableMenu ? faTimes : faBars}
            size="2x"
            color={'#fb8909'}
            onClick={() => setDesplegableMenu(!desplegableMenu)}
          />
        </div>
      </nav>
      {desplegableMenu && <div className="cont-desplegable-menu">
        <ul>
          <li><a href="/home">Inicio</a></li>
          <li><a href="/articles">Articulos</a></li>
          <li><a href="#" onClick={() => logout()}>Salir</a></li>
        </ul>
      </div>}
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
        .bar-desktop {
          display: none;
        }
        .bar-mobile {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .cont-desplegable-menu {
          display: flex;
        }
        ul {
          padding: 0 1rem;
          text-align: center;
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
          .bar-desktop {
            display: flex;
          }
          .bar-mobile {
            display: none;
          }
          .cont-desplegable-menu {
            display: none;
          }
          ul {
            padding: 0 2rem;
          }
        }
      `}</style>
    </>
  )
}

export default Header