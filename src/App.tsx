import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Teachers from "./pages/Teachers";
import Favorites from "./pages/Favorites";
import Layout from "./components/Layout";
import PrivateRoute from "./auth/PrivatRoute";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/favorites" element={
          <PrivateRoute>
          <Favorites />
          </PrivateRoute>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
