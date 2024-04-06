import { createStore } from "redux";

const initState = {
  count : 0,
  name : 'Tanvir Ahmed',
  age : 25,
}

const INCREMENT = 'increment'
const DECREMENT = 'decrement'
const MULTIPLE = 'multiple'

function reducer(state=initState, action){
  switch(action.type){
    case INCREMENT : 
      return {...state, count: state.count + action.payload}
    case DECREMENT : 
      return {...state, count: state.count - action.payload}
    case MULTIPLE : 
      return {...state, count: state.count * action.payload}
    default : 
      return state
  }
}

const store = createStore(reducer)
console.log(store)

store.subscribe(()=>{
  console.log(store.getState())
})

store.dispatch({type: INCREMENT, payload: 3})
store.dispatch({type: DECREMENT, payload: 2})
store.dispatch({type: MULTIPLE, payload: 5})




























// import { createStore } from "redux";

// const initState = {
//   count: 0,
//   name: "Tanvir Ahmed",
//   age: 25,
// };

// const INCREMENT = 'increment'
// const DECREMENT = 'decrement'
// const MULTIPLE = 'multiple'

// function reducer(state = initState, action) {

//   switch(action.type){
//     case INCREMENT : 
//       return { ...state, count: state.count + action.payload }
//     case DECREMENT : 
//       return { ...state, count: state.count - action.payload }
//     case MULTIPLE : 
//       return { ...state, count: state.count * action.payload }
//     default : 
//       return state
//   }

//   // if (action.type === INCREMENT) {
//   //   return { ...state, count: state.count + action.payload };
//   // } else if (action.type === DECREMENT) {
//   //   return { ...state, count: state.count - action.payload };
//   // } else if (action.type === MULTIPLE) {
//   //   return { ...state, count: state.count * action.payload };
//   // } else {
//   //   return state;
//   // }
// }

// const store = createStore(reducer);
// console.log(store)
// store.subscribe(()=>{
//   console.log(store.getState())
// })
// store.dispatch({ type: INCREMENT, payload: 3 });
// store.dispatch({ type: DECREMENT, payload: 2 });
// store.dispatch({ type: MULTIPLE, payload: 5 });
