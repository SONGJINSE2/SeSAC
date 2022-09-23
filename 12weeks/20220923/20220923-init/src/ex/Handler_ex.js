import React, { Component } from "react";

class Event extends Component {

    state={
        modifyTxt : 'Hello World!',
    }

    changeText = () => {
        this.setState({modifyTxt: this.state.modifyTxt=='Hello World!' ? 'Goodbye World!' : 'Hello World!'})
    }
    
    render(){
        return(
            <div>
                <p>{this.state.modifyTxt}</p>
                <button onClick={this.changeText}>클릭</button>
            </div>
        )
    }
}

export default Event;