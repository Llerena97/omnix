import React from 'react'

const NewArticleButton = (props) => {
  const {article} = props
  return (
    <>
      <a href={article ? `/articles/edit/${article}` : "/articles/new"} className="main">
        <p><span>+</span> {article ? 'Editar' : 'Nuevo'} Articulo</p>
      </a>
      <style jsx>{`
        .main {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 9rem;
          height: 3rem;
          background: linear-gradient(45deg, #eb455f, #fb8909);
          border-radius: 0.4rem;
          cursor: pointer;
        }
        .main p {
          color: #fff;
          font-family: Nunito;
          font-weight: 600;
          font-size: 1rem;
        }
        .main p span {
          font-weight: 700;
          font-size: 1.2rem;
        }
        .main:hover {
          background: linear-gradient(45deg, #fb8909, #eb455f);
        }
      `}</style>
    </>
  )
}

export default NewArticleButton