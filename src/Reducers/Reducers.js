function myReducer(state, action) {
    if(typeof state === "undefined"){
        state = "Max!!!";
        console.log(state)
        return state;
    }
    return state;
}

export default myReducer;