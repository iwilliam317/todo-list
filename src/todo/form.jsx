import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {save, handleChange} from '../actions/todo'

const Form = props => {
    const {save, handleChange} = props
    return (
        <div>
            <input type='text' placeholder='todo' onChange={handleChange} />
            <button type='button' onClick={save}>Create</button>
        </div>
    )
}
const mapDispatchToProps = dispatch => bindActionCreators({save, handleChange}, dispatch)
export default connect(null, mapDispatchToProps)(Form)