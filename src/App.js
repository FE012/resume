import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Headers from "./components/Headers";
import Home from "./page/Home";
import Resume from "./page/Resume";

function App() {
  return (
    <BrowserRouter>
      <Headers></Headers>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
