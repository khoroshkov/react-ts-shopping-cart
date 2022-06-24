import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { ROUTES } from './constants/routes'
import { Navbar } from './components'
import { ShoppingCartProvider } from './context/shoppingCartContext'

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          {ROUTES.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Container>
    </ShoppingCartProvider>
  )
}

export default App
