import React from 'react'
import { connect } from 'react-redux'

const List = props => {
    const { list } = props.todo
    return (
        <div>
            <ol>
                {list.map((l, index) => <li key={index}>{l.description}</li>)}
            </ol>
        </div>
    )
}

const mapStateToProps = state => ({ todo: state.todo })
export default connect(mapStateToProps)(List)