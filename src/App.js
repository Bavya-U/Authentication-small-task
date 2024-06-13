import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistorPage from "./Pages/RegistorPage";
// import LoginPage from "./Autentication/Login/LoginPage";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<LoginPage/>} /> */}
        <Route path="/Registor" element={<RegistorPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
