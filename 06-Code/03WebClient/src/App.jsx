import { Routes, Route } from "react-router-dom";
import HomeRoutes from "./routes/home.routes";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<HomeRoutes />} />
      </Routes>
    </div>
  );
}

export default App;
