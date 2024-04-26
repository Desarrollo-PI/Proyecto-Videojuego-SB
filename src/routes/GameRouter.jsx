import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

import LayoutLevel from '../game/pages/layout/LayoutLevel'
import LayoutMain from '../game/pages/layout/LayoutMain'

import LoginPage from '../game/pages/login/LoginPage'
import RegisterPage from '../game/pages/register/RegisterPage'
import ProfilePage from '../game/pages/profile/ProfilePage'
import LevelRouter from '../game/pages/levelRouter/LevelRouter'
import LevelTwoPage from '../game/pages/levelTwo/LevelTwoPage'
import LevelOnePage from '../game/pages/levelOne/LevelOnePage'
import LevelFourPage from '../game/pages/levelFour/LevelFourPage'

const GameRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutMain />}>
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path="/login" element={<LoginPage />} />\
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/level-router" element={<LevelRouter />} />
        </Route>
        <Route path="/level" element={<LayoutLevel />}>
          <Route path="" element={<Navigate replace to="/level-router" />} />
          <Route path="one" element={<LevelOnePage />} />
          <Route path="two" element={<LevelTwoPage />} />
          <Route path="four" element={<LevelFourPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default GameRouter
