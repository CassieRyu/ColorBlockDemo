
const initialState = {
    color: "red",
    height: "100px",
    width: "100px"
};

// action from 'Canvas_actions' [type, value]
const CanvasReducer = (oldState = initialState, action) => {

    switch(action.type){
        case "Change Color":
            const newState1 = Object.assign({}, oldState);
            newState1.color = action.value;
            return newState1;
        case "Change Height":
            const newState2 = Object.assign({}, oldState);
            newState2.height = action.value;
            return newState2;
        case "Change Width":
            const newState3 = Object.assign({}, oldState);
            newState3.width = action.value;
            return newState3;
        default:
            return oldState;
    }
};
export default CanvasReducer;