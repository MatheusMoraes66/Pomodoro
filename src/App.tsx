import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from './page/Home'
import UserProvider from './contexts/userContext'
import MessageProvider from './contexts/useMessage'
import Pomodore from "./page/Pomodore";



function App() {
  return (
    <div className='App'>
      <MessageProvider>
        <UserProvider>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="pomodore" element={<Pomodore />} />
            </Route>
          </Routes>
        </UserProvider>
      </MessageProvider>
    </div>
  )
}

export default App
