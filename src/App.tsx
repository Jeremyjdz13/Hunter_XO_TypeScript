import { Routes, Route } from 'react-router-dom'
import { NotFound } from './pages/NotFound'
import './styles/globals.css'
import { AuthRoutes } from './routes/AuthRoutes'
import { Home } from './pages/Home'
import { memo } from 'react'

function App() {

  return (
    <>
      <Routes>
        <Route path='/*' element={<Home />}/>
        <Route path='*' element={<NotFound />} />
        <Route path="/auth/*" element={<AuthRoutes />} />
      </Routes>
    </>
  )
}

export default App
