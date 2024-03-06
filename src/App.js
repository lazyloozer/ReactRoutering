import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import { Admin } from "./pages/Admin";
export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/registration" element={<Registration />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
