import { combineReducers, createStore } from "redux";
import productsReducer from "./productsReducer";
import wishListReducer, { wishListAddItem, wishListRemoveItem } from "./wishListReducer";
import cartReducer, { cartAddItem, cartdecreaseItem, cartIncreaseItem, cartRemoveItem } from './cartReducer'

const reducer = combineReducers({
  products: productsReducer,
  cartItems: cartReducer,
  wishLists: wishListReducer,
})

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.())

// console.log(store)

// store.dispatch(cartAddItem(1,2))
// store.dispatch(cartAddItem(2,3))
// store.dispatch(cartAddItem(3,5))
// store.dispatch(cartAddItem(4,8))

// store.dispatch(cartRemoveItem(3))

// store.dispatch(cartIncreaseItem(2,3))

// store.dispatch(cartdecreaseItem(2,4))

// store.dispatch(wishListAddItem(1,2))
// store.dispatch(wishListAddItem(2,4))
// store.dispatch(wishListAddItem(3,1))

// store.dispatch(wishListRemoveItem(2))






























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

