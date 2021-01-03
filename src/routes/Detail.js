import React, { useEffect } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

function Detail({ toDo, setLocalStorageToState }) {
    useEffect(() => {
        setLocalStorageToState();
    }, []);
    return (
        <>
            <h1>{toDo?.text}</h1>
            <h5>Created at: {toDo?.id}</h5>
        </>
    );
}

function mapStateToProps(state, ownProps) {
    const { match: { params: { id } } } = ownProps;
    return { toDo: state.find(toDo => toDo.id === parseInt(id)) }
}

function mapDispatchToProps(dispatch) {
    return {
        setLocalStorageToState: () => dispatch(actionCreators.setLocalStorageToState())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);