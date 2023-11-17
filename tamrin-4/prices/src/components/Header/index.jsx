import './header.css';

function Header() {
  return (
    <div className="header">
      <div className="header__title">
        <h3>Buy</h3>
        <h3>Sell</h3>
      </div>
      <div className="header__title-list">
        <h5>Total(SAT)</h5>
        <h5>Amount(SAT)</h5>
        <h5>PRICE(RIAL)</h5>
        <h5>Amount(SAT)</h5>
        <h5>Total(SAT)</h5>
      </div>
    </div>
  );
}
export default Header;
