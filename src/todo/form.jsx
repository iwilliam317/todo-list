import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {save} from '../actions/todo'

const Form = props => {
    const {save} = props
    return (
        <div>
            <input type='text' placeholder='todo' />
            <button type='button' onClick={save}>Create</button>
        </div>
    )
}
const mapDispatchToProps = dispatch => bindActionCreators({save}, dispatch)
export default connect(null, mapDispatchToProps)(Form)