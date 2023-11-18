import './Item.css';

function Item({ text }) {
  return (
    <div className="item">
      <p className="item__text">{text}</p>
      <button className="item__btn">x</button>
    </div>
  );
}

export default Item;
