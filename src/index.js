import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const QuestionShowPage = () => {
  return(
    <main>
      <QuestionDetails/>
      <AnswerDetails/>
    </main>
  )
}

const QuestionDetails = () => {
  return (
    <div>
      <h2>What is your favourite color?</h2>
      <p> Green, Blue, Magenta, etc.</p>
      <p>By John Snow</p>
      <p>
        <small>seen 10 times</small>
        <small>last edited 2 hours</small>
      </p>
    </div>
  )
}

const AnswerDetails = () => {
  return (
    <div>
      <p>This is my answer</p>
      <p>By Steve Jobs</p>
      <p>
        <strong>Created at</strong> 1 day ago
      </p>
    </div>
  )
}


// each react component can only return one react Element (div)

// React.StrictMode is a development only component will give you hints about the components that on writing
ReactDOM.render(
  //<React.StrictMode>
    //<App />,   
  //</React.StrictMode>,
  <QuestionShowPage />,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
