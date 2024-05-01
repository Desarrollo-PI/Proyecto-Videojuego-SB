import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

import LayoutLevel from '../game/pages/layout/LayoutLevel'
import LayoutMain from '../game/pages/layout/LayoutMain'

import LoginPage from '../game/pages/login/LoginPage'
import RegisterPage from '../game/pages/register/RegisterPage'
import ProfilePage from '../game/pages/profile/ProfilePage'
import LevelRouter from '../game/pages/levelRouter/LevelRouter'
import LevelTwoPage from '../game/pages/levelTwo/LevelTwoPage'
import LevelThreePage from '../game/pages/levelThree/LevelThreePage'
import LevelOnePage from '../game/pages/levelOne/LevelOnePage'
import LevelFourPage from '../game/pages/levelFour/LevelFourPage'

import ProtectedRouter from './ProtectedRouter'

const GameRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutMain />}>
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path="/login" element={<LoginPage />} />\
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
    </BrowserRouter>
  )
}

export default GameRouter
