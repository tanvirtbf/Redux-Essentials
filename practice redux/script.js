import { createStore } from "redux";
import { productsList } from "./productsList";

const initState = {
  products: productsList,
  cartItems: [],
  wishLists: [],
};

const CART_ADD_iTEM = "cart/add";
const CART_REMOVE_ITEM = "cart/remove";
const CART_INCREASE_ITEM_QUANTITY = "cart/increaseItemQuantity";
const CART_DECREASE_ITEM_QUANTITY = "cart/decreaseItemQuantity";

function reducer(state = initState, action) {
  switch (action.type) {
    case CART_ADD_iTEM:
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.productId !== action.payload.productId
        ),
      };
    case CART_INCREASE_ITEM_QUANTITY:
      return {...state, cartItems: state.cartItems.map((cartItem)=>{
        if(cartItem.productId === action.payload.productId){
          return {...cartItem, quantity: cartItem.quantity + action.payload.quantity}
        }
        return cartItem;
      })}
    case CART_DECREASE_ITEM_QUANTITY: 
      return {...state, cartItems: state.cartItems.map((cartItem) =>{
        if(cartItem.productId === action.payload.productId){
          return {...cartItem, quantity: cartItem.quantity - action.payload.quantity}
        }
        return cartItem
      })}
    default:
      return state;
  }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());
console.log(store);

store.dispatch({ type: CART_ADD_iTEM, payload: { productId: 1, quantity: 1 } });
store.dispatch({ type: CART_ADD_iTEM, payload: { productId: 2, quantity: 1 } });
store.dispatch({ type: CART_ADD_iTEM, payload: { productId: 3, quantity: 1 } });
store.dispatch({ type: CART_ADD_iTEM, payload: { productId: 4, quantity: 1 } });
store.dispatch({ type: CART_REMOVE_ITEM, payload: { productId: 1 } });
store.dispatch({ type: CART_REMOVE_ITEM, payload: { productId: 4 } });
store.dispatch({ type: CART_INCREASE_ITEM_QUANTITY, payload: { productId: 2, quantity: 2} });
store.dispatch({ type: CART_DECREASE_ITEM_QUANTITY, payload: { productId: 3, quantity: 1} });









// import { createStore } from "redux";
// import { productsList } from "./productsList";

// const initState = {
//   products: productsList,
//   cartItems: [],
//   wishList: [],
// };

// const CART_ADD_ITEM = "cart/addItem";
// const CART_REMOVE_ITEM = "cart/removeItem";
// const CART_ITEM_INCREASE_QUANTITY = "cart/increaseItemQuantity";
// const CART_ITEM_DECREASE_QUANTITY = "cart/decreaseItemQuantity";

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
//     case CART_ITEM_INCREASE_QUANTITY:
//       return {
//         ...state,
//         cartItems: state.cartItems.map((cartItem) => {
//           if (cartItem.productId === action.payload.productId) {
//             return { ...cartItem, quantity: cartItem.quantity + 1 };
//           }
//           return cartItem;
//         }),
//       };
//     case CART_ITEM_DECREASE_QUANTITY:
//       return {
//         ...state,
//         cartItems: state.cartItems.map((cartItem) => {
//           if (cartItem.productId === action.payload.productId) {
//             return { ...cartItem, quantity: cartItem.quantity - 1 };
//           }
//           return cartItem;
//         }),
//       };
//     default:
//       return state;
//   }
// }

// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

// console.log(store);

// store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 1, quantity: 5 } });
// store.dispatch({
//   type: CART_ADD_ITEM,
//   payload: { productId: 12, quantity: 1 },
// });
// store.dispatch({
//   type: CART_ADD_ITEM,
//   payload: { productId: 15, quantity: 1 },
// });
// store.dispatch({
//   type: CART_ADD_ITEM,
//   payload: { productId: 6, quantity: 1 },
// });
// store.dispatch({ type: CART_REMOVE_ITEM, payload: { productId: 6 } });

// store.dispatch({
//   type: CART_ITEM_INCREASE_QUANTITY,
//   payload: { productId: 12 },
// });
// store.dispatch({
//   type: CART_ITEM_INCREASE_QUANTITY,
//   payload: { productId: 12 },
// });
// store.dispatch({
//   type: CART_ITEM_DECREASE_QUANTITY,
//   payload: { productId: 1 },
// });

// console.log(store.getState());
