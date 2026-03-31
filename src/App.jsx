import Header from "./components/layout/Header";
import Stats from "./components/orders/Stats";
import OrderFilters from "./components/orders/OrderFilters";
import OrderList from "./components/orders/OrderList";
import { useOrderContext } from "./context/OrderContext";
import Notification from "./components/layout/Notification";

function App() {
  const { notification } = useOrderContext();

  return (
    <div style={{ padding: 20 }}>
      {notification && <Notification message={notification} />}

      <Header />
      <Stats />
      <OrderFilters />
      <OrderList />
    </div>
  );
}

export default App; 