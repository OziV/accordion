import React, { useState } from "react";
import data from "./data";
import Question from "./Question";
import img from "./imgs/Chuck-Norris-PNG-Image-HD.png";

function Home() {
  const [questions, setQuestions] = useState(data);
  return (
    <>
      <main>
        <div className="container">
          <div>
            <h3>questions and answers about Chuck Norris</h3>
            <img src={img} alt="Logo" />
          </div>
          <section className="info">
            {questions.map((question) => {
              return <Question key={question.id} {...question} />;
            })}
          </section>
        </div>
      </main>
    </>
  );
}

export default Home;
