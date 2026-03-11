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
    const previousHtmlScrollBehavior = document.documentElement.style.scrollBehavior
    const previousBodyScrollBehavior = document.body.style.scrollBehavior

    document.documentElement.style.scrollBehavior = 'auto'
    document.body.style.scrollBehavior = 'auto'
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })

    window.requestAnimationFrame(() => {
      document.documentElement.style.scrollBehavior = previousHtmlScrollBehavior
      document.body.style.scrollBehavior = previousBodyScrollBehavior
    })
  }

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  useLayoutEffect(() => {
    resetScrollPosition()
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
