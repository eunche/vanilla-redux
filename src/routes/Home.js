import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { add, setLocalStorageToState } from "../store";
import ToDo from "../components/ToDo";


function Home({ toDos, addToDo, setLocalStorageToState }) {
    const [text, setText] = useState("");
    function onChange(e) {
        setText(e.target.value);
    }
    function onSubmit(e) {
        e.preventDefault();
        addToDo(text);
        setText("");
    }
    useEffect(() => {
        setLocalStorageToState();
    }, []);
    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} />
                <button>Add</button>
            </form>
            <ul>
                {toDos.map(toDo => (
                    <ToDo {...toDo} key={toDo.id} />
                ))}
            </ul>
        </>
    )
}

function mapStateToProps(state) {
    return { toDos: state }
}

function mapDispatchToProps(dispatch) {
    return {
        addToDo: (text) => dispatch(add(text)),
        setLocalStorageToState: () => dispatch(setLocalStorageToState())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);