/* eslint-disable react/prop-types */
import "./transactionCard.css";
function TransactionCard({ transaction }) {
  return (
    <div className="transaction--card">
      <button className="transaction--button">C</button>
      <div className="transaction--text--container">
        <p className="transaction--text">{transaction.type}</p>
        <p className="transaction--subtext">{transaction.time}</p>
      </div>
      <div className="transaction--amount">{transaction.amount}</div>
    </div>
  );
}

export default TransactionCard;
