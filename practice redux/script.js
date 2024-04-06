import {createStore} from 'redux'


let reduxState = {
  post: 0,
  name: "Tanvir Ahmed",
  age: 25,
};

//reducer function or updater function
function reducer(state = reduxState, action) {
  if(action.type === 'post/increment'){
    return { ...state, post: state.post + 1 };
  }else if(action.type === 'post/decrement'){
    return { ...state, post: state.post - 1 };
  }else if(action.type === 'post/incrementBy'){
    return {...state, post: state.post + action.payload}
  }
  return state;
}

const store = createStore(reducer)
console.log(store.getState())
