const WISHLIST_ADD_ITEM = "wishList/addItem";
const WISHLIST_REMOVE_ITEM = "wishList/removeItem";

export function wishListReducer(state=[],action){
  switch (action.type) {
    case WISHLIST_ADD_ITEM:
      return { ...state, wishLists: [...state.wishLists, action.payload] };
    case WISHLIST_REMOVE_ITEM:
      return {
        ...state,
        wishLists: state.wishLists.filter(
          (item) => item.productId !== action.payload.productId
        ),
      };
    default:
      return state;
  }
}