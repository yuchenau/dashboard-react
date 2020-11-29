import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Login from './pages/login';
import Admin from './admin';
import Buttons from './pages/ui/Buttons';
import NotFound from './pages/notfound/index';

class Router extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return ( 
            <HashRouter>
                <App>
                    {/* Login, Admin, OrderDetails 三个页面的层级是一致的 */}
                    <Route path="/login" component={Login}/>
                    <Route path="/admin" component={()=>
                        <Admin>
                            {/* 只匹配单个标签 */}
                            <Switch>
                                <Route path="/admin/ui/buttons" component={Buttons}/>
                                <Route component={NotFound}/>
                            </Switch>
                        </Admin>
                    }/>
                </App>
            </HashRouter>
        );
    }
}
 
export default Router;