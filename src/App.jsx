import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WeatherDashboard from "./components/WeatherDashboard";
import WeatherDetail from "./components/WeatherDetail";
import WeeklyForecast from "./components/Forecast";
import OutfitRecommendation from "./components/OutfitRecommendation";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
// import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import { formatPostcssSourceMap } from "vite";

function App() {
  return (
    <Router>
      <Header />
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<WeatherDashboard />} />
          <Route path="/detail" element={<WeatherDetail />} />
          <Route path="/weekly" element={<WeeklyForecast />} />
          <Route path="/outfit" element={<OutfitRecommendation />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
