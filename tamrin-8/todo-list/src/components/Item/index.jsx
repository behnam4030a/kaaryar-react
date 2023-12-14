import './Item.css';

function Item({ text, newWork, itemId }) {
  return (
    <div className="item">
      <p className="item__text">{text}</p>
      <button onClick={() => newWork(itemId)} className="item__btn">
        x
      </button>
    </div>
  );
}

export default Item;
