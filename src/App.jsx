import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
