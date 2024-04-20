import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

import LoginPage from '../game/pages/login/LoginPage'
import RegisterPage from '../game/pages/register/RegisterPage'
import LevelRouter from '../game/pages/levelRouter/LevelRouter'
import LevelOnePage from '../game/pages/levelOne/LevelOnePage'
import LevelFourthPage from '../game/pages/levelFourth/LevelFourthPage'
import ProtectedRouter from './ProtectedRouter'
import LayoutAuthForm from '../game/pages/layout/LayoutAuthForm'

import { useAuth } from '../providers/auth/AuthProvider'

const GameRouter = () => {
  const { state } = useAuth()

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route
          path="/login"
          element={
            <LayoutAuthForm>
              <LoginPage />
            </LayoutAuthForm>
          }
        />
        <Route
          path="/register"
          element={
            <LayoutAuthForm>
              <RegisterPage />
            </LayoutAuthForm>
          }
        />
        <Route
          path="/level-router"
          element={
            <LayoutAuthForm>
              <LevelRouter />
            </LayoutAuthForm>
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
