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
                <div className='rights'>
                    <p><small>Created by <a href="https://github.com/iwilliam317">William Shinji</a></small></p>
                </div>
            </>
        )
    }
}

export default Todo