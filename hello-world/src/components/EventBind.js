import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }

        //Option 03: Binding the event handler in the constructor
        // this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler() {
    //     this.setState({
    //         message: 'Goodbye!'
    //     })
    //     console.log(this)
    // }
    
    //Option 04: Use an arrow function as a class property
    clickHandler = () => {
        this.setState({
            message: 'Goodbye!'
        })
    }

    render() {
        return (
            //Option 01: Using 'bind' keyword and binding the handler in the render() method
            // <div>
            //     <div>{this.state.message}</div>
            //     <button onClick={this.clickHandler.bind(this)}>Click</button>
            // </div>

            //Option 02: Using arrow functions in render() method
            // <div>
            //     <div>{this.state.message}</div>
            //     <button onClick={() => this.clickHandler()}>Click</button>
            // </div>

            //Option 03: Binding the event handler in the constructor
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind
