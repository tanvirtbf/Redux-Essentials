import { combineReducers, createStore } from "redux";
import cartReducer, {
  addItemQuantity,
  decreaseCartItemQuantity,
  increaseCartItemQuantity,
  removeItemQuantity,
} from "./cartReducer";
import productsReducer from "./productsReducer";
import wishListReducer, {
  wishListAddItem,
  wishListRemoveItem,
} from "./wishListReducer";

const reducer = combineReducers({
  products: productsReducer,
  cartItems: cartReducer,
  wishLists: wishListReducer,
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());
console.log(store);

store.dispatch(addItemQuantity(1, 2));
store.dispatch(addItemQuantity(2, 6));
store.dispatch(addItemQuantity(3, 4));
store.dispatch(addItemQuantity(4, 3));

store.dispatch(removeItemQuantity(3));

store.dispatch(increaseCartItemQuantity(1, 2));

store.dispatch(decreaseCartItemQuantity(1, 1));

store.dispatch(wishListAddItem(1, 2));
store.dispatch(wishListAddItem(2, 3));
store.dispatch(wishListAddItem(3, 5));
store.dispatch(wishListAddItem(4, 6));

store.dispatch(wishListRemoveItem(1));
store.dispatch(wishListRemoveItem(2));

// import { combineReducers, createStore } from "redux";
// import cartReducer, {
//   CART_ADD_ITEM,
//   CART_ITEM_DECREASE_QUANTITY,
//   CART_ITEM_INCREASE_QUANTITY,
//   CART_REMOVE_ITEM,
// } from "./cartReducer";
// import productsReducer from "./productsReducer";
// import wishListReducer, { WISHLIST_ADD_ITEM, WISHLIST_REMOVE_ITEM } from "./wishListReducer";

// const reducer = combineReducers({
//   products: productsReducer,
//   cartItems: cartReducer,
//   wishLists: wishListReducer,
// })

// const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__?.()
// );

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
//   type: CART_ITEM_DECREASE_QUANTITY,
//   payload: { productId: 15 },
// });
// store.dispatch({
//   type: CART_ITEM_INCREASE_QUANTITY,
//   payload: { productId: 12 },
// });
// store.dispatch({
//   type: CART_ITEM_DECREASE_QUANTITY,
//   payload: { productId: 1 },
// });
// store.dispatch({ type: WISHLIST_ADD_ITEM, payload: { productId: 1 } });
// store.dispatch({ type: WISHLIST_ADD_ITEM, payload: { productId: 2 } });
// store.dispatch({ type: WISHLIST_ADD_ITEM, payload: { productId: 3 } });
// store.dispatch({ type: WISHLIST_ADD_ITEM, payload: { productId: 4 } });
// store.dispatch({ type: WISHLIST_REMOVE_ITEM, payload: { productId: 2 } });
// store.dispatch({ type: WISHLIST_REMOVE_ITEM, payload: { productId: 3 } });

// console.log(store.getState());
