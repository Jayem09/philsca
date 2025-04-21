import React, { useState } from 'react';
import './Quiz.css'; // Importing the Quiz styles
import { FaTimes } from 'react-icons/fa'; // Importing the X icon
import QuizReview from './QuizReview';

const quizQuestions = [
  {
    question: "What is the only planet in the solar system that can sustain life?",
    options: ["venus", "mars", "earth", "jupiter"],
    answer: "earth"
  },
  {
    question: "He is the father of aeronautics and defines the four forces of flight.",
    options: ["Sir George Cayley", "Jacques Charles", "Montgolfier Brothers", "Wright Brothers"],
    answer: "Sir George Cayley"
  },
  {
    question: "What are the four forces of flight?",
    options: ["pull, push, down, and up", "lift, thrust, drag and weight", "pull, lift, drug and up", "push, weight, thrust and down"],
    answer: "lift, thrust, drag and weight"
  },
  {
    question: "What is the mass of a unit volume of a material substance?",
    options: ["pressure", "density", "temperature", "velocity"],
    answer: "density"
  },
  {
    question: "What is the measure of hotness or coldness of a substance?",
    options: ["pressure", "density", "temperature", "velocity"],
    answer: "temperature"
  },
  {
    question: "What is the vector measurement of the rate and direction of motion?",
    options: ["pressure", "density", "temperature", "velocity"],
    answer: "velocity"
  },
  {
    question: "What is the scalar quantity that indicates the rate motion distance per time?",
    options: ["acceleration", "velocity", "speed", "density"],
    answer: "speed"
  },
  {
    question: "What is the temperature at 3,000 m?",
    options: ["268.7 K", "288.2 K", "273.2 K", "245.1 K"],
    answer: "268.7 K"
  },
  {
    question: "Calculate the density at 3,000 m?",
    options: ["0.9090 kg/m³", "0.8800 kg/m³", "0.9192 kg/m³", "0.9222 kg/m³"],
    answer: "0.9090 kg/m³"
  },
  {
    question: "Calculate the temperature density and pressure at 8,000 m?",
    options: ["268.2 K, 0.6398 kg/m³, 35,577.7546 Pa", "268.7 K, 0.5248 kg/m³, 35,577.7546 Pa", "236.2 K, 0.5248 kg/m³, 35,577.7546 Pa", "236.2 K, 0.5248 kg/m³, 40,376.7357 Pa"],
    answer: "236.2 K, 0.5248 kg/m³, 35,577.7546 Pa"
  },
  {
    question: "What is the fundamental principle in fluid mechanics that expresses the conservation of mass?",
    options: ["continuity equation", "density", "velocity", "pressure"],
    answer: "continuity equation"
  },
  {
    question: "It represents the amount of mass passing through a given cross-section per unit time.",
    options: ["mass flow rate", "density", "velocity", "pressure"],
    answer: "mass flow rate"
  },
  {
    question: "What are the sound waves that travel through the air at definite speed?",
    options: ["speed of sound", "microwave", "radio wave", "pressure wave"],
    answer: "speed of sound"
  },
  {
    question: "Universal gas constant is equal to 287 J•K/kg",
    options: ["true", "false"],
    answer: "true"
  },
  {
    question: "It is the ratio of the speed of the aircraft to the speed of sound that determines the magnitude of many of the compressibility effects.",
    options: ["Mach number", "lapse rate", "speed of sound", "universal gas constant"],
    answer: "Mach number"
  },
  {
    question: "What is the lowering of fluid pressure in regions where the flow velocity is increased?",
    options: ["Bernoulli effect", "continuity equation", "Mach number", "mass flow"],
    answer: "Bernoulli effect"
  },
  {
    question: "It is a large tube with air moving inside.",
    options: ["wind tunnel", "test tube", "microscope", "barometer"],
    answer: "wind tunnel"
  },
  {
    question: "At the exit the flow has a Mach number of 0.5 and a temperature of 277K. What is the velocity?",
    options: ["166.8072 m/s", "333.6145 m/s", "134.3231 m/s", "173.2159 m/s"],
    answer: "166.8072 m/s"
  },
  {
    question: "Given the height of 1,524 m with a total pressure of 87,046 Pa, what is the true airspeed of an airplane?",
    options: ["72.165 m/s", "68.268 m/s", "52.534 m/s", "83.733 m/s"],
    answer: "72.165 m/s"
  },
  {
    question: "Consider a flow in a tube that is compressible with a density at the intake of 1 kg/m³. The tube has an A2/A1 of 0.69 and a mass flow rate is 4.0212 g/s. If the entrance has a 2.6 atm of pressure with a velocity of 0.2 m/s, while the test section shows a density of 0.8 kg/m³, the exit area is 3/4 the size of inlet and the exit pressure is 264,458.25 Pa. Determine the velocity and pressure at the test section and the temperature at the exit.",
    options: ["0.3623 m/s, 263,44.9765 Pa, 345.6823 K", "0.3731 m/s, 254,323.9437 Pa, 288.25 K", "0.5698 m/s, 339,473.3922 Pa, 267.29 K", "0.3324 m/s, 127,983.5173 Pa, 324.75 K"],
    answer: "0.3623 m/s, 263,44.9765 Pa, 345.6823 K"
  },
  {
    question: "It is the streamlined body which when set at a suitable angle of attack, produces more lift than drag, while also producing a manageable pitching moment.",
    options: ["airfoil", "camber", "elevator", "rudder"],
    answer: "airfoil"
  },
  {
    question: "What do you call an airfoil that has an equal shape of upper and lower chamber?",
    options: ["symmetrical airfoil", "asymmetrical airfoil", "airfoil", "camber"],
    answer: "symmetrical airfoil"
  },
  {
    question: "It is the angle between the relative wind and the chord line.",
    options: ["angle of attack", "angle", "aspect ratio", "chord"],
    answer: "angle of attack"
  },
  {
    question: "It is the distance between the leading and trailing edge measured along the chord line.",
    options: ["chord", "thickness", "wingspan", "mean camber line"],
    answer: "chord"
  },
  {
    question: "A component of aerodynamic forces perpendicular to the relative wind.",
    options: ["lift", "drag", "weight", "thrust"],
    answer: "lift"
  },
  {
    question: "It is an aerodynamic force parallel to the relative wind.",
    options: ["drag", "thrust", "lift", "Weight"],
    answer: "drag"
  },
  {
    question: "An aircraft is flying at 1,800 m above sea level. It moves at 100 m/s. If it has a coefficient of drag of 0.14 and a wing area of 144 m². Find the value of Drag.",
    options: ["103,491.36 N", "102,567.42 N", "133,737.45 N", "123,996.73 N"],
    answer: "103,491.36 N"
  },
  {
    question: "It is the flow in which the streamlines are smooth and regular and the fluid element moves smoothly, with a Reynold's number less than 499, 999?",
    options: ["Laminar flow", "Turbulent flow", "smooth flow", "viscosity"],
    answer: "Laminar flow"
  },
  {
    question: "It helps to determine whether the flow in a body and its scaled version are aerodynamically similar.",
    options: ["Reynold's number", "mach number", "chord", "viscosity"],
    answer: "Reynold's number"
  }
];




const Quiz = ({ onClose }) => { // Accepting onClose prop for the close button
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [isReviewing, setIsReviewing] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleAnswerOptionClick = (answer) => {
    if (answer === quizQuestions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    const updatedUserAnswers = [...userAnswers];
    updatedUserAnswers[currentQuestionIndex] = answer;
    setUserAnswers(updatedUserAnswers);

    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  if (isReviewing) {
    return (
      <QuizReview
        quizQuestions={quizQuestions}
        userAnswers={userAnswers}
        onClose={() => setIsReviewing(false)}
      />
    );
  }

  const handleReviewClick = () => {
    setIsReviewing(true);
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {quizQuestions.length}
          <button className="review-button" onClick={handleReviewClick} style={{ cursor: 'pointer', marginTop: '1rem' }}>
            Review Answers
          </button>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question">
              {quizQuestions[currentQuestionIndex].question}
            </div>
          </div>
          <div className="answer-section">
            {quizQuestions[currentQuestionIndex].options.map((option) => (
              <button onClick={() => handleAnswerOptionClick(option)} key={option}>
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;