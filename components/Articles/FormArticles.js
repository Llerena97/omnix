import React, {useState, useEffect, useRef} from 'react';
import { useRouter } from 'next/router'
import {createArticle, updateArticle} from './../../requests/articles'

import iconCamera from './../../assets/images/camera-tmp.png';
import bannerTmp from './../../assets/images/banner-tmp.png';

const FormArticles = props => {
  const {article, token} = props
  const router = useRouter()
  const bannerRef = useRef(null)
  const [title, setTitle] = useState('')
  const [bannerImg, setBannerImg] = useState('')
  const [shortDescription, setShortDescription] = useState('')
  const [largeDescription, setLargeDescription] = useState('')

  useEffect(() => {
    if (article) {
      setTitle(article.title)
      setBannerImg(article.image)
      setShortDescription(article.shortDescription)
      setLargeDescription(article.largeDescription)
    }
  }, [props])


  const assignImage = () => {
    const reader = new FileReader();
    reader.onload = e => {
      let image = ''
      const allowedFiles = ['png', 'jpg', 'jpeg']
      const splitName = bannerRef.current.files[0].name.split('.')
      if (!allowedFiles.includes(splitName.pop())) return alert('Tipo de archivo no permitido!')
      image =  e.target.result
      setBannerImg(image)
    }
    if (bannerRef.current.files.length > 0) {
      let dataUrl = reader.readAsDataURL(bannerRef.current.files[0])
    }
  }

  const submit = async () => {
    const params = {
      title,
      image: bannerImg,
      shortDescription,
      largeDescription
    }
    // Temporary validation --
    let validation = Object.values(params).map(e => e ? true : false)
    if (validation.includes(false)) return alert('Todos los campos son requeridos')
    // --
    if (!article) {
      try {
        let response = await createArticle({article: params}, token)
        router.push(`/articles/${response.data.article._id}`)
      } catch (error) {
        console.log(':: ERROR ::', error)
      }
    } else {
      try {
        let response = await updateArticle(article._id, {article: params}, token)
        router.push(`/articles/${response.data.article._id}`)
      } catch (error) {
        console.log(':: ERROR ::', error)
      }
    }
  }

  return (
    <>
      <div className="main">
        <h3>{article ? 'Editar' : 'Nuevo'} Articulo</h3>
        <div className="cont-banner" onClick={() => bannerRef.current.click()}>
          <img src={bannerImg ? bannerImg : bannerTmp} className="banner-tmp" />
          {bannerImg ? <img src={iconCamera} className="camera-tmp" /> : null}
          <input type="file" style={{display: 'none'}} ref={bannerRef} onChange={() => assignImage()} />
        </div>
        <div className="cont-form">
          <div className="box-form">
            <label>Titulo</label>
            <input type="text" value={title} maxLength="70" onChange={e => setTitle(e.target.value)} />
          </div>
          <div className="box-form">
            <label>Descripcion breve</label>
            <textarea rows="2" maxLength="160" value={shortDescription} onChange={e => setShortDescription(e.target.value)}></textarea>
          </div>
          <div className="box-form">
            <label>Descripcion completa</label>
            <textarea rows="5" value={largeDescription} onChange={e => setLargeDescription(e.target.value)}></textarea>
          </div>
        </div>
        <button onClick={() => submit()}>{article ? 'Actualizar' : 'Guardar'} Articulo</button>
      </div>
      <style jsx>{`
        .main {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          padding: 0 3%;
        }
        .main h3 {
          color: #fff;
          font-family: Nunito;
          font-size: 2rem;
        }
        .cont-banner {
          width: 100%;
          height: 15rem;
          position: relative;
          cursor: pointer;
        }
        .banner-tmp {
          width: 100%;
          height: 100%;
          position: absolute;
          object-fit: cover;
        }
        .camera-tmp {
          width: 2rem;
          height: 1.5rem;
          position: absolute;
          bottom: 0.5rem;
          right: 0.5rem;
        }
        .cont-form {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: auto;
        }
        .cont-form .box-form {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          width: 100%;
          height: auto;
          margin: 1rem 0;
        }
        textarea, input, .box-form label, .main button {
          color: #fff;
          font-size: 1rem;
          font-family: Nunito;
          padding: 0.2rem;
          resize: none;
        }
        .cont-form .box-form:last-child textarea {
          height: 8rem;
        }
        .main button {
          width: 15rem;
          height: auto;
          outline: none;
          border: none;
          margin: 1rem 0 2rem 0;
          border-radius: 1rem;
          padding: 0.5rem;
          font-weight: 700;
          background: linear-gradient(45deg, #eb455f, #fb8909);
          cursor: pointer;
        }
        .main button:hover {
          background: linear-gradient(45deg, #fb8909, #eb455f);
        }
        @media screen and (min-width: 1024px) {
          .main {
            padding: 0 15%;
          }
        }
      `}</style>
    </>
  )
}
export default FormArticles