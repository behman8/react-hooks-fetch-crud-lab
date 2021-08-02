import React, { useState, useEffect } from "react";

function QuestionList() {
  const [questionItem, setQuestionItem] = useState("")

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((resp) => resp.json())
      .then((data) => {
        data.map((question) => setQuestionItem(question.prompt))
      });
  }, []);

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionItem}</ul>
    </section>
  );
}

export default QuestionList;
