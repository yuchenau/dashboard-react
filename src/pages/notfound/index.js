import React, { Component } from 'react';
import './index.less';

class NotFound extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return ( 
            <div className="notfound">
                404 not found
            </div>
        );
    }
}
 
export default NotFound;