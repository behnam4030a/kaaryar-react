import Item from '../Item';
import './Items.css';

function Items({ works, newWork }) {
  return (
    <div className="items">
      {works.map((work) => (
        <Item
          key={work.id}
          text={work.text}
          newWork={newWork}
          itemId={work.id}
        />
      ))}
    </div>
  );
}

export default Items;
