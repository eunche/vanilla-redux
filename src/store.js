import { createStore } from "redux";
import { createAction } from "@reduxjs/toolkit";

// const ADD = "ADD";
// const DELETE = "DELETE";

// const addToDo = (text) => {
//     return {
//         type: ADD,
//         text
//     };
// };

// const deleteToDo = (id) => {
//     return {
//         type: DELETE,
//         id
//     };
// };
// 대체 코드
const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");
console.log(addToDo(), deleteToDo())




const reducer = (state = [], action) => {
    state = (localStorage.getItem('state') !== null) ? JSON.parse(localStorage.getItem('state')) : state;
    switch (action.type) {
        case addToDo.type:
            return [{ text: action.payload, id: Date.now() }, ...state];
        case deleteToDo.type:
            return state.filter(toDo => toDo.id !== action.payload);
        default:
            return state;
    }
}

const store = createStore(reducer);

const setLocalStorage = () => {
    const state = store.getState();
    localStorage.setItem('state', JSON.stringify(state))

}

store.subscribe(setLocalStorage);



export const actionCreators = {
    addToDo,
    deleteToDo
}

export default store;