import React from 'react'
import {connect} from 'react-redux'

const List = props => (
    <div>{props.list}</div>
)

const mapStateToProps = state => ({list: state.todo.list})
export default connect(mapStateToProps)(List)