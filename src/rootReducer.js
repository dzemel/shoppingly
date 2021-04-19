function rootReducer(state, action) {
  switch (action.type) {
    case "addItem":
      return { count: state.count + 1 };
    case "removeItem":
      return { count: state.count - 1 };
    default:
      throw new Error(`Unexpected action type: ${action.type}`);
  }
}

export default rootReducer;
