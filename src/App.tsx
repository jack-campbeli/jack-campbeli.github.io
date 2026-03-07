import { lazy, Suspense, useEffect, useLayoutEffect } from 'react'
import { matchRoutes, useLocation, useRoutes, type RouteObject } from 'react-router-dom'
import Layout from './components/Layout'

const HomePage = lazy(() => import('./pages/HomePage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ResumePage = lazy(() => import('./pages/ResumePage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

const siteTitle = 'Jack Campbell'

type AppRoute = RouteObject & {
  handle: {
    title: string
  }
}

const routes: AppRoute[] = [
  {
    path: '/',
    element: <HomePage />,
    handle: { title: 'Welcome' },
  },
  {
    path: '/about',
    element: <AboutPage />,
    handle: { title: 'About' },
  },
  {
    path: '/resume',
    element: <ResumePage />,
    handle: { title: 'Resume' },
  },
  {
    path: '*',
    element: <NotFoundPage />,
    handle: { title: '404 Not Found' },
  },
]

export default function App() {
  const location = useLocation()
  const routeElement = useRoutes(routes)

  const resetScrollPosition = () => {
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    window.scrollTo(0, 0)
    document.querySelector('main')?.scrollIntoView({ block: 'start' })
  }

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  useLayoutEffect(() => {
    resetScrollPosition()

    const frameId = window.requestAnimationFrame(() => {
      resetScrollPosition()
    })
    const timeoutId = window.setTimeout(() => {
      resetScrollPosition()
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      window.clearTimeout(timeoutId)
    }
  }, [location.pathname])

  useEffect(() => {
    const routeMatches = matchRoutes(routes, location)
    const matchedRoute = routeMatches?.[routeMatches.length - 1]?.route as
      | AppRoute
      | undefined
    const routeTitle = matchedRoute?.handle.title ?? siteTitle

    document.title =
      routeTitle === siteTitle ? siteTitle : `${routeTitle} | ${siteTitle}`
  }, [location])

  return (
    <Layout>
      <Suspense fallback={<div className="route-loader" aria-hidden="true" />}>
        {routeElement}
      </Suspense>
    </Layout>
  )
}
