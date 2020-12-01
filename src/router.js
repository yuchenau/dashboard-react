import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Login from './pages/login';
import Admin from './admin';
import Buttons from './pages/ui/Buttons';
import Modals from './pages/ui/Modals';
import Loadings from './pages/ui/Loadings';
import Notices from './pages/ui/Notices';
import Messages from './pages/ui/Messages';
import Tab from './pages/ui/Tabs';
import Galleries from './pages/ui/Galleries';
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
                                <Route path="/admin/ui/modals" component={Modals}/>
                                <Route path="/admin/ui/loadings" component={Loadings}/>
                                <Route path="/admin/ui/notices" component={Notices}/>
                                <Route path="/admin/ui/messages" component={Messages}/>
                                <Route path="/admin/ui/tabs" component={Tab}/>
                                <Route path="/admin/ui/galleries" component={Galleries}/>
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