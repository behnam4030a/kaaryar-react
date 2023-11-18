import Actions from '../Actions';
import Header from '../Header';
import Items from '../Items';
import './Container.css';

function Container({ works }) {
  return (
    <div className="container">
      <Header />
      <Items works={works} />
      <Actions />
    </div>
  );
}

export default Container;
