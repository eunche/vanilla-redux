import { createStore } from "redux";
import { createAction, createReducer } from "@reduxjs/toolkit";

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
const setLocalStorageToState = createAction("SETLOCAL");



// const reducer = (state = [], action) => {
//     state = (localStorage.getItem('state') !== null) ? JSON.parse(localStorage.getItem('state')) : state;
//     switch (action.type) {
//         case addToDo.type:
//             return [{ text: action.payload, id: Date.now() }, ...state];
//         case deleteToDo.type:
//             return state.filter(toDo => toDo.id !== action.payload);
//         default:
//             return state;
//     }
// }
// 대체 코드
const reducer = createReducer([], {
    [addToDo]: (state, action) => {
        state.push({ text: action.payload, id: Date.now() });
    },
    [deleteToDo]: (state, action) => state.filter(toDo => toDo.id !== action.payload),
    [setLocalStorageToState]: (state) => (localStorage.getItem('state') !== null) ? JSON.parse(localStorage.getItem('state')) : state
});


const store = createStore(reducer);

const subscribeSetLocalStorage = () => {
    const state = store.getState();
    localStorage.setItem('state', JSON.stringify(state))

}

store.subscribe(subscribeSetLocalStorage);



export const actionCreators = {
    addToDo,
    deleteToDo,
    setLocalStorageToState
}

export default store;