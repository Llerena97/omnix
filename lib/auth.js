import { useEffect } from 'react';
import Router from 'next/router';
import nextCookie from 'next-cookies';
import cookie from 'js-cookie';

export const login = (data) => {
  cookie.set('tokenOmnix', data.token)
  Router.push('/home')
}

export const checkSession = () => {
  let isLogged = cookie.get('tokenOmnix')
  return isLogged ? true : false
}

export const auth = ctx => {
  const { tokenOmnix } = nextCookie(ctx)

  // If there's no token, it means the user is not logged in.
  if (!tokenOmnix) {
    if (typeof window === 'undefined') {
      ctx.res.writeHead(302, { Location: '/' })
      ctx.res.end()
    } else {
      Router.push('/')
    }
  }
  return tokenOmnix
}

export const logout = () => {
  cookie.remove('tokenOmnix')
  // to support logging out from all windows
  window.localStorage.setItem('logout', Date.now())
  Router.push('/')
}

export const withAuthSync = WrappedComponent => {
  const Wrapper = props => {
    const syncLogout = event => {
      if (event.key === 'logout') {
        Router.push('/')
      }
    }

    useEffect(() => {
      window.addEventListener('storage', syncLogout)

      return () => {
        window.removeEventListener('storage', syncLogout)
        window.localStorage.removeItem('logout')
      }
    }, [])

    return <WrappedComponent {...props} />
  }

  Wrapper.getInitialProps = async ctx => {
    const token = auth(ctx)

    const componentProps =
      WrappedComponent.getInitialProps &&
      (await WrappedComponent.getInitialProps(ctx))

    return { ...componentProps, token }
  }

  return Wrapper
}