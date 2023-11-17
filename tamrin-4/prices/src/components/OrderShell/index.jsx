import Header from '../Header';
import List from '../List';
import './orderShell.css';
import orders from '../../orders.json';

function OrderShell() {
  return (
    <div className="order-shell">
      <Header />
      <List orders={orders} />
    </div>
  );
}

export default OrderShell;
