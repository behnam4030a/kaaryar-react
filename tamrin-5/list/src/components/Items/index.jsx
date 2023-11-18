import Item from '../Item';
import './Items.css';

function Items({ works }) {
  return (
    <div className="items">
      {works.map((work) => (
        <Item key={work.id} text={work.text} />
      ))}
    </div>
  );
}

export default Items;
