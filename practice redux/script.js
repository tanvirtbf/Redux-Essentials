import { createStore } from "redux";
import { myCreateStore } from "./own-redux";

const addButton = document.querySelector(".addBtn");
const decButton = document.querySelector(".decBtn");
const mulButton = document.querySelector(".mulBtn");

const initState = {
  count: 0,
  name: "Tanvir Ahmed",
  age: 25,
};

const INCREMENT = "increment";
const DECREMENT = "decrement";
const MULTIPLE = "multiple";

function reducer(state = initState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + action.payload };
    case DECREMENT:
      return { ...state, count: state.count - action.payload };
    case MULTIPLE:
      return { ...state, count: state.count * action.payload };
    default:
      return state;
  }
}

const store = createStore(reducer);
const myStore = myCreateStore(reducer);
console.log(store);
console.log(myStore);

const unSubscribe1 = myStore.subscribe(()=>{
  addButton.innerText = myStore.getState().count
  decButton.innerText = myStore.getState().count
  mulButton.innerText = myStore.getState().count
})

const unSubscribe2 = myStore.subscribe(()=>{
  console.log('hiii')
})
const unSubscribe3 = myStore.subscribe(()=>{
  console.log('hello')
})
addButton.innerText = myStore.getState().count;
decButton.innerText = myStore.getState().count;
mulButton.innerText = myStore.getState().count;

addButton.addEventListener("click", () => {
  myStore.dispatch({ type: INCREMENT, payload: 5 });
  unSubscribe3()
  console.log(myStore.getState());
});
decButton.addEventListener("click", () => {
  myStore.dispatch({ type: DECREMENT, payload: 3 });
  console.log(myStore.getState());
});
mulButton.addEventListener("click", () => {
  myStore.dispatch({ type: MULTIPLE, payload: 2 });
  console.log(myStore.getState());
});














// import { createStore } from "redux";

// const button = document.querySelector('.btn')

// const initState = {
//   count : 0,
//   name : 'Tanvir Ahmed',
//   age : 25,
// }

// const INCREMENT = 'increment'
// const DECREMENT = 'decrement'
// const MULTIPLE = 'multiple'

// function reducer(state=initState, action){
//   switch(action.type){
//     case INCREMENT :
//       return {...state, count: state.count + action.payload}
//     case DECREMENT :
//       return {...state, count: state.count - action.payload}
//     case MULTIPLE :
//       return {...state, count: state.count * action.payload}
//     default :
//       return state
//   }
// }

// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.())
// console.log(store)

// store.subscribe(()=>{
//   console.log(store.getState())
//   button.innerText = store.getState().count
// })

// button.innerText = store.getState().count

// button.addEventListener('click',()=>{
//   store.dispatch({type: INCREMENT, payload: 3})
// })

// store.dispatch({type: INCREMENT, payload: 3})
// store.dispatch({type: DECREMENT, payload: 2})
// store.dispatch({type: MULTIPLE, payload: 5})
