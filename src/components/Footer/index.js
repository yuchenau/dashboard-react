import React, { Component } from 'react';
import './index.less'

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return ( 
            <div className="footer">
                版权所有©慕课网#完蛋啦迟到啦（推荐使用谷歌浏览器打开）
            </div>
        );
    }
}
 
export default Footer;