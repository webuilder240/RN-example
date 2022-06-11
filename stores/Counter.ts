import { createStore } from "../lib/CreateStore";

type CountState = {
  count: number
}

const state: CountState = {
  count: 0
}

const actions =  {
  increment: () => {
    state.count+=1
  },
  decrement: () => {
    state.count-=1
  }
}

export default createStore({state, actions})