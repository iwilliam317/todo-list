const save = todo => ({
    type: 'SAVE_TODO',
    payload: todo
})

const handleChange = event => ({
    type: 'HANDLE_CHANGE',
    payload: event.target.value
})

const remove = todo => ({
    type: 'REMOVE_TODO',
    payload: todo
})

export {save, handleChange, remove}