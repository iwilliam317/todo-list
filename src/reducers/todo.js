const INITIAL_STATE = {list: []}

const TodoReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'HANDLE_CHANGE':
            return {...state, description: action.payload}
        case 'SAVE_TODO':
            const id = Math.floor(Math.random() * 100);  
            const todo = {id, description: action.payload, done: false}
            const aux = state.list
            aux.push(todo)
            return {...state, list: aux}
        case 'REMOVE_TODO':
            const todoId = action.payload.id || 0
            const index = state.list.find((t, index) => {
                if(t === todoId) return index
            })
            const aux2 = state.list
            aux2.pop(index)
            return {...state, list: aux2}
        default:
            return state
    }
}

export default TodoReducer