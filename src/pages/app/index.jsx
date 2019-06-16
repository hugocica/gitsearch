import React, { Component } from 'react';
import Routes from '../../routes';
import routesConfig from '../../routes/config';

class App extends Component {
    render() {
        return (
            <div className="main-wrapper">
                {Routes(routesConfig)}
            </div>
        );
    }
}
export default App;
