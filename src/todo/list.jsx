import React from 'react'
import { connect } from 'react-redux'
import { remove, markAsDone } from '../actions/todo';
import {bindActionCreators} from 'redux'

const List = props => {
    const {list} = props.todo
    const {remove, markAsDone} = props
    return (
        <div>
            <ul>
                {list.map((l, index) => <li key={index}>{l.id} {l.description} {l.done}<button onClick={()=> markAsDone(l)}>^</button> <button onClick={()=>remove(l)}>x</button></li>)}
            </ul>
        </div>
    )
}

const mapDispatchToProps = dispacht => bindActionCreators({remove, markAsDone}, dispacht)
const mapStateToProps = state => ({ todo: state.todo })
export default connect(mapStateToProps, mapDispatchToProps)(List)