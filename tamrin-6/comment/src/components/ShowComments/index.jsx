import React from 'react';
import './ShowComments.css';
import Header from '../Header';
import Comment from '../Comment';
const ShowComments = ({ comments }) => {
  return (
    <div className="box-comments">
      <Header />
      {comments.map((comment) => {
        return (
          <Comment
            key={comment.id}
            id={comment.id}
            text={comment.text}
            comments={comments}
          />
        );
      })}
    </div>
  );
};

export default ShowComments;
