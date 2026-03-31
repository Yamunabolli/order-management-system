**---- **Food Order Delivery Management**
**
A modern, real-time Admin Dashboard for managing restaurant orders — inspired by platforms like Swiggy/Zomato.
Built with React + Context API + Node.js, focusing on scalable architecture, great UX, and real-time updates.

----**Live Features**

✅ Real-time order updates (polling-based)
✅ Update order status (Pending → Delivered)
✅ Smart filtering (status-based)
✅ Search orders by customer name
✅ Sorting (latest / amount)
✅ Dashboard stats (orders + revenue)
✅ Responsive grid layout
✅ Clean and reusable component architecture

----**Tech Stack**
**Frontend**
⚛️ React.js
🧠 Context API (Global State Management)
🎨 CSS (Custom styling)
🔄 Polling (for live updates)
**Backend**
🟢 Node.js
🚀 Express.js
🌐 REST API

📁 **Project Structure**
admin-dashboard/
 ├── src/
 │    ├── components/
 │    │     ├── layout/
 │    │     ├── orders/
 │    │
 │    ├── context/
 │    ├── hooks/
 │    ├── services/
 │    ├── utils/
 │    ├── App.jsx
 │
 ├── server/
 │    ├── server.js
 │
 ├── package.json

----**Setup Instructions**
**1**. Clone the repository
   git clone  
cd admin-dashboard
**2**. Install frontend dependencies
   npm install
**3**. Setup backend
   cd server
   npm install
**4**. Run backend server
   npm start
****Server runs on:   http://localhost:5000
**
   **5**. Run frontend
   cd ..
   npm start
****   App runs on:  http://localhost:3000
**
**API Endpoints
Method	Endpoint	Description
GET	/orders	Fetch all orders
PATCH	/orders/:id	Update order status**

****Key UX Features**
**
 Real-time updates using polling
 Optimistic UI updates for faster interaction
 Search + Filter + Sort for better usability
 Dashboard insights (orders & revenue)
 Reusable components for scalability
