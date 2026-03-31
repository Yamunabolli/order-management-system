import { useOrderContext } from "../../context/OrderContext";

const OrderFilters = () => {
  const { filter, setFilter, search, setSearch, sort, setSort } = useOrderContext();

  return (
    <div style={{ marginBottom: 20 }}>

      {/* 🔍 Search */}
      <input
       
  placeholder="🔍 Search customer..."
  style={{
    padding: 10,
    borderRadius: 8,
    border: "1px solid #ccc",
    width: 250
  }}

        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* 📊 Sort */}
      <select value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="latest">Latest</option>
        <option value="amount">Amount</option>
      </select>

      {/* 🔘 Filters */}
      {["All", "Pending", "Accepted", "Preparing", "Delivered"].map(f => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          style={{
            marginLeft: 10,
            background: filter === f ? "#333" : "#eee",
            color: filter === f ? "#fff" : "#000",
            padding: "6px 10px"
          }}
        >
          {f}
        </button>
      ))}
    </div>
  );
};

export default OrderFilters;