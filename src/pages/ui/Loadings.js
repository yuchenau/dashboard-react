import React, { Component } from 'react';
import { Card, Spin, Alert } from 'antd';

class Loadings extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return ( 
            <div>
                <Card title="Spin 的用法">
                    <Spin size="small"/>
                    <Spin/>
                    <Spin size="large"/>
                </Card>
                <Card title="内容遮罩">
                    <Alert
                        message="React"
                        description="欢迎来到 React 高级实战课程"
                        type="info"
                    />
                    <Spin>
                        <Alert
                            message="React"
                            description="欢迎来到 React 高级实战课程"
                            type="warning"
                        />
                    </Spin>
                    <Spin tip="加载中">
                        <Alert
                            message="React"
                            description="欢迎来到 React 高级实战课程"
                            type="warning"
                        />
                    </Spin>
                </Card>
            </div>
        );
    }
}
 
export default Loadings;