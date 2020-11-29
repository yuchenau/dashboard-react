import React, { Component } from 'react';
import { Card, Button, Radio } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined, SearchOutlined, DownloadOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import "./ui.less";

class Buttons extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            loading: true,
            size: "default"
        }
    }

    handleCloseLoading = () => {
        this.setState({loading: false});
    }

    handleChange = (e) => {
        this.setState({size: e.target.value});
    }

    render() { 
        return ( 
            <div>
                <Card title="基础按钮">
                    <Button type="primary">主按钮</Button>
                    <Button>次按钮</Button>
                    <Button type="dashed">虚线按钮</Button>
                    <Button danger>危险按钮</Button>
                    <Button disabled>禁用按钮</Button>
                </Card>
                <Card title="图形按钮">
                    <Button icon={<PlusOutlined />}>创建</Button>
                    <Button icon={<EditOutlined />}>编辑</Button>
                    <Button icon={<DeleteOutlined />}>删除</Button>
                    <Button shape="circle" icon={<SearchOutlined />}></Button>
                    <Button type="primary" icon={<SearchOutlined />}>搜索</Button>
                    <Button type="primary" icon={<DownloadOutlined />}>搜索</Button>
                </Card>
                <Card title="加载中状态按钮">
                    <Button type="primary" loading={this.state.loading}>确定</Button>
                    <Button type="primary" shape="circle" loading={this.state.loading}></Button>
                    <Button loading={this.state.loading}>点击加载</Button>
                    <Button shape="circle" loading={this.state.loading}></Button>
                    <Button type="primary" onClick={this.handleCloseLoading}>关闭</Button>
                </Card>
                <Card title="按钮组">
                    <Button.Group>
                        <Button type="primary" icon={<LeftOutlined />}>返回</Button>
                        <Button type="primary" icon={<RightOutlined />}>前进</Button>
                    </Button.Group>
                </Card>
                <Card title="按钮尺寸">
                    <Radio.Group value={this.state.size} onChange={this.handleChange}>
                        <Radio value="small">小</Radio>
                        <Radio value="default">中</Radio>
                        <Radio value="large">大</Radio>
                    </Radio.Group>
                    <Button type="primary" size={this.state.size}>主按钮</Button>
                    <Button size={this.state.size}>次按钮</Button>
                    <Button type="dashed" size={this.state.size}>虚线按钮</Button>
                </Card>
            </div>
        );
    }
}
 
export default Buttons;