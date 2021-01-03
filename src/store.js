import { configureStore, createSlice } from "@reduxjs/toolkit";

/*
createAction, createReducer를 사용해 작성한 코드
*/
// const addToDo = createAction("ADD");
// const deleteToDo = createAction("DELETE");
// const setLocalStorageToState = createAction("SETLOCAL");

// const reducer = createReducer([], {
//     [addToDo]: (state, action) => {
//         state.push({ text: action.payload, id: Date.now() });
//     },
//     [deleteToDo]: (state, action) => state.filter(toDo => toDo.id !== action.payload),
//     [setLocalStorageToState]: (state) => (localStorage.getItem('state') !== null) ? JSON.parse(localStorage.getItem('state')) : state
// });
// 대체 코드
const toDos = createSlice({
    name: 'toDosReducer',
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push({ text: action.payload, id: Date.now() });
        },
        remove: (state, action) => state.filter(toDo => toDo.id !== action.payload),
        setLocalStorageToState: (state) => (localStorage.getItem('state') !== null) ? JSON.parse(localStorage.getItem('state')) : state
    }
});




const store = configureStore({ reducer: toDos.reducer });

const subscribeSetLocalStorage = () => {
    const state = store.getState();
    localStorage.setItem('state', JSON.stringify(state))

}

store.subscribe(subscribeSetLocalStorage);


export const { add, remove, setLocalStorageToState } = toDos.actions;

export default store;