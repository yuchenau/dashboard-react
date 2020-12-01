import React, { Component } from 'react';
import { Card, Button, message } from 'antd';

class Messages extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    showMessage = (type) => {
        message[type]("恭喜你，React 课程晋级成功");
    }

    render() { 
        return ( 
            <div>
                <Card title="全局提示框">
                    <Button type="primary" onClick={()=>this.showMessage("success")}>Success</Button>
                    <Button type="primary" onClick={()=>this.showMessage("info")}>Info</Button>
                    <Button type="primary" onClick={()=>this.showMessage("warning")}>Warning</Button>
                    <Button type="primary" onClick={()=>this.showMessage("error")}>Error</Button>
                </Card>
            </div>
        );
    }
}
 
export default Messages;