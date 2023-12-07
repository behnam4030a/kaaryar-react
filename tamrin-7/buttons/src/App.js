import './App.css';
import Button from './components/Button';
import ButtonInfo from './ButtonsInfo';
function App() {
  function someHandler() {
    console.log('object');
  }
  return (
    <div className="App">
      <div className="App__buttons">
        <Button
          variant={ButtonInfo.VARIANTS.FILLED}
          look={ButtonInfo.LOOKS.PRIMARY}
        >
          Primary
        </Button>
        <Button
          variant={ButtonInfo.VARIANTS.FILLED}
          look={ButtonInfo.LOOKS.SECONDARY}
        >
          Secondary
        </Button>
        <Button
          variant={ButtonInfo.VARIANTS.FILLED}
          look={ButtonInfo.LOOKS.SUCCESS}
        >
          Success
        </Button>
        <Button
          variant={ButtonInfo.VARIANTS.FILLED}
          look={ButtonInfo.LOOKS.DANGER}
        >
          Danger
        </Button>
        <Button
          variant={ButtonInfo.VARIANTS.FILLED}
          look={ButtonInfo.LOOKS.WARNING}
        >
          Warning
        </Button>
        <Button
          variant={ButtonInfo.VARIANTS.FILLED}
          look={ButtonInfo.LOOKS.INFO}
        >
          Info
        </Button>
        <Button
          variant={ButtonInfo.VARIANTS.FILLED}
          look={ButtonInfo.LOOKS.DARK}
        >
          Dark
        </Button>
      </div>
      <div className="App__buttons">
        <Button
          variant={ButtonInfo.VARIANTS.OUTLINED}
          look={ButtonInfo.LOOKS.PRIMARY}
        >
          Primary
        </Button>
        <Button
          variant={ButtonInfo.VARIANTS.OUTLINED}
          look={ButtonInfo.LOOKS.SECONDARY}
        >
          Secondary
        </Button>
        <Button
          variant={ButtonInfo.VARIANTS.OUTLINED}
          look={ButtonInfo.LOOKS.SUCCESS}
        >
          Success
        </Button>
        <Button
          variant={ButtonInfo.VARIANTS.OUTLINED}
          look={ButtonInfo.LOOKS.DANGER}
        >
          Danger
        </Button>
        <Button
          variant={ButtonInfo.VARIANTS.OUTLINED}
          look={ButtonInfo.LOOKS.WARNING}
        >
          Warning
        </Button>
        <Button
          variant={ButtonInfo.VARIANTS.OUTLINED}
          look={ButtonInfo.LOOKS.INFO}
        >
          Info
        </Button>
        <Button
          variant={ButtonInfo.VARIANTS.OUTLINED}
          look={ButtonInfo.LOOKS.DARK}
        >
          Dark
        </Button>
      </div>
      <div className="App__buttons">
        <Button
          variant={ButtonInfo.VARIANTS.FILLED}
          look={ButtonInfo.LOOKS.PRIMARY}
          size={ButtonInfo.SIZES.SMALL}
        >
          Button sm
        </Button>
        <Button
          variant={ButtonInfo.VARIANTS.FILLED}
          look={ButtonInfo.LOOKS.PRIMARY}
          size={ButtonInfo.SIZES.MEDIUM}
        >
          Button
        </Button>
        <Button
          variant={ButtonInfo.VARIANTS.FILLED}
          look={ButtonInfo.LOOKS.PRIMARY}
          size={ButtonInfo.SIZES.LARGE}
        >
          Button lg
        </Button>
      </div>
      <div className="App__buttons">
        <Button>click me!</Button>

        <Button
          variant={ButtonInfo.VARIANTS.OUTLINED}
          look={ButtonInfo.LOOKS.SUCCESS}
        >
          click me!
        </Button>

        <Button
          as="a"
          href="https://google.com"
          target="_blank"
          look={ButtonInfo.LOOKS.DARK}
        >
          go google.com in new tab!
        </Button>

        <Button
          type="submit"
          variant={ButtonInfo.VARIANTS.FILLED}
          look={ButtonInfo.LOOKS.WARNING}
          onClick={someHandler}
          disabled
        >
          Disabled Submit
        </Button>
      </div>
    </div>
  );
}

export default App;
