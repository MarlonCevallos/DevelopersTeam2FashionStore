import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import PublicApi from "../pages/PublicApi";
import AbstractPage from "../pages/AbstractPage";
import InfoClientPage from "../pages/InfoClientPage";
import "../css/allPagesStyle.css";
import ApiPublicUrl from "../pages/ApiPublicUrl";

const PublicApiRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicApi />} />
      <Route path="/abstract" element={<AbstractPage />} />
      <Route path="/client-info" element={<InfoClientPage />} />
      <Route path="/url" element={<ApiPublicUrl />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default PublicApiRoutes;
