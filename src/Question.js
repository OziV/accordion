import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function Question(data) {
  const { title, info } = data;
  const [showInfo, setShowInfo] = useState(false);
  console.log(showInfo);
  return (
    <>
      <article className="question">
        <header>
          <h4>{title}</h4>
          <button onClick={() => setShowInfo(!showInfo)}>
            {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </header>
        {showInfo && <p>{info}</p>}
      </article>
    </>
  );
}

export default Question;
