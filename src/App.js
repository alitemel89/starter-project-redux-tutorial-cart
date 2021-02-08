import React from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import cartItems from "./cart-items";

import { createStore } from 'redux';
import reducer from './reducer';
import { Provider } from 'react-redux';

const initialStore = {
  cart: cartItems,
  total: 105,
  amount: 5
}


const store = createStore(reducer, initialStore)


console.log(store.getState());

function App() {
  // cart setup

  return (
    <Provider store={store} >
      <Navbar  />
      <CartContainer />
    </Provider>
  );
}

export default App;
