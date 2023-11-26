import React from 'react';
import './Answer.css';
const Answer = ({ comments }) => {
  return (
    <>
      {comments.map((answer) => (
        <div className="answer">
          <div className="answer__title">
            <p>
              {' '}
              6 آذر 1402 <span>بهنام بیجاری</span>
            </p>
            <a href="#">پاسخ</a>
          </div>
          <p className="answer__text">{answer.text}</p>
        </div>
      ))}
    </>
  );
};
export default Answer;
