import Formulario from 'pages/Formulario';
import Home from 'pages/Home';
import Dashboard from   'pages/dashboard';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
const Routes = () => {
    return (
        <BrowserRouter>
            <switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/Formulario" exact>
                    <Formulario/>
                </Route>
                <Route path="/dashboard" exact>
                    <Dashboard/>
                </Route>
                
            </switch>
        </BrowserRouter>
    );
}

export default Routes;