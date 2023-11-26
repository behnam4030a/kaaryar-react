import React from 'react';
import './Comment.css';
import Answer from '../Answer';

const Comment = ({ text, id, comments }) => {
  const answer = comments.filter((item) => item.parentId === id);
  return (
    <>
      <div className="comment">
        <div className="comment__item">
          <div className="comment__title">
            <p>
              {' '}
              6 آذر 1402 <span>بهنام بیجاری</span>
            </p>
            <a href="#">پاسخ</a>
          </div>
          <p className="comment__text">{text}</p>
        </div>
        <Answer comments={answer} />
      </div>
    </>
  );
};

export default Comment;
