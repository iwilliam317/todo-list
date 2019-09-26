import React, {Component} from 'react'
import Form from './form'
import List from './list'

class Todo extends Component {
    render(){
        return (
            <>
                <div className='centerDiv'>
                    <h1 className='title'>todo list</h1>
                </div>
                <Form />
                <List />
            </>
        )
    }
}

export default Todo