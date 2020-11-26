import React, { Component } from 'react';
import './index.less';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return ( 
            <div className="home-wrap">
                <p>欢迎使用 IMooc 后台管理系统</p>
            </div>
        );
    }
}
 
export default Home;