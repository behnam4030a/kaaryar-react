import './App.css';
import Container from './components/Container';
import works from './works.json';

function App() {
  return (
    <div className="App">
      <Container works={works} />
    </div>
  );
}

export default App;
