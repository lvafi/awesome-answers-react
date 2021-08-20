import React from 'react';

const AnswerDetails = ({ body, author, created_at }) => {
    return (
      <div>
        <p>{body}</p>
        <p>By {author.full_name}</p>
        <p>
          <strong>Created at</strong> {created_at.toLocaleString()}
        </p>
      </div>
    )
}

export default AnswerDetails

