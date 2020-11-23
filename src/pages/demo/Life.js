import React, { Component } from 'react';
import { Button } from 'antd';
import './index.less';

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
            <div className='content'>
                <p>React 生命周期介绍</p>
                <Button onClick={this.handleAdd}>点击一下</Button>
                <Button onClick={this.handleAdd.bind(this)}>点击一下</Button>
                <p>{this.state.count}</p>
            </div>
        );
    }
}
 
export default Life;