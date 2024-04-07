import { createStore } from "redux";
import { myCreateStore } from "./own-redux";


const addButton = document.querySelector('.addBtn')
const decButton = document.querySelector('.decBtn')
const mulButton = document.querySelector('.mulBtn')

const initState = {
  count : 0,
  name: 'Tanvir Ahmed',
  age : 25,
}

const INCREMENT = 'increment'
const DECREMENT = 'decrement'
const MULTIPLE = 'multiple'

function reducer(state=initState, action){
  switch(action.type){
    case INCREMENT: 
      return {...state, count: state.count + action.payload}
    case DECREMENT: 
      return {...state, count: state.count - action.payload}
    case MULTIPLE: 
      return {...state, count: state.count * action.payload}
    default: 
      return state;
  }
}


const store = createStore(reducer)
const myStore = myCreateStore(reducer)
console.log(store)
console.log(myStore)


store.subscribe(()=>{
  addButton.innerText = store.getState().count
  decButton.innerText = store.getState().count
  mulButton.innerText = store.getState().count
})
addButton.innerText = store.getState().count
decButton.innerText = store.getState().count
mulButton.innerText = store.getState().count


addButton.addEventListener('click',()=>{
  store.dispatch({type: INCREMENT, payload: 5})
})
decButton.addEventListener('click',()=>{
  store.dispatch({type: DECREMENT, payload: 3})
})
mulButton.addEventListener('click',()=>{
  store.dispatch({type: MULTIPLE, payload: 2})
})

































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





























