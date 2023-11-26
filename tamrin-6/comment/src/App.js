import './App.css';
import ShowComments from './components/ShowComments';
import comments from './comments.json';

function App() {
  return (
    <div className="App">
      <ShowComments comments={comments} />
    </div>
  );
}

export default App;
