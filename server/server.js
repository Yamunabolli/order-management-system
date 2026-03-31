const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let orders = [
  {
    id: 1,
    customer: "Rahul",
    items: ["Burger", "Fries"],
    total: 250,
    status: "Pending",
    time: "10:30 AM"
  },
  {
    id: 2,
    customer: "Anjali",
    items: ["Pizza"],
    total: 500,
    status: "Preparing",
    time: "10:32 AM"
  },
  {
    id: 3,
    customer: "Kiran",
    items: ["Biryani"],
    total: 300,
    status: "Delivered",
    time: "10:20 AM"
  },
  {
    id: 4,
    customer: "Sneha",
    items: ["Sandwich"],
    total: 150,
    status: "Accepted",
    time: "10:35 AM"
  }
];

// GET orders
app.get("/orders", (req, res) => {
  res.json(orders);
});

// UPDATE status
app.patch("/orders/:id", (req, res) => {
  const { status } = req.body;

  orders = orders.map(order =>
    order.id == req.params.id ? { ...order, status } : order
  );

  res.json({ success: true });
});

app.listen(5000, () => {
  console.log("Server running on port 5000 🚀");
});

setInterval(() => {
  const newOrder = {
    id: Date.now(),
    customer: "New User",
    items: ["Pizza"],
    total: 400,
    status: "Pending"
  };

  orders.push(newOrder);
}, 10000);