import React, { useEffect, useState } from "react";
import { InputCheckBox } from "./components/InputCheckBox/InputCheckBox";
import "./styles.css"
export const App = () => {
  const [current, setCurrent] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [points, setPoints] = useState(0);
  const preguntas = [
    {
      id: 1,
      pregunta: "Wich language run in browser",
      respuestas: ["C", "Java", "Python", "Javascript"],
      correcta: "Javascript",
    },
    {
      id: 2,
      pregunta: "What does CSS stand for?",
      respuestas: [
        "Central Style Sheets",
        "Cascading Style Sheets",
        "Cascading Simple Sheets",
        "Cars SUVs Sailboats",
      ],
      correcta: "Cascading Style Sheets",
    },
    {
      id: 3,
      pregunta: "What does HTML stand for?",
      respuestas: [
        "Hypertext Markup Language",
        "Hypertext Markdown Language",
        "Hyperloop Machine Language",
        "Helicopters Terminals Motorboats Lamborginis",
      ],
      correcta: "Hypertext Markup Language",
    },
    {
      id: 4,
      pregunta: "What year was JavaScript launched?",
      respuestas: ["1996", "1995", "1994", "none of the above"],
      correcta: "1995",
    },
    {
      id: 5,
      pregunta: "What is the difference between HTTP and HTTPS?",
      respuestas: [
        "HTTP is encrypted, HTTPS is not.",
        "HTTPS is encrypted, HTTP is not.",
        "They are the same thing.",
        "None of the above.",
      ],
      correcta: "HTTPS is encrypted, HTTP is not.",
    },
    {
      id: 6,
      pregunta: "What is the DOM?",
      respuestas: [
        "The Document Object Model",
        "The Document Object Manager",
        "The Document Object Maker",
        "None of the above.",
      ],
      correcta: "The Document Object Model",
    },
    {
      id: 7,
      pregunta: "What is a web server?",
      respuestas: [
        "A computer that stores and delivers web pages",
        "A program that runs on a web server",
        "A type of web browser",
        "None of the above.",
      ],
      correcta: "A computer that stores and delivers web pages",
    },
    {
      id: 8,
      pregunta: "What is a web framework?",
      respuestas: [
        "A collection of tools and libraries that make it easier to develop web applications",
        "A type of web server",
        "A type of web browser",
        "None of the above.",
      ],
      correcta:
        "A collection of tools and libraries that make it easier to develop web applications",
    },
  ];
  useEffect(() => {
    console.log(current);
  }, [current]);
  const handleSubmit = () => {
    if(current > preguntas.length - 1) {
        setPoints(0)
        setCurrent(0)
        setCurrentAnswer("")
    }
    if (preguntas[current].correcta === currentAnswer && current < preguntas.length) {
      setPoints((points) => points + 1);
      setCurrent((current) => current + 1);
      setCurrentAnswer("");
      return;
    } else if (currentAnswer !== "" && current < preguntas.length) {
      setCurrent((current) => current + 1);
    }
    setCurrentAnswer("");
  };

  const handleChangeAnswer = (a) => {
    setCurrentAnswer(a);
  };

  return (
    <div className="container">
      {current <= preguntas.length - 1 && (
        <div className="card">
          <div className="questions-container">
            <h2>{preguntas[current].pregunta}</h2>
            <ul>
              {preguntas[current].respuestas.map((respuesta, index) => (
                <InputCheckBox
                  handleChangeAnswer={handleChangeAnswer}
                  key={index}
                  id={index}
                  respuesta={respuesta}
                  currentAnswer={currentAnswer}
                />
              ))}
            </ul>
          </div>

          <button onClick={handleSubmit} className="submit">
            Submit
          </button>
        </div>
      )}
      {current > preguntas.length - 1 && <div className="reset-container">
        <h2 className="result">You answered {points}/{preguntas.length} questions correctly</h2>
        <button onClick={handleSubmit}>Reload</button></div>}
    </div>
  );
};
