import './list.css';
import OrderItem from '../OrderItem';

function List({ orders }) {
  let totalbuy = 0;
  let totalsell = 0;
  let maximumTotal = 0;
  let maxTotalBuy = 0;
  let maxTotalSell = 0;

  function addTotalBuy(quantity) {
    maxTotalBuy = maxTotalBuy + quantity;
    return (totalbuy += quantity);
  }
  function addTotalSell(quantity) {
    maxTotalSell = maxTotalSell + quantity;
    return (totalsell += quantity);
  }

  function maxTotal(max) {
    if (max > maximumTotal) {
      return (maximumTotal = max);
    } else {
      return maximumTotal;
    }
  }

  return (
    <div className="list">
      <div className="list__buy">
        {orders
          .sort((a, b) => {
            return b.price - a.price;
          })
          .map((order) =>
            order.type == 'buy' ? (
              <OrderItem
                key={order.index}
                price={order.price}
                amount={order.quantity}
                type={order.type}
                total={addTotalBuy(order.quantity)}
                maximumTotal={
                  maxTotal(maxTotalBuy) > maxTotal(maxTotalSell)
                    ? maxTotal(maxTotalBuy)
                    : maxTotal(maxTotalSell)
                }
              />
            ) : null
          )}
      </div>

      <div className="list__sell">
        {orders
          .sort((a, b) => {
            return a.price - b.price;
          })
          .map((order) =>
            order.type == 'sell' ? (
              <OrderItem
                key={order.index}
                price={order.price}
                amount={order.quantity}
                type={order.type}
                total={addTotalSell(order.quantity)}
                maximumTotal={
                  maxTotal(maxTotalBuy) > maxTotal(maxTotalSell)
                    ? maxTotal(maxTotalBuy)
                    : maxTotal(maxTotalSell)
                }
              />
            ) : null
          )}
      </div>
    </div>
  );
}
export default List;
