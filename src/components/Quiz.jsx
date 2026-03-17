import { useState } from "react";
import { useTheme } from "../theme";
import { ELEMENTS } from "../elements";

export function Quiz({ onClose }) {
  const { t } = useTheme();
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [showSummary, setShowSummary] = useState(false);

  const generateQuestions = () => {
    const newQuestions = [];
    const shuffledElements = [...ELEMENTS].sort(() => 0.5 - Math.random());
    for (let i = 0; i < 10; i++) {
      const element = shuffledElements[i];
      const type = Math.random() > 0.5 ? "symbol" : "name";
      const prompt = type === "symbol" ? `What is the symbol for ${element.name}?` : `What is the name for the symbol ${element.sym}?`;
      const answer = type === "symbol" ? element.sym : element.name;
      newQuestions.push({ element, prompt, answer });
    }
    setQuestions(newQuestions);
    setCurrentQuestion(0);
    setScore(0);
    setUserAnswer("");
    setShowAnswer(false);
    setFeedback(null);
    setShowSummary(false);
  };

  const handleAnswer = () => {
    const isCorrect = userAnswer.toLowerCase().trim() === questions[currentQuestion].answer.toLowerCase();
    if (isCorrect) {
      setScore(score + 1);
    }
    setFeedback({
      correct: isCorrect,
      answer: questions[currentQuestion].answer,
    });
  };

  const handleNextQuestion = () => {
    setFeedback(null);
    setShowAnswer(false);
    setUserAnswer("");
    setCurrentQuestion(currentQuestion + 1);
  };

  const handlePlayAgain = () => {
    setShowSummary(false);
    generateQuestions();
  };

  const questionsAnswered = currentQuestion + (feedback ? 1 : 0);

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 1000,
      background: t.overlayBg, backdropFilter: "blur(6px)",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: 24,
    }}>
      <div style={{
        background: t.panelBg, border: `1px solid ${t.panelBorder}`,
        borderRadius: 16, padding: 24, width: "100%", maxWidth: 600,
      }}>
        {showSummary ? (
          <div>
            <h2 style={{ marginTop: 0 }}>Quiz Summary</h2>
            <p>Questions Answered: {questionsAnswered}</p>
            <p>Correct: {score}</p>
            <p>Incorrect: {questionsAnswered - score}</p>
            <button onClick={onClose} style={{ marginRight: 8 }}>Close</button>
            <button onClick={handlePlayAgain}>Play Again</button>
          </div>
        ) : (
          <>
            <h2 style={{ marginTop: 0 }}>Periodic Table Quiz</h2>
            {questions.length === 0 ? (
              <button onClick={generateQuestions}>Start Quiz</button>
            ) : (
              <div>
                {currentQuestion < questions.length ? (
                  <div>
                    <p>{questions[currentQuestion].prompt}</p>
                    {!feedback ? (
                      <>
                        <input
                          type="text"
                          value={userAnswer}
                          onChange={(e) => setUserAnswer(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && handleAnswer()}
                          style={{ marginRight: 8 }}
                        />
                        <button onClick={handleAnswer}>Submit</button>
                        <button onClick={() => setShowAnswer(true)} style={{ marginLeft: 8 }}>Show Answer</button>
                        {showAnswer && <p>The correct answer is: {questions[currentQuestion].answer}</p>}
                      </>
                    ) : (
                      <div>
                        <p style={{ color: feedback.correct ? 'green' : 'red', fontWeight: 500 }}>
                          {feedback.correct ? 'Correct!' : `Incorrect. The answer is: ${feedback.answer}`}
                        </p>
                        <button onClick={handleNextQuestion}>Next Question</button>
                      </div>
                    )}
                  </div>
                ) : (
                  <div>
                    <h3>Quiz Complete!</h3>
                    <p>Your score: {score} / {questions.length}</p>
                    <button onClick={generateQuestions}>Play Again</button>
                  </div>
                )}
              </div>
            )}
            <button onClick={() => setShowSummary(true)} style={{ marginTop: 16 }}>Close</button>
          </>
        )}
      </div>
    </div>
  );
}
