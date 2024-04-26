import "./payment.css";
import { FiEdit3 } from "react-icons/fi";
import CircularProgressBar from "../circularProgressBar/CircularProgressBar";
import { colors } from "../../utils/colors";
function Payment() {
  return (
    <div className="payment">
      <div className="editicon--wrapper">
        <FiEdit3 color="#C4BDD5" />
      </div>
      <div
        style={{
          padding: "10px",
          backgroundColor: colors.primary,
          color: "white",
          position: "absolute",
          borderRadius: "5px",
          top: "50px",
          right: -15,
          fontSize: 10,
        }}
      >
        $10,000
      </div>
      <CircularProgressBar />
    </div>
  );
}

export default Payment;
