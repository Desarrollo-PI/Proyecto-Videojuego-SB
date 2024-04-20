import './App.css'

import RootProvider from './providers/RootProvider'
import GameRouter from './routes/GameRouter'

function App() {
  return (
    <RootProvider>
      <GameRouter />
    </RootProvider>
  )
}

export default App
