import React, {useEffect, useState} from "react";

function QuestionList() {
  const [questionItem, setQuestionItem] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((resp) => resp.json())
      .then((data) => {
        setQuestionItem(data)
      });
      console.log(questionItem)
  }, []);

  function deleteQuestion() {
    fetch(`http://localhost:4000/questions/${questionItem}`, {method: 'DELETE'})
      .then(() => setQuestionItem(''))
  };

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionItem.map((question) => <li key={question.id}>{question.prompt}<button onClick={deleteQuestion}>Delete</button></li>)}</ul>
    </section>
  );
}

export default QuestionList;
