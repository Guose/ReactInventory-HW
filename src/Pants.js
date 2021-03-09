import React, { Component } from 'react';

class Pants extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: this.props.startingCount
        }
        this.add = this.add.bind(this);
        this.minus = this.minus.bind(this);
        this.reset = this.reset.bind(this);
    }
    add() {
        this.setState({
            count: this.state.count + 1
        })
    }
    minus() {
        this.setState({
            count: this.state.count - 1
        })
    }
    reset() {
        this. setState({
            count: this.props.startingCount
        })
    }
    componentDidMount() {
        console.log("MOUNTED!!!");
    }
    componentDidUpdate() {
        console.log("UPDATED!");
    }
    render() {
        return(
            <div className="container">
                <h1> Pants: </h1>
                <h1> {this.state.count} </h1>
                <button onClick={this.add}><h1> + </h1></button>
                <button onClick={this.minus}><h1> - </h1></button>
                <button onClick={this.reset}><h1> RESET </h1></button>
            </div>
        )
    }
}
export default Pants;