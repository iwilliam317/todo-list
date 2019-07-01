const INITIAL_STATE = {}

const TodoReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'HANDLE_CHANGE':
            return {...state, description: action.payload}
        default:
            return state
    }
}

export default TodoReducer