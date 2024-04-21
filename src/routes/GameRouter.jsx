import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

import LoginPage from '../game/pages/login/LoginPage'
import RegisterPage from '../game/pages/register/RegisterPage'
import ProfilePage from '../game/pages/profile/ProfilePage'
import LevelRouter from '../game/pages/levelRouter/LevelRouter'
import LevelTwoPage from '../game/pages/levelTwo/LevelTwoPage'
import LevelOnePage from '../game/pages/levelOne/LevelOnePage'
import LevelFourthPage from '../game/pages/levelFourth/LevelFourthPage'
import LayoutAuthForm from '../game/pages/layout/LayoutMain'

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
          path="/profile"
          element={
            <LayoutAuthForm>
              <ProfilePage />
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
        <Route path="/level-one" element={<LevelOnePage />} />
        <Route path="/level-two" element={<LevelTwoPage />} />
        <Route path="/level-fourth" element={<LevelFourthPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default GameRouter
