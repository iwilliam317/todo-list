const INITIAL_STATE = {list: []}

const TodoReducer = (state = INITIAL_STATE, action) => {
   let list = [] 
   let todoId
    switch(action.type){
        case 'HANDLE_CHANGE':
            return {...state, description: action.payload}
        case 'SAVE_TODO':
            const id = Math.floor(Math.random() * 100);  
            const todo = {id, description: action.payload, done: false}
            list = state.list
            list.push(todo)
            return {...state, description: ''}
        case 'REMOVE_TODO':
            todoId = action.payload.id || 0
            const index = state.list.find((t, index) => {
                if(t === todoId) return index
            })
            list = state.list
            list.pop(index)
            return {...state, list}
        case 'TODO_DONE':
            todoId = action.payload.id || 0
            list = state.list
            list.find((todo, index) => {
                if(todo.id === todoId){
                    todo.done = !todo.done
                } 
            })
            return {...state, list}
        default:
            return state
    }
}

export default TodoReducer