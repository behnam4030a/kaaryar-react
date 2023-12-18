import './Actions.css';
import Input from '../Input';

function Actions({ addTask, deletedAllTask, setValueInput, valueInput }) {
  return (
    <div>
      <Input
        setValueInput={setValueInput}
        valueInput={valueInput}
        addTask={addTask}
      />
      <div className="actions">
        <button onClick={deletedAllTask} className="actions__secondary">
          حذف همه
        </button>
        <button onClick={addTask} className="actions__primary">
          کار جدید
        </button>
      </div>
    </div>
  );
}

export default Actions;
