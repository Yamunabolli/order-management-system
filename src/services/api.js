const BASE_URL = "https://order-management-system-kbfl.onrender.com";

export const getOrders = async () => {
  const res = await fetch(`${BASE_URL}/orders`);
  return res.json();
};

export const updateOrderStatus = async (id, status) => {
  await fetch(`${BASE_URL}/orders/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status })
  });
};