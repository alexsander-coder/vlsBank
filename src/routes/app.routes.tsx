import React from "react";
import { Routes, Route } from 'react-router-dom';
import Layout from "../components/Layout";
import Graphics from "../pages/Graphics";
import List from "../pages/List";
import Home from "../pages/Home";

const AppRoutes: React.FC = () => (
  <Layout>
    <Routes>
      <Route path="/graphics" element={<Graphics />} />
      <Route path="/list/:type" element={<List />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </Layout>
);

export default AppRoutes;