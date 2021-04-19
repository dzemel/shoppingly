import rootReducer from "./rootReducer";
import React, { useReducer } from "react";
import initialState from "./data.json";
import ProductsList from "./ProductsList";
import DispatchContext from "./DispatchContext";
import ProductContext from "./ProductContext";

function App() {
  const [state, dispatch] = useReducer(rootReducer, {...initialState, cart:[] });
  console.log(state.cart.length);

  return (
    <div className="App">
      <h1>{state.cart.length}</h1>
      <DispatchContext.Provider value={dispatch}>
        <ProductContext.Provider value={state}>
          <ProductsList />
        </ProductContext.Provider>
      </DispatchContext.Provider>
    </div>
  );
}

export default App;
