import {createStore} from 'redux'

const initialState = {
  post: 0,
  name: "Tanvir Ahmed",
  age: 25,
};

//reducer function or updater function
function reducer(state = initialState, action) {
  if(action.type === 'post/increment'){
    return { ...state, post: state.post + action.payload };
  }else if(action.type === 'post/decrement'){
    return { ...state, post: state.post - 1 };
  }else if(action.type === 'post/incrementBy'){
    return {...state, post: state.post + action.payload}
  }
  return state;
}

const store = createStore(reducer)
console.log(store)
console.log(store.getState())

store.dispatch({type:'post/decrement'})
console.log(store.getState())

store.dispatch({type: 'post/increment',payload: 3})
console.log(store.getState())

