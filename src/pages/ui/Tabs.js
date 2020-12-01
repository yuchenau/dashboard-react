import React, { Component } from 'react';
import { Card, Tabs, message } from 'antd';
import { AppleOutlined, AndroidOutlined } from "@ant-design/icons";
const { TabPane } = Tabs;

class Tab extends Component {

    newTabIndex = 0;

    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentWillMount() {
        const panes = [
            {
                title:'Tab1',
                content: 'Content of Tab Pane 1',
                key: '1'
            },
            {
                title:'Tab2',
                content: 'Content of Tab Pane 2',
                key: '2'
            },
            {
                title:'Tab3',
                content: 'Content of Tab Pane 3',
                key: '3'
            }
        ];
        this.setState({
            activeKey: panes[0].key,
            panes
        })
    }

    handleCallback = (tab) => {
        message.info(`选择了页签 ${tab}`)
    }

    onChange = (activeKey) => {
        this.setState({
            activeKey
        })
    }

    onEdit = (targetKey, action) => {
        this[action](targetKey);
    }

    add = () => {
        const { panes } = this.state;
        const activeKey = `newTab${this.newTabIndex++}`;
        const newPanes = [...panes];
        newPanes.push({ title: activeKey, content: 'Content of new Tab', key: activeKey });
        this.setState({
          panes: newPanes,
          activeKey,
        });
    };

    remove = (targetKey) => {
        const { panes, activeKey } = this.state;
        let newActiveKey = activeKey;
        let lastIndex;
        panes.forEach((pane, i) => {
          if (pane.key === targetKey) {
            lastIndex = i - 1;
          }
        });
        const newPanes = panes.filter(pane => pane.key !== targetKey);
        if (newPanes.length && newActiveKey === targetKey) {
          if (lastIndex >= 0) {
            newActiveKey = newPanes[lastIndex].key;
          } else {
            newActiveKey = newPanes[0].key;
          }
        }
        this.setState({
          panes: newPanes,
          activeKey: newActiveKey,
        });
    };

    render() { 
        return ( 
            <div>
                <Card title="Tab页签">
                    <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
                        <TabPane tab="Tab 1" key="1">
                            Content of Tab Pane 1
                        </TabPane>
                        <TabPane tab="Tab 2" key="2">
                            Content of Tab Pane 2
                        </TabPane>
                        <TabPane tab="Tab 3" key="3" disabled>
                            Content of Tab Pane 3
                        </TabPane>
                    </Tabs>
                </Card>
                <Card title="带图的页签">
                    <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
                        <TabPane 
                            tab={<span><AppleOutlined/>Apple</span>}
                            key="1"
                        >
                            Content of Tab Pane 1
                        </TabPane>
                        <TabPane 
                            tab={<span><AndroidOutlined/>Apple</span>}
                            key="2"
                        >
                            Content of Tab Pane 2
                        </TabPane>
                    </Tabs>
                </Card>
                <Card title="动态菜单">
                    <Tabs 
                        defaultActiveKey="1"
                        type="editable-card"
                        activeKey={this.state.activeKey}
                        onChange={this.onChange} // set active key
                        onEdit={this.onEdit} // perform add or remove action
                    >
                        {this.state.panes.map((panel)=>
                            <TabPane 
                                tab={panel.title}
                                content={panel.content}
                                key={panel.key}
                            >
                                {panel.content}
                            </TabPane>)
                        }
                    </Tabs>
                </Card>
            </div>
        );
    }
}
 
export default Tab;