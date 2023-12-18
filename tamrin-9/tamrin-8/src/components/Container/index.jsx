import Actions from '../Actions';
import Header from '../Header';
import Items from '../Items';
import './Container.css';

function Container({
  works,
  newWork,
  setValueInput,
  addTask,
  valueInput,
  deletedAllTask,
}) {
  return (
    <div className="container">
      <Header />
      <Items works={works} newWork={newWork} />
      <Actions
        addTask={addTask}
        deletedAllTask={deletedAllTask}
        valueInput={valueInput}
        setValueInput={setValueInput}
      />
    </div>
  );
}

export default Container;
