import React from 'react'
import { connect } from 'react-redux'
import { remove, markAsDone } from '../actions/todo';
import {bindActionCreators} from 'redux'

const List = props => {
    const {list} = props.todo
    const {remove, markAsDone} = props
    return (
        <div className='list'>
            <ul>
                {list.map((l, index) => 
                <li key={index}>
                    <span className={l.done ? 'done': ''}>{l.description} {l.done}</span>
                    <button onClick={()=> markAsDone(l)}>
                        <i className='glyphicon glyphicon-ok' aria-hidden='true'></i>
                    </button>
                    <button onClick={()=>remove(l)}>
                        <i className='glyphicon glyphicon-trash' aria-hidden='true'></i>
                    </button>
                </li>)}
            </ul>
        </div>
    )
}

const mapDispatchToProps = dispacht => bindActionCreators({remove, markAsDone}, dispacht)
const mapStateToProps = state => ({ todo: state.todo })
export default connect(mapStateToProps, mapDispatchToProps)(List)