const save = () => {
    console.log('saving todo...')
}

const handleChange = event => ({
    type: 'HANDLE_CHANGE',
    payload: event.target.value
})

export {save, handleChange}