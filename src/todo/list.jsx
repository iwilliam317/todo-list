import React from 'react'
import {connect} from 'react-redux'

const List = props => (
    <div>{props.todo.list.map(l => l.description)}</div>
)

const mapStateToProps = state => ({todo: state.todo})
export default connect(mapStateToProps)(List)