import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './login';
import Shoes from './products';
import Register from './register';
import history from './history'



function App() {
    return (
        <div>
            <Router history={history} >
                <Route exact path='/' >
                    <Register />
                </Route>
                <Route exact path='/login' >
                    <Login />
                </Route>
                <Route exact path='/homepage' >
                    <Shoes />
                </Route>
            </Router>
        </div>
    )
}

export default App;