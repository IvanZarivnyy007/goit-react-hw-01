import PropTypes from "prop-types";
import "./TransactionHistory.css";

export const TransactionHistory = ({ items }) => {
  return (
    <table className="table">
      <thead className="thead">
        <tr className="tr-top">
          <th className="th">Type</th>
          <th className="th">Amount</th>
          <th className="th">Currency</th>
        </tr>
      </thead>

      <tbody className="body">
        {items.map((item, index) => (
          <tr className="tr-botom" key={index}>
            <td className="td">{item.type}</td>
            <td className="td">{item.amount}</td>
            <td className="td">{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
