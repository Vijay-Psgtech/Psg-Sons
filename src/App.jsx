import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from ".";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Header from "./components/Header";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route
          path="/privacy-policy"
          element={
            <>
              <Header />
              <PrivacyPolicy />
            </>
          }
        />
      </Routes>
    </Router>
  );
}
