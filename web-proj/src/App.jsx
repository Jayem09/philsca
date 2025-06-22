
import LandingPage from './dashboard/landingPage';
import React from "react";
import ReactDOM from "react-dom";
import PdfFrame from "./components/pdfFrame";
import Quiz from './components/Quiz';
import AtmosphericPropertiesCalculator from './components/AtmosphericPropertiesCalculator';
import Quizsystem from './components/module1/Quizsystem';
function App() {
  return (
    <>
    <LandingPage /> 
    <AtmosphericPropertiesCalculator />
    <Quizsystem />
    </>
  );
}

export default App
