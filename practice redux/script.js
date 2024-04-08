import { createStore } from "redux";
import { myCreateStore } from "./own-redux";
import { productsList } from "./productsList";

const addButton = document.querySelector(".addBtn");
const decButton = document.querySelector(".decBtn");
const mulButton = document.querySelector(".mulBtn");

const initState = {
  products: productsList,
  cartItems: [],
  wishList: [],
}


const INCREMENT = "increment";
const DECREMENT = "decrement";
const MULTIPLE = "multiple";

function reducer(state = initState, action) {
  
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

