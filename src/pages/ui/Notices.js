import React, { Component } from 'react';
import { Card, Button, notification } from 'antd';

class Notices extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    openNotification = (type, direction) => {
        if(direction) {
            notification.config({
                placement: direction
            })
        }
        notification[type]({
            message:"发工资了",
            description:"上个月考勤22天，迟到12天，实发工资250，请笑纳"
        });
    }

    render() { 
        return ( 
            <div>
                <Card title="通知提醒框">
                    <Button type="primary" onClick={()=>this.openNotification("success")}>Success</Button>
                    <Button type="primary" onClick={()=>this.openNotification("info")}>Info</Button>
                    <Button type="primary" onClick={()=>this.openNotification("warning")}>Warning</Button>
                    <Button type="primary" onClick={()=>this.openNotification("error")}>Error</Button>
                </Card>
                <Card title="通知提醒框控制方向">
                    <Button type="primary" onClick={()=>this.openNotification("success","topLeft")}>Success</Button>
                    <Button type="primary" onClick={()=>this.openNotification("info", "topRight")}>Info</Button>
                    <Button type="primary" onClick={()=>this.openNotification("warning", "bottomLeft")}>Warning</Button>
                    <Button type="primary" onClick={()=>this.openNotification("error", "bottomRight")}>Error</Button>
                </Card>
            </div>
        );
    }
}
 
export default Notices;