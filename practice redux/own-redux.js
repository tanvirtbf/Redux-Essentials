export function myCreateStore(reducer) {
  let state 
  const store = {
    getState() {
      return state
    },
    dispatch(action) {
      state = reducer(state,action)
    },
    subscribe() {},
  };

  store.dispatch({type: '@INIT'})
  return store;
}
