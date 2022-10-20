import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Navbar from './components/NavBar'
import Register from './components/Register'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/register" element={<Register />}></Route>
        <Route
          exact
          path="/dashboard"
          element={
            <div>
              <Navbar />
              <Dashboard />{' '}
            </div>
          }
        ></Route>
        {/* <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/dashboard">
          <Navbar />
          <Dashboard />
        </Route> */}
      </Routes>
    </BrowserRouter>
  )
}
export default App
