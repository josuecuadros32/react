import React from 'react';
import {Route, Switch } from 'react-router-dom';

//Component 
import App from './App';
import Inicio from './components/Inicio/Inicio';




const AppRoutes= () => 
     <App>
    <Switch>
    <Route  path="/inicio" component={Inicio} />  
    </Switch>
    </App>;



    export default AppRoutes;