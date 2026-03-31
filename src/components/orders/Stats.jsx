import { useOrderContext } from "../../context/OrderContext";

const Stats = () => {
  const { orders } = useOrderContext();

  const totalOrders = orders.length;
  const revenue = orders.reduce((sum, order) => sum + order.total, 0);

  return (
    <div style={{
      display: "flex",
      gap: 20,
      marginBottom: 20,
      background: "#fff",
      padding: 15,
      borderRadius: 10,
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
    }}>
   
      <div style={{
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: 20,
  marginBottom: 20
}}>
  <div style={{
    background: "#111",
    color: "#fff",
    padding: 20,
    borderRadius: 12
  }}>
    📦 Total Orders
    <h2>{totalOrders}</h2>
  </div>

  <div style={{
    background: "#ff9800",
    color: "#fff",
    padding: 20,
    borderRadius: 12
  }}>
    💰 Revenue
    <h2>₹{revenue}</h2>
  </div>
</div>
    </div>
    
  );
};

export default Stats;