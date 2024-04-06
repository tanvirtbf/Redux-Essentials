let reduxState = {
  post: 0,
  name: "Tanvir Ahmed",
  age: 25,
};

//reducer function or updater function
function stateUpdater(state) {
  return { ...state, post: state.post + 1 };
}

// what redux will do

reduxState = stateUpdater(reduxState);
reduxState = stateUpdater(reduxState);
reduxState = stateUpdater(reduxState);
