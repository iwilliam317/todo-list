import React from 'react'
import { connect } from 'react-redux'
import { remove } from '../actions/todo';
import {bindActionCreators} from 'redux'

const List = props => {
    const {list} = props.todo
    const {remove} = props
    return (
        <div>
            <ol>
                {list.map((l, index) => <li key={index}>{l.id} {l.description} <button onClick={()=>remove(l)}>x</button></li>)}
            </ol>
        </div>
    )
}

const mapDispatchToProps = dispacht => bindActionCreators({remove}, dispacht)
const mapStateToProps = state => ({ todo: state.todo })
export default connect(mapStateToProps, mapDispatchToProps)(List)