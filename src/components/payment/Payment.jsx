import "./payment.css";
import { FiEdit3 } from "react-icons/fi";
import CircularProgressBar from "../circularProgressBar/CircularProgressBar";
import Card from "../card/Card";
import { colors } from "../../utils/colors";
import Transaction from "../transaction/Transaction";
function Payment() {
  return (
    <div className="payment">
      <div className="editicon--wrapper">
        <FiEdit3 color="#C4BDD5" />
      </div>
      <div className="tip">$10,000</div>
      <CircularProgressBar />
      <Card />
      <Transaction />
    </div>
  );
}

export default Payment;
