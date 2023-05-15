import "./App.css";
import "./css/bootstrap.css";

import HomePage from "./components/Navbar";
import LandingPage from "./components/Landingpage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Form from "./components/Form";
import Login from "./components/Login";
import About from "./components/About";

function App() {
  return (
    <div className="App ">
      <HomePage position="fixed" />
      <div>
        <BrowserRouter>
        <Routes>
          <Route path="/"  element={<LandingPage />} ></Route>
          <Route path="main"  element={<Main />} ></Route>
            <Route path="form" element={<Form />} ></Route>
            <Route path="login"  element={<Login />} ></Route>
            <Route path="about"  element={<About />} ></Route>
       </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
