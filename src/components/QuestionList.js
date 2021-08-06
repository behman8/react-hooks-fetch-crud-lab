import React, {useEffect, useState} from "react";
import QuestionItem from "./QuestionItem";

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

  function deleteQuestion(event) {
    fetch(`http://localhost:4000/questions/${event.target.parentElement.id}`, {method: 'DELETE'})
      .then(resp => resp.json())
      .then(function () {
        setQuestionItem(questionItem.filter(question => question.id != event.target.parentElement.id))
      })
  };

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionItem.map((question) => <QuestionItem handleDelete={deleteQuestion} question={question} key={question.id}/>)}</ul>
    </section>
  );
}

export default QuestionList;
