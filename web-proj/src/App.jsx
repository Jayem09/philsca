import React from "react";
import LandingPage from "./dashboard/landingPage";
import AtmosphericPropertiesCalculator from './components/AtmosphericPropertiesCalculator';
import QuizSystem from './components/module1/QuizSystem';

function App() {
  return (
    <>
      <LandingPage />
      <AtmosphericPropertiesCalculator />
      <QuizSystem />
    </>
  );
}

export default App;
