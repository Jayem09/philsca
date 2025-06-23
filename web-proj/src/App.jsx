import React from "react";
import LandingPage from "./dashboard/landingPage";
import AtmosphericPropertiesCalculator from './components/AtmosphericPropertiesCalculator';
import Quizsystem from './components/module1/QuizSystem';

function App() {
  return (
    <>
      <LandingPage />
      <AtmosphericPropertiesCalculator />
      <Quizsystem />
    </>
  );
}

export default App;
