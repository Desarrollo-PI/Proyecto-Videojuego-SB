import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

import LoginPage from '../game/pages/login/LoginPage'
import RegisterPage from '../game/pages/register/RegisterPage'
import LevelRouter from '../game/pages/levelRouter/LevelRouter'
import LevelOnePage from '../game/pages/levelOne/LevelOnePage'
import LevelFourthPage from '../game/pages/levelFourth/LevelFourthPage'
import ProtectedRouter from './ProtectedRouter'

import { useAuth } from '../providers/auth/AuthProvider'

const GameRouter = () => {
  const { state } = useAuth()

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/level-router"
          element={
            <ProtectedRouter>
              <LevelRouter />
            </ProtectedRouter>
          }
        />
        <Route
          path="/level-one"
          element={
            <ProtectedRouter>
              <LevelOnePage />
            </ProtectedRouter>
          }
        />
        <Route
          path="/level-fourth"
          element={
            <ProtectedRouter>
              <LevelFourthPage />
            </ProtectedRouter>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default GameRouter
