import React, {useState} from 'react'
import {login} from './../../lib/auth'
import {signIn} from './../../requests/users'

const Login = (props) => {
  const {loginView, setLoginView} = props
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      let response = await signIn({user})
      login(response.data)
    } catch (error) {
      alert('Usuario y/o contraseña incorrectos.')
      console.log(':: ERROR ::', error)
    }
  }

  return (
    <>
      <div className="main">
        <form onSubmit={handleSubmit}>
          <div className="box-form">
            <label htmlFor="email">Correo Electronico:</label>
            <input type="email" name="email" placeholder="ejemplo@omnix.co" required onChange={handleChange} />
          </div>
          <div className="box-form">
            <label htmlFor="password">Contraseña:</label>
            <input type="password" name="password" required onChange={handleChange} />
          </div>
          <input type="submit" value="Ingresar" className="submit" />
          <div className="box-register">
            <p>¿No tienes cuenta? <span onClick={() => setLoginView(!loginView)}>Crea una.</span></p>
          </div>
        </form>
      </div>
      <style jsx>{`
        .main {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100vw;
          height: calc(100vh - 4rem);
          background: #000;
          padding: 5%;
        }
        form {
          width: 100%;
          height: auto;
        }
        .box-form {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          width: 100%;
          height: auto;
          margin: 1rem 0;
        }
        .box-form label, .box-form input {
          font-family: Nunito;
          font-size: 1rem;
          color: #fff;
        }
        .box-form input::placeholder {
          opacity: 0.6;
          font-size: 0.9rem;
        }
        .submit {
          width: 100%;
          padding: 0.5rem;
          background: linear-gradient(45deg, #eb455f, #fb8909);
          color: #fff;
          border-radius: 1rem;
          border: none;
          outline: none;
          font-family: Nunito;
          font-size: 1rem;
          font-weight: 700;
          text-transform: capitalize;
          cursor: pointer;
        }
        .box-register {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          width: 100%;
          color: #fff;
          font-family: Nunito;
          font-size: 1rem;
        }
        .box-register span {
          font-weight: 700;
          cursor: pointer;
        }
        @media screen and (min-width: 1024px) {
          form {
            width: 40rem;
            height: auto;
          }
        }
      `}</style>
    </>
  )
}

export default Login