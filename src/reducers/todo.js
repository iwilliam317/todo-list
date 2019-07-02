const INITIAL_STATE = {list: []}

const TodoReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'HANDLE_CHANGE':
            return {...state, description: action.payload}
        case 'SAVE_TODO':
            const todo = {description: action.payload, done: false}
            const aux = state.list
            aux.push(todo)
            return {...state, list: aux}
        default:
            return state
    }
}

export default TodoReducer