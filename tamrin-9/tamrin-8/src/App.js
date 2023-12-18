import { useEffect, useState } from 'react';
import './App.css';
import Container from './components/Container';
import works from './works.json';
import { readJSON, writeJSON } from './utils/local-storage';

function App() {
  const [work, setWork] = useState(
    readJSON(localStorage.getItem('todolist')) ?? works
  );
  const [valueInput, setValueInput] = useState();

  useEffect(() => {
    localStorage.setItem('todolist', writeJSON(work));
  }, [work]);
  const deleteHandler = (id) => {
    const newWork = work.filter((item) => {
      return item.id !== id;
    });
    setWork(newWork);
  };
  const addTask = () => {
    if (valueInput === '') return;
    setWork([...work, { id: new Date().getTime(), text: valueInput }]);
    setValueInput('');
  };

  const deletedAllTask = () => {
    setWork([]);
  };

  return (
    <div className="App">
      <Container
        works={work}
        newWork={deleteHandler}
        addTask={addTask}
        setValueInput={setValueInput}
        valueInput={valueInput}
        deletedAllTask={deletedAllTask}
      />
    </div>
  );
}

export default App;
