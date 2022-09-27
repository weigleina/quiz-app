import React, { useState } from "react";
import "./App.css";

function App() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "Question 1",
      options: [
        { id: 0, text: "Opt 1", isCorrect: false },
        { id: 1, text: "Opt 2", isCorrect: false },
        { id: 2, text: "Opt 3", isCorrect: false },
        { id: 3, text: "Opt 4", isCorrect: true },
      ],
    },
    {
      text: "Question 2",
      options: [
        { id: 0, text: "Opt 1", isCorrect: false },
        { id: 1, text: "Opt 2", isCorrect: false },
        { id: 2, text: "Opt 3", isCorrect: false },
        { id: 3, text: "Opt 4", isCorrect: true },
      ],
    },
    {
      text: "Question 3",
      options: [
        { id: 0, text: "Opt 1", isCorrect: false },
        { id: 1, text: "Opt 2", isCorrect: false },
        { id: 2, text: "Opt 3", isCorrect: false },
        { id: 3, text: "Opt 4", isCorrect: true },
      ],
    },
    {
      text: "Question 4",
      options: [
        { id: 0, text: "Opt 1", isCorrect: false },
        { id: 1, text: "Opt 2", isCorrect: false },
        { id: 2, text: "Opt 3", isCorrect: false },
        { id: 3, text: "Opt 4", isCorrect: true },
      ],
    },
    {
      text: "Question 5",
      options: [
        { id: 0, text: "Opt 1", isCorrect: false },
        { id: 1, text: "Opt 2", isCorrect: false },
        { id: 2, text: "Opt 3", isCorrect: false },
        { id: 3, text: "Opt 4", isCorrect: true },
      ],
    },
  ];

  // Helper Functions

  // set bubble colors right(green)
  function changeStyleRight() {
    if (currentQuestion === 0) {
      var bubble1 = document.getElementById("bubble1");
      bubble1.style.backgroundColor = "#7EC631";
    }
    if (currentQuestion === 1) {
      var bubble2 = document.getElementById("bubble2");
      bubble2.style.backgroundColor = "#7EC631";
    }
    if (currentQuestion === 2) {
      var bubble3 = document.getElementById("bubble3");
      bubble3.style.backgroundColor = "#7EC631";
    }
    if (currentQuestion === 3) {
      var bubble4 = document.getElementById("bubble4");
      bubble4.style.backgroundColor = "#7EC631";
    }
    if (currentQuestion === 4) {
      var bubble5 = document.getElementById("bubble5");
      bubble5.style.backgroundColor = "#7EC631";
    }
  }

  // set bubble colors wrong(red)
  function changeStyleWrong() {
    if (currentQuestion === 0) {
      var bubble1 = document.getElementById("bubble1");
      bubble1.style.backgroundColor = "#D54E31";
    }
    if (currentQuestion === 1) {
      var bubble2 = document.getElementById("bubble2");
      bubble2.style.backgroundColor = "#D54E31";
    }
    if (currentQuestion === 2) {
      var bubble3 = document.getElementById("bubble3");
      bubble3.style.backgroundColor = "#D54E31";
    }
    if (currentQuestion === 3) {
      var bubble4 = document.getElementById("bubble4");
      bubble4.style.backgroundColor = "#D54E31";
    }
    if (currentQuestion === 4) {
      var bubble5 = document.getElementById("bubble5");
      bubble5.style.backgroundColor = "#D54E31";
    }
  }

  // clear bubble colors on reset
  function changeStyleClear() {
    var bubble1 = document.getElementById("bubble1");
    bubble1.style.backgroundColor = "transparent";
    var bubble2 = document.getElementById("bubble2");
    bubble2.style.backgroundColor = "transparent";
    var bubble3 = document.getElementById("bubble3");
    bubble3.style.backgroundColor = "transparent";
    var bubble4 = document.getElementById("bubble4");
    bubble4.style.backgroundColor = "transparent";
    var bubble5 = document.getElementById("bubble5");
    bubble5.style.backgroundColor = "transparent";
  }

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
      changeStyleRight();
    } else {
      changeStyleWrong();
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
    changeStyleClear();
  };

  return (
    <div className="App">
      {/* Header  */}
      <h1>Quiz Title</h1>

      {/* Show results or show the question game  */}
      {showResults ? (
        /* Final Results */
        <div className="final-results">
          <h1>Final Score: {(score / questions.length) * 100}%</h1>
          <h4>
            You answered {score} / {questions.length} questions correctly
          </h4>
          <button onClick={() => restartGame()}>Try Again</button>
        </div>
      ) : (
        /* Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
          <h4 id="question-number">
            {currentQuestion + 1} / {questions.length}
          </h4>
        </div>
      )}

      {/* Current Score  */}
      <div className="score">
        {/* <h2>Score: {score}</h2>*/}
        <div class="bubble-container">
          <div class="bubble" id="bubble1"></div>
          <div class="bubble" id="bubble2"></div>
          <div class="bubble" id="bubble3"></div>
          <div class="bubble" id="bubble4"></div>
          <div class="bubble" id="bubble5"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
