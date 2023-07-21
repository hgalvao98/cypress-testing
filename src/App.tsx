import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SuccessPage from "./pages/SuccessPage/SuccessPage";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route element={<SuccessPage />} path="/success" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
