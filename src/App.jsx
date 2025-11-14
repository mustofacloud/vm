import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ShowDetail from "./pages/ShowDetail";
import Success from "./pages/Success";
import AdminDashboard from "./pages/AdminDashboard";
import AdminCreateShow from "./pages/AdminCreateShow";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/show/:id" element={<ShowDetail />} />
        <Route path="/success" element={<Success />} />

        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/create" element={<AdminCreateShow />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
