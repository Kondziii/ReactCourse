import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import { useState } from 'react';
import CartProvider from './store/CartProvider';

const App = () => {
  const [isCartshown, setIsCartshown] = useState(false);

  const openCartHandler = () => {
    setIsCartshown(true);
  };

  const hideCartHandler = () => {
    setIsCartshown(false);
  };

  return (
    <CartProvider>
      {isCartshown && <Cart onClose={hideCartHandler}></Cart>}
      <Header onCartOpen={openCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};

export default App;
