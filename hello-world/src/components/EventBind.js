import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }
    }

    //Using 'bind' keyword and binding the handler in the render() method
    clickHandler() {
        this.setState({
            message: 'Goodbye!'
        })
        console.log(this)
    }    

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler.bind(this)}>Click</button>
            </div>
        )
    }
}

export default EventBind
