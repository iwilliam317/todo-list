import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {save, handleChange} from '../actions/todo'

const Form = props => {
    const {save, handleChange, todo} = props
    return (
        <div className='centerDiv space'>
            <input type='text' onChange={handleChange} value={todo.description} />
            <button type='button' onClick={()=>save(todo.description)}>Create</button>
        </div>
    )
}
const mapStateToProps = state => ({todo: state.todo})
const mapDispatchToProps = dispatch => bindActionCreators({save, handleChange}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Form)