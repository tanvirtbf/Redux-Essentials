let state = {
  count: 0,
};

// Muted means directly modify kora 

// state.count = state.count + 1;
// state.count = state.count + 1;
// state.count = state.count + 1;

let prevState = state;

function increment() {
  // Mutating state
  //state.count += 1;

  //Not Mutating state
  state = {count : state.count + 1}
}

increment()
console.log(state);
increment()
console.log(state);
increment()
console.log(state);
increment()
console.log(state);
increment()
console.log(state);
