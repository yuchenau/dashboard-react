import React, { Component } from 'react';

class Life extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    handleAdd = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() { 
        return ( 
            <div>
                <p>React 生命周期介绍</p>
                <button onClick={this.handleAdd}>点击一下</button>
                <button onClick={this.handleAdd.bind(this)}>点击一下</button>
                <p>{this.state.count}</p>
            </div> 
        );
    }
}
 
export default Life;