import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }
    }

    clickHandler() {
        this.setState({
            message: 'Goodbye!'
        })
        console.log(this)
    }    

    render() {
        return (
            //Option 01: Using 'bind' keyword and binding the handler in the render() method
            // <div>
            //     <div>{this.state.message}</div>
            //     <button onClick={this.clickHandler.bind(this)}>Click</button>
            // </div>

            //Option 02: Using arrow functions in render() method
            <div>
                <div>{this.state.message}</div>
                <button onClick={() => this.clickHandler()}>Click</button>
            </div>
        )
    }
}

export default EventBind
