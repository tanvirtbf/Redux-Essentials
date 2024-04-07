export function myCreateStore() {
  let state 
  const store = {
    getState() {
      return state
    },
    dispatch() {},
    subscribe() {},
  };
  return store;
}
