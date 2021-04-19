import React from "react";

function rootReducer(state, action) {
  
  switch (action.type) {
    case "addItem":
      return { ...state, cart: [...state.cart, {...action.id}] };
    case "removeItem":
      console.log(state.cart[0].id,"current item id");
      // console.log(action.id.id,"current item id");

      return { ...state, cart: state.cart.filter(i => i.id !== action.id.id)};
    default:
      throw new Error(`Unexpected action type: ${action.type}`);
  }
}

export default rootReducer;
