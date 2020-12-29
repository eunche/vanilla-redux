import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");


// store를 만들기위해 필요한것,
// data를 찾고/수정하는 함수가 reducer임
const countModifier = (state = 0) => {
  return state
};

// data를 저장하는 곳
const countStore = createStore(countModifier)

console.log(countStore)