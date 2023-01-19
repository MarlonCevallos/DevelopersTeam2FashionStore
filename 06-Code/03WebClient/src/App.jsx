import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import HomeRoutes from "./routes/home.routes";
import PublicApiRoutes from "./routes/publicApi.routes";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<HomeRoutes />} />
        <Route path="/publicapi/*" element={<PublicApiRoutes />} />
      </Routes>
    </div>
  );
}

export default App;
