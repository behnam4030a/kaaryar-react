import Massage from '../message';
import './messageList.css';

const MassageList = ({ message }) => {
  return (
    <div className="massage-list">
      {message.map((msg) => (
        <Massage key={msg.id} body={msg.body} ispeer={msg.isPeer} />
      ))}
    </div>
  );
};
export default MassageList;
