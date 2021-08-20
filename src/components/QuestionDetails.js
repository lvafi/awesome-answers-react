import React from 'react';


// each react component can only return one react Element (div)
const QuestionDetails = ({ title, body, author, view_count, created_at, updated_at }) => {
    return (
      <div>
        <h2>{ title }</h2>
    <p> {body} </p>
    <p>By {author.full_name}</p>
        <p>
          <small>seen {view_count} times</small>
          <small>last edited {updated_at.toLocaleString()} hours</small>
        </p>
      </div>
    )
}
export default QuestionDetails


// module.exports = {
//     AnswerDetails: AnswerDetails,
//     QuestionDetails: QuestionDetails
// }

 