import "./transaction.css";
import { transactions } from "../../assets/data";
import TransactionCard from "../transactionCard/TransactionCard";
function Transaction() {
  return (
    <div className="transaction">
      <div className="transaction--header">
        <span className="transaction--header--text">Transaction</span>
        <button className="transaction--header--button">+</button>
      </div>
      {transactions.map((transaction) => (
        <TransactionCard key={transaction.type} transaction={transaction} />
      ))}
    </div>
  );
}

export default Transaction;
