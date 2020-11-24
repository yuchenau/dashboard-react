import React, { Component } from 'react';
import { Row, Col } from 'antd';
import NavLeft from './components/NavLeft/index';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import './style/common.less';

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Row className="container">
                <Col span={4} className="nav-left">
                    <NavLeft/>
                </Col>
                <Col span={20} className='main'>
                    <Header/>
                    <Row className='content'>
                        Content
                        {/* {this.props.children} */}
                    </Row>
                    <Footer/>
                </Col>
            </Row>
        );
    }
}
 
export default Admin;
