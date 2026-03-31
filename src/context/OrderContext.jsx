import { createContext, useContext, useEffect, useState } from "react";
import { getOrders, updateOrderStatus } from "../services/api";
import {  useCallback } from "react";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState("All");
const [search, setSearch] = useState("");
const [sort, setSort] = useState("latest");
const [notification, setNotification] = useState("");


const fetchOrders = useCallback(async () => {
  const data = await getOrders();

  setOrders((prevOrders) => {
    if (data.length > prevOrders.length) {
      setNotification("New order received!");
    }
    return data;
  });
}, []);
  

useEffect(() => {
  fetchOrders();

  const interval = setInterval(fetchOrders, 3000);
  return () => clearInterval(interval);
}, [fetchOrders]);

  const updateStatus = async (id, status) => {
    // Optimistic UI
    setOrders(prev =>
      prev.map(order =>
        order.id === id ? { ...order, status } : order
      )
    );

    await updateOrderStatus(id, status);
  };

  return (
    <OrderContext.Provider
value={{
  orders,
  updateStatus,
  filter,
  setFilter,
  search,
  setSearch,
  sort,
  setSort,
  notification,
setNotification
}}    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderContext = () => useContext(OrderContext);