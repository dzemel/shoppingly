import rootReducer from "./rootReducer";
import React, { useReducer } from "react";
import Routes from "./Routes";
import initialState from "./data.json";
import DispatchContext from "./DispatchContext";
import ProductContext from "./ProductContext";

function App() {
  const [state, dispatch] = useReducer(rootReducer, {
    ...initialState,
    cart: [],
  });
  console.log(state.cart.length);

  return (
    <div className="App">
      <h1>{state.cart.length}</h1>
      <DispatchContext.Provider value={dispatch}>
        <ProductContext.Provider value={state}>
          <Routes />
        </ProductContext.Provider>
      </DispatchContext.Provider>
    </div>
  );
}

export default App;
