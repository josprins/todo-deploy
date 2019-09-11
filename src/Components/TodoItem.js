import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoItem extends Component {
    
    // Change text-decoration for text 
    getStyle = () => {
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    } 

    // Toggles true or false on checked attribute of checkbox
    handleBox = () => this.props.todo.completed ? true : false
    

    render() {
        const { id, title } = this.props.todo
        return (
            <div className="item-div">
                <input className="checkbox" type='checkbox' onChange={this.props.markComplete.bind(this, id)} checked={this.handleBox()}/> {' '}
                <p style={this.getStyle()} className="item-txt">
                    {title}
                </p>
                <button className="dlt-btn" onClick={this.props.delTodo.bind(this, id)}>DELETE</button>
            </div>
        )
    }
}

// Proptypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}




