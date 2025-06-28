import React from "react";
import LandingPage from "./dashboard/landingPage";
import AtmosphericPropertiesCalculator from './components/AtmosphericPropertiesCalculator';
import QuizSystem from './components/module1/QuizSystem';
import Footer from "./components/footer";

function App() {
  return (
    <>
      <LandingPage />
      <AtmosphericPropertiesCalculator />
      <QuizSystem />
      <Footer />
    </>
  );
}

export default App;
