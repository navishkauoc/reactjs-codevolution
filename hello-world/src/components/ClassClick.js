import React, { Component } from 'react'

class ClassClick extends Component {

    clickHandler() {
        console.log('Clicked the button')
    }

    render() {
        return (
            <div>
                <div>
                    <button onClick={this.clickHandler}>Click Me</button>
                </div>
            </div>
        )
    }
}

export default ClassClick
