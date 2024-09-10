import { createStore } from "redux";

const INITIAL_VALUE = {
  counter: 0,
  privacy: false,
};

const counterReducer = (store = INITIAL_VALUE, action) => {
  let newStore = store;
  // console.log("Action receivd in reducer", action);
  if (action.type === "INCREMENT") {
    newStore = { counter: store.counter + 1, privacy: store.privacy };
  } else if (action.type === "DECREMENT") {
    newStore = { counter: store.counter - 1, privacy: store.privacy };
  } else if (action.type === "ADD") {
    newStore = {
      counter: store.counter + Number(action.payload.num),
      privacy: store.privacy,
    };
  } else if (action.type === "SUBSTRACT") {
    newStore = {
      counter: store.counter - Number(action.payload.num),
      privacy: store.privacy,
    };
  } else if (action.type === "PRIVACY") {
    newStore = { privacy: !store.privacy, counter: store.counter };
  }
  return newStore;
};

const counterStore = createStore(counterReducer);

export default counterStore;
