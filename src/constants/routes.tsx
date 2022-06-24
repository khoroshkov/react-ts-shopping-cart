import { RouteObject } from 'react-router-dom'
import { About, Home, Store } from '../pages'

export const ROUTES: RouteObject[] = [
  { path: '/', element: <Home /> },
  { path: '/store', element: <Store /> },
  { path: '/about', element: <About /> }
]
