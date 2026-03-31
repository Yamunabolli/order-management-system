import { useOrderContext } from "../../context/OrderContext";
import { STATUS_COLORS } from "../../utils/constants";

const OrderCard = ({ order }) => {
  const { updateStatus } = useOrderContext();

  return (
    <div style={{
      background: "#fff",
      padding: 16,
      borderRadius: 12,
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      marginBottom: 16
    }}>
      <h3>🧾 Order #{order.id}</h3>

      <p><b>👤 {order.customer}</b></p>
      <p>🍕 {order.items.join(", ")}</p>

      <p><b>₹{order.total}</b></p>

      <span style={{
        background: STATUS_COLORS[order.status],
        color: "#fff",
        padding: "4px 10px",
        borderRadius: 6
      }}>
        {order.status}
      </span>
<div style={{
  background: "linear-gradient(135deg, #ffffff, #f3f3f3)",
  padding: 18,
  borderRadius: 16,
  boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
  transition: "transform 0.2s",
  cursor: "pointer"
}}
onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.03)"}
onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
></div>
      <div style={{ marginTop: 10 }}>
        <select
          value={order.status}
          onChange={(e) => updateStatus(order.id, e.target.value)}
        >
          {Object.keys(STATUS_COLORS).map(status => (
            <option key={status}>{status}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default OrderCard;