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
            return {...state}
        case 'REMOVE_TODO':
            todoId = action.payload.id || 0
            const index = state.list.find((t, index) => {
                if(t === todoId) return index
            })
            list = state.list
            list.pop(index)
            return {...state, list}
        case 'TODO_DONE':
            console.log('sdsasdf')
            todoId = action.payload.id || 0
            list = state.list
            const todoToBeEdited = list.find((todo, index) => {
                if(todo === todoId){
                    list.pop(index)
                    return todo
                } 
            })
            todoToBeEdited = {...todo, done: true}
            list.push(todoToBeEdited)
            console.log(list)
            return {...state, list}
        default:
            return state
    }
}

export default TodoReducer