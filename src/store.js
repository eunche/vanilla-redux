import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

const addToDo = (text) => {
    return {
        type: ADD,
        text
    };
};

const deleteToDo = (id) => {
    return {
        type: DELETE,
        id
    };
};

const reducer = (state = [], action) => {
    state = (localStorage.getItem('state') !== null) ? JSON.parse(localStorage.getItem('state')) : state;
    switch (action.type) {
        case ADD:
            return [{ text: action.text, id: Date.now() }, ...state];
        case DELETE:
            return state.filter(toDo => toDo.id !== action.id);
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