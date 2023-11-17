import './orderItem.css';

function OrderItem({ total, amount, type, price, maximumTotal }) {
  const backgroundPrice = ((total / 3067) * 100).toFixed(2);
  console.log(total, maximumTotal);
  return (
    <div className="order-item">
      <p>{total}</p>
      <p>{amount}</p>
      <p
        style={
          type == 'buy'
            ? {
                color: 'green',
                background: ` linear-gradient(to right, white 0%, #DFFFE7 ${backgroundPrice}%, white 0%)`,
                width: '50px',
                textAlign: 'left',
              }
            : {
                color: 'red',
                background: ` linear-gradient(to left, white 0%, #FDE4E4 ${backgroundPrice}%, white 0%)`,
                width: '50px',
                textAlign: 'right',
              }
        }
      >
        {price}
      </p>
    </div>
  );
}
export default OrderItem;
