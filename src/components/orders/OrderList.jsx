import { useOrderContext } from "../../context/OrderContext";
import OrderCard from "./OrderCard";

const OrderList = () => {
  const { orders, filter, search, sort } = useOrderContext();

  let filtered = orders;

  // 🔍 Search
  if (search) {
    filtered = filtered.filter(order =>
      order.customer.toLowerCase().includes(search.toLowerCase())
    );
  }

  // 🔘 Filter
  if (filter !== "All") {
    filtered = filtered.filter(order => order.status === filter);
  }

  // 📊 Sort
  if (sort === "amount") {
    filtered = [...filtered].sort((a, b) => b.total - a.total);
  }

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
      gap: 16
    }}>
      {filtered.map(order => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  );
};

export default OrderList;