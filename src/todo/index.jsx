import React, {Component} from 'react'
import Form from './form'
import List from './list'

class Todo extends Component {
    render(){
        return (
            <>
                <h1>Todo</h1>
                <Form />
                <List />
            </>
        )
    }
}

export default Todo