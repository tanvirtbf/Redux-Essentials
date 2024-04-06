let reduxState = {
  post: 0,
  name: "Tanvir Ahmed",
  age: 25,
};

//reducer function or updater function
function stateUpdater(state, action) {
  if(action.type === 'post/increment'){
    return { ...state, post: state.post + 1 };
  }else if(action.type === 'post/decrement'){
    return { ...state, post: state.post - 1 };
  }else if(action.type === 'post/incrementBy'){
    return {...state, post: state.post + action.payload}
  }
  return state;
}

let action = {
  type: 'increase-post'
}

// what redux will do

reduxState = stateUpdater(reduxState, {type: 'post/increment'});
reduxState = stateUpdater(reduxState, {type: 'post/decrement'});
reduxState = stateUpdater(reduxState, {type: 'post/incrementBy', payload: 10});

