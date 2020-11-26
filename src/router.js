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
                    <Route path="/login" component={Login}/>
                    <Route path="/admin" component={()=>
                        <Admin>
                            <Route path="/admin/ui/buttons" component={Buttons}/>
                            <Route component={NotFound}/>
                        </Admin>
                    }/>
                </App>
            </HashRouter>
        );
    }
}
 
export default Router;