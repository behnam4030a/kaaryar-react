import './chatbox.css';
import Actions from '../actions';
import MassageList from '../massageList';
import message from '../../message.json';
const Chatbox = () => {
  return (
    <div className="chatbox">
      <MassageList message={message} />
      <Actions />
    </div>
  );
};
export default Chatbox;
