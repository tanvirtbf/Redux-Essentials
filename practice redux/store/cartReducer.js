//Action Types
const CART_ADD_ITEM = 'cart/addItem'
const CART_REMOVE_ITEM = 'cart/removeItem'
const CART_ITEM_INCREASE_QUANTITY = 'cart/increaseItem'
const CART_ITEM_DECREASE_QUANTITY = 'cart/decreaseItem'

//Action Creators
export function cartAddItem(productId, quantity){
  return {
    type: CART_ADD_ITEM,
    payload: {productId: productId, quantity: quantity}
  }
}
export function cartRemoveItem(productId){
  return {
    type: CART_REMOVE_ITEM,
    payload: {productId: productId}
  }
}
export function cartIncreaseItem(productId, quantity){
  return {
    type: CART_ITEM_INCREASE_QUANTITY,
    payload: {productId: productId, quantity: quantity}
  }
}
export function cartdecreaseItem(productId, quantity){
  return {
    type: CART_ITEM_DECREASE_QUANTITY,
    payload: {productId: productId, quantity: quantity}
  }
}


//Reducer
export default function cartReducer(state=[], action){
  switch(action.type){
    case CART_ADD_ITEM:
      return [...state, action.payload]
    case CART_REMOVE_ITEM: 
      return state.filter((item) => item.productId !== action.payload.productId)
    case CART_ITEM_INCREASE_QUANTITY: 
      return state.map((item)=> {
        if(item.productId === action.payload.productId){
          return {...item, quantity: item.quantity + action.payload.quantity}
        }
        return item;
      })
    case CART_ITEM_DECREASE_QUANTITY:
      return state.map((item) => {
        if(item.productId === action.payload.productId){
          return {...item, quantity: item.quantity - action.payload.quantity}
        }
        return item;
      }).filter((item) => item.quantity > 0)
    default: 
      return state;
  }
}




































// //Action Types
// const CART_ADD_ITEM = "cart/addItem";
// const CART_REMOVE_ITEM = "cart/removeItem";
// const CART_ITEM_INCREASE_QUANTITY = "cart/increaseItem";
// const CART_ITEM_DECREASE_QUANTITY = "cart/decreaseItem";

// //Action Creators
// export function decreaseCartItemQuantity(productId, quantity) {
//   return {
//     type: CART_ITEM_DECREASE_QUANTITY,
//     payload: { productId: productId, quantity: quantity },
//   };
// }
// export function increaseCartItemQuantity(productId, quantity) {
//   return {
//     type: CART_ITEM_INCREASE_QUANTITY,
//     payload: { productId, quantity },
//   };
// }
// export function addItemQuantity(productId, quantity) {
//   return {
//     type: CART_ADD_ITEM,
//     payload: { productId: productId, quantity: quantity },
//   };
// }
// export function removeItemQuantity(productId) {
//   return {
//     type: CART_REMOVE_ITEM,
//     payload: { productId },
//   };
// }

// //Reducer
// export default function cartReducer(state = [], action) {
//   switch (action.type) {
//     case CART_ADD_ITEM:
//       return [...state, action.payload];
//     case CART_REMOVE_ITEM:
//       return state.filter(
//         (cartItem) => cartItem.productId !== action.payload.productId
//       );
//     case CART_ITEM_INCREASE_QUANTITY:
//       return state.map((item) => {
//         if (item.productId === action.payload.productId) {
//           return { ...item, quantity: item.quantity + action.payload.quantity };
//         }
//         return item;
//       });
//     case CART_ITEM_DECREASE_QUANTITY:
//       return state
//         .map((item) => {
//           if (item.productId === action.payload.productId) {
//             return {
//               ...item,
//               quantity: item.quantity - action.payload.quantity,
//             };
//           }
//           return item;
//         })
//         .filter((cartItem) => cartItem.quantity > 0);
//     default:
//       return state;
//   }
// }


