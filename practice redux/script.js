import { createStore } from "redux";
import { productsList } from "./productsList";

const initState = {
  products: productsList,
  cartItems: [],
  wishLists: [],
}

const CART_ADD_ITEM = 'cart/addItem'
const CART_REMOVE_ITEM = 'cart/removeItem'
const CART_ITEM_INCREASE_QUANTITY = 'cart/increaseItem'
const CART_ITEM_DECREASE_QUANTITY = 'cart/decreaseItem'
const WISHLIST_ADD_ITEM = 'wishlist/addItem'
const WISHLIST_REMOVE_ITEM = 'wishlist/removeItem'

function reducer(state=initState, action){
  switch(action.type){
    case CART_ADD_ITEM: 
      return {...state, cartItems: [...state.cartItems, action.payload]}
    case CART_REMOVE_ITEM: 
      return {...state, cartItems: state.cartItems.filter((cartItem) => cartItem.productId !== action.payload.productId)}
    case CART_ITEM_INCREASE_QUANTITY: 
      return {...state, cartItems: state.cartItems.map((cartItem) => {
        if(cartItem.productId === action.payload.productId){
          return {...cartItem, quantity: cartItem.quantity + action.payload.quantity}
        }
        return cartItem
      })}
    case CART_ITEM_DECREASE_QUANTITY: 
      return {...state, cartItems: state.cartItems.map((cartItem) => {
        if(cartItem.productId === action.payload.productId){
          return {...cartItem, quantity: cartItem.quantity - action.payload.quantity}
        }
        return cartItem
      }).filter((item) => item.quantity > 0)}
    case WISHLIST_ADD_ITEM: 
      return {...state, wishLists: [...state.wishLists, action.payload]}
    case WISHLIST_REMOVE_ITEM: 
      return {...state, wishLists: state.wishLists.filter((wishlistItem) => wishlistItem.productId !== action.payload.productId)}
    default: 
      return state;
  }
}


const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.())

console.log(store)

store.dispatch({type: CART_ADD_ITEM, payload: {productId: 1, quantity: 2}})
store.dispatch({type: CART_ADD_ITEM, payload: {productId: 2, quantity: 3}})
store.dispatch({type: CART_ADD_ITEM, payload: {productId: 3, quantity: 4}})
store.dispatch({type: CART_ADD_ITEM, payload: {productId: 4, quantity: 7}})

store.dispatch({type: CART_REMOVE_ITEM, payload: {productId: 2}})

store.dispatch({type: CART_ITEM_INCREASE_QUANTITY, payload: {productId: 1, quantity: 1}})
store.dispatch({type: CART_ITEM_INCREASE_QUANTITY, payload: {productId: 4, quantity: 2}})

store.dispatch({type: CART_ITEM_DECREASE_QUANTITY, payload: {productId: 4, quantity: 10}})

store.dispatch({type: WISHLIST_ADD_ITEM, payload: {productId: 1, quantity: 1}})
store.dispatch({type: WISHLIST_ADD_ITEM, payload: {productId: 2, quantity: 1}})

store.dispatch({type: WISHLIST_REMOVE_ITEM, payload: {productId: 1}})
































// import { combineReducers, createStore } from "redux";
// import cartReducer, {
//   addItemQuantity,
//   decreaseCartItemQuantity,
//   increaseCartItemQuantity,
//   removeItemQuantity,
// } from "./cartReducer";
// import productsReducer from "./productsReducer";
// import wishListReducer, {
//   wishListAddItem,
//   wishListRemoveItem,
// } from "./wishListReducer";

// const reducer = combineReducers({
//   products: productsReducer,
//   cartItems: cartReducer,
//   wishLists: wishListReducer,
// });

// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());
// console.log(store);

// store.dispatch(addItemQuantity(1, 2));
// store.dispatch(addItemQuantity(2, 6));
// store.dispatch(addItemQuantity(3, 4));
// store.dispatch(addItemQuantity(4, 3));

// store.dispatch(removeItemQuantity(3));

// store.dispatch(increaseCartItemQuantity(1, 2));

// store.dispatch(decreaseCartItemQuantity(1, 1));

// store.dispatch(wishListAddItem(1, 2));
// store.dispatch(wishListAddItem(2, 3));
// store.dispatch(wishListAddItem(3, 5));
// store.dispatch(wishListAddItem(4, 6));

// store.dispatch(wishListRemoveItem(1));
// store.dispatch(wishListRemoveItem(2));

