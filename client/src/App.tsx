import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";

export default function App() {
  const location = useLocation();
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}
