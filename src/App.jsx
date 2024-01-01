import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Signup from './Pages/Signup/Signup'
import { useSelector } from "react-redux";



function App() {
  const user = useSelector(state => state.user.user)
  console.log(user);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={user ?  <Home /> : <Login/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
