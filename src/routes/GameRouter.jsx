import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import ProtectedRouter from './ProtectedRouter'

const LayoutLevel = React.lazy(() => import('../game/pages/layout/LayoutLevel'))
const LayoutMain = React.lazy(() => import('../game/pages/layout/LayoutMain'))
const LoginPage = React.lazy(() => import('../game/pages/login/LoginPage'))
const RegisterPage = React.lazy(
  () => import('../game/pages/register/RegisterPage')
)
const ProfilePage = React.lazy(
  () => import('../game/pages/profile/ProfilePage')
)
const LevelRouter = React.lazy(
  () => import('../game/pages/levelRouter/LevelRouter')
)
const LevelOnePage = React.lazy(
  () => import('../game/pages/levelOne/LevelOnePage')
)
const LevelTwoPage = React.lazy(
  () => import('../game/pages/levelTwo/LevelTwoPage')
)
const LevelThreePage = React.lazy(
  () => import('../game/pages/levelThree/LevelThreePage')
)
const LevelFourPage = React.lazy(
  () => import('../game/pages/levelFour/LevelFourPage')
)

const GameRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LayoutMain />}>
            <Route path="/" element={<Navigate replace to="/login" />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route
              path="/profile"
              element={
                <ProtectedRouter>
                  <ProfilePage />
                </ProtectedRouter>
              }
            />
            <Route
              path="/level-router"
              element={
                <ProtectedRouter>
                  <LevelRouter />
                </ProtectedRouter>
              }
            />
          </Route>
          <Route path="/level" element={<LayoutLevel />}>
            <Route path="" element={<Navigate replace to="/level-router" />} />
            <Route
              path="one"
              element={
                <ProtectedRouter>
                  <LevelOnePage />
                </ProtectedRouter>
              }
            />
            <Route
              path="two"
              element={
                <ProtectedRouter>
                  <LevelTwoPage />
                </ProtectedRouter>
              }
            />
            <Route
              path="three"
              element={
                <ProtectedRouter>
                  <LevelThreePage />
                </ProtectedRouter>
              }
            />
            <Route
              path="four"
              element={
                <ProtectedRouter>
                  <LevelFourPage />
                </ProtectedRouter>
              }
            />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default GameRouter
