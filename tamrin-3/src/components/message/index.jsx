import './message.css';

const Massage = ({ body, ispeer }) => {
  return (
    <div className="massage">
      {ispeer ? (
        <div className="box-right">
          <p className="massage-other">{body}</p>
        </div>
      ) : (
        <div className="box-left">
          <p className="massage-me">{body}</p>
        </div>
      )}
    </div>
  );
};
export default Massage;
