import "./App.css";
import "./css/bootstrap.css";

import HomePage from "./components/HomePage";
// import Slides from "./components/Slides";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Form from "./components/Form"
import Login from "./components/Login";

function App() {
  return (
    <div className="App ">
      <HomePage position="fixed" />
      <div>
        <BrowserRouter>
        <Routes>
          <Route path="/"  element={<HomePage />} ></Route>
          <Route path="main"  element={<Main />} ></Route>
          <Route path="form"  element={<Form />} ></Route>
          <Route path="login"  element={<Login />} ></Route>
       </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
