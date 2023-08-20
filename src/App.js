
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home"
import ErrorPage from "./pages/ErrorPage";
import Header from "./components/Header";
import Footer from "./components/Footer"


function App() {

  return (

    <div className="App">

    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  </div>
  );
}

export default App;
