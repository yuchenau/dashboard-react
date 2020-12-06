import React, { Component } from 'react';
import { Card, Button, Form, Input} from 'antd';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() {
        return ( 
            <div>
                <Card title="登陆行内表单">
                    <Form layout="inline">
                        <Form.Item>
                            <Input placeholder="请输入用户名"/>
                        </Form.Item>
                        <Form.Item>
                            <Input placeholder="请输入密码"/>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary">登陆</Button>
                        </Form.Item>
                    </Form>
                </Card>
                <Card title="登陆水平表单">
                    <Form layout="horizontal" style={{width:300}}>
                        <Form.Item>
                            <Input placeholder="请输入用户名"/>
                        </Form.Item>
                        <Form.Item>
                            <Input placeholder="请输入密码"/>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary">登陆</Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        );
    }
}
 
export default Login;