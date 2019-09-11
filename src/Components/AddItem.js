import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class AddItem extends Component {
    state = {
        title: ''
    }

    // On change handler for input field
    onChange = e => {
        this.setState({
            title: e.target.value
        })
    }

    // On submit handler for form
    onSubmit = e => {
        e.preventDefault();
        this.props.addItem(this.state.title);
        this.setState({ title: '' });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <input 
                    type="text"
                    name="title"
                    style={{ flex: '10', padding: '5px' }}
                    placeholder="Add todo ..."
                    value={this.state.title} 
                    onChange={this.onChange}
                />
                <input 
                    type="submit"
                    value="Submit"
                    className="btn"
                    style={{ flex: '1' }}
                />
            </form>
        )
    }
}

// Proptypes
AddItem.propTypes = {
    addItem: PropTypes.func.isRequired
}
