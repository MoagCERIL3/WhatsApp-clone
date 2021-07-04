export const initialState ={
    user : null,
    currentRoom : {}
}

export const actionTypes ={
    SET_USER: "SET_USER",
    SET_ROOM: "SET_ROOM",
};

const reducer = (state,action) =>{
    console.log(action);
    switch(action.type){
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user,
            };
       
        case actionTypes.SET_ROOM:

            return {
                ...state,
                currentRoom: action.item,
            };
        default:
            return state;
    }

};



export default reducer;