//Action Types
const WISHLIST_ADD_ITEM = 'wishlist/addItem'
const WISHLIST_REMOVE_ITEM = 'wishlist/removeItem'

//Action Creator
export function wishListAddItem(productId,quantity){
  return {
    type: WISHLIST_ADD_ITEM,
    payload: {productId,quantity}
  }
}
export function wishListRemoveItem(productId){
  return {
    type: WISHLIST_REMOVE_ITEM,
    payload: {productId}
  }
}

//Reducer
export default function wishListReducer(state=[], action){
  switch(action.type){
    case WISHLIST_ADD_ITEM: 
      return [...state, action.payload]
    case WISHLIST_REMOVE_ITEM: 
      return state.filter((item) => item.productId !== action.payload.productId)
    default: 
      return state;
  }
}




































// //Action Types
// const WISHLIST_ADD_ITEM = "wishlist/addItem";
// const WISHLIST_REMOVE_ITEM = "wishlist/removeItem";

// //Action Creators
// export function wishListAddItem(productId, quantity) {
//   return {
//     type: WISHLIST_ADD_ITEM,
//     payload: { productId: productId, quantity: quantity },
//   };
// }
// export function wishListRemoveItem(productId) {
//   return {
//     type: WISHLIST_REMOVE_ITEM,
//     payload: { productId },
//   };
// }

// //Reducer
// export default function wishListReducer(state = [], action) {
//   switch (action.type) {
//     case WISHLIST_ADD_ITEM:
//       return [...state, action.payload];
//     case WISHLIST_REMOVE_ITEM:
//       return state.filter(
//         (item) => item.productId !== action.payload.productId
//       );
//     default:
//       return state;
//   }
// }


