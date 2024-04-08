import { createStore } from "redux";
import { productsList } from "./productsList";

const initState = {
  products: productsList,
  cartItems: [],
  wishLists: [],
}

const CART_ADD_ITEM = 'cart/add'
const CART_REMOVE_ITEM = 'cart/remove'

function reducer(state=initState, action){
  switch(action.type){
    case CART_ADD_ITEM : 
      return {...state, cartItems: [...state.cartItems, action.payload]}
    case CART_REMOVE_ITEM : 
      return {...state, cartItems: state.cartItems.filter((cartItem) => cartItem.productId !== action.payload.productId)}
    default : 
      return state;
  }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.())
console.log(store)


store.dispatch({type: CART_ADD_ITEM, payload: {productId: 1, quantity: 1}})
store.dispatch({type: CART_ADD_ITEM, payload: {productId: 2, quantity: 1}})
store.dispatch({type: CART_ADD_ITEM, payload: {productId: 3, quantity: 1}})
store.dispatch({type: CART_ADD_ITEM, payload: {productId: 4, quantity: 1}})
store.dispatch({type: CART_REMOVE_ITEM, payload: {productId: 2}})
store.dispatch({type: CART_REMOVE_ITEM, payload: {productId: 4}})








// import { createStore } from "redux";
// import { productsList } from "./productsList";

// const initState = {
//   products: productsList,
//   cartItems: [],
//   wishList: [],
// };

// const CART_ADD_ITEM = "cart/addItem";
// const CART_REMOVE_ITEM = "cart/removeItem";

// function reducer(state = initState, action) {
//   switch (action.type) {
//     case CART_ADD_ITEM:
//       return { ...state, cartItems: [...state.cartItems, action.payload] };
//     case CART_REMOVE_ITEM:
//       return {
//         ...state,
//         cartItems: state.cartItems.filter(
//           (cartItem) => cartItem.productId !== action.payload.productId
//         ),
//       };
//     default:
//       return state;
//   }
// }

// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

// console.log(store);

// store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 1, quantity: 1 } });
// store.dispatch({
//   type: CART_ADD_ITEM,
//   payload: { productId: 12, quantity: 1 },
// });
// store.dispatch({
//   type: CART_ADD_ITEM,
//   payload: { productId: 15, quantity: 1 },
// });
// store.dispatch({ type: CART_REMOVE_ITEM, payload: { productId: 12 } });
