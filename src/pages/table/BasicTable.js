import React, { Component } from 'react';
import { Card, Table, Modal } from 'antd';
import axios from '../../axios/index';

class BasicTable extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        const dataSource = [
            {
                id: '0',
                userName: 'Jack',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2000-01-01',
                address: '北京市海淀区奥林匹克公园',
                time: '09:00'
            },
            {
                id: '1',
                userName: 'Tom',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2000-01-01',
                address: '北京市海淀区奥林匹克公园',
                time: '09:00'
            },
            {
                id: '2',
                userName: 'Lily',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2000-01-01',
                address: '北京市海淀区奥林匹克公园',
                time: '09:00'
            }
        ];
        dataSource.map((item, index) => {
            item.key = index;
        })
        this.setState({
            dataSource
        });
        this.request();
    }

    request = () => {
        axios.ajax({
            url:'/user/list',
            data: {
                params: {
                    page: 1
                }
            }
        }).then((res) => {
            if (res.code === 0) {
                res.result.item_list.map((item, index) => {
                    item.key = index;
                });
                this.setState({
                    dataSource_d: res.result.item_list
                });
            }
        })
    }

    onRowClick = (record, index) => {
        let selectkey = [index];
        Modal.info({
            title: '信息',
            content: `用户名：${record.userName}，用户爱好：${record.interest}`
        })
        this.setState({
            selectedRowKeys: selectkey, // 索引 list
            selectedItem: record // 选中了哪一个对象
        });
    }

    render() { 
        const columns = [
            {
                title: 'id',
                dataIndex: 'id'
            },
            {
                title: '用户名',
                dataIndex: 'userName'
            },
            {
                title: '性别',
                dataIndex: 'sex',
                render(sex) {
                    return sex === 1? "男":"女"
                }
            },
            {
                title: '状态',
                dataIndex: 'state',
                render(state) {
                    let config = { // 创建字典文件
                        '1': '咸鱼一条',
                        '2': '风华浪子',
                        '3': '北大才子',
                        '4': '百度FE',
                        '5': '创业者'
                    }
                    return config[state]
                }
            },
            {
                title: '爱好',
                dataIndex: 'interest',
                render(interest) {
                    let config = { // 创建字典文件
                        '1': '游泳',
                        '2': '打篮球',
                        '3': '踢足球',
                        '4': '跑步',
                        '5': '爬山',
                        '6': '骑行',
                        '7': '桌球',
                        '8': '麦霸'
                    }
                    return config[interest]
                }
            },
            {
                title: '生日',
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                dataIndex: 'address'
            },
            {
                title: '早起时间',
                dataIndex: 'time'
            }
        ];

        const {selectedRowKeys} = this.state;
        const rowSelection = {
            type: 'radio',
            selectedRowKeys
        };

        return ( 
            <div>
                <Card title="基础表格">
                    <Table
                        columns={columns}
                        dataSource={this.state.dataSource}
                    />
                </Card>
                <Card title="动态数据渲染表格">
                    <Table
                        columns={columns}
                        dataSource={this.state.dataSource_d}
                    />
                </Card>
                <Card title="单选">
                    <Table
                        columns={columns}
                        dataSource={this.state.dataSource_d}
                        rowSelection={rowSelection}
                        onRow={(record, index) => {
                            return {
                                onClick: () => {this.onRowClick(record, index)}, // 点击行
                                // onMouseEnter: () => {} // 鼠标移入行
                            }
                        }}
                    />
                </Card>
            </div>
        );
    }
}
 
export default BasicTable;