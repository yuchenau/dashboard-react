import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Header from './components/Header/index';
import Footer from './components/Footer/index';

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Row>
                <Col span="3">
                    Left
                </Col>
                <Col span="21">
                    <Header/>
                    <Row></Row>
                    <Footer/>
                </Col>
            </Row>
        );
    }
}
 
export default Admin;
