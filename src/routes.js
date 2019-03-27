import React from "react";
import { Switch, Route } from "react-router-dom";

// -----Components-----
import Home from './components/Home/Home';
import Appointments from "./components/Appointments/Appointments";
import Goals from "./components/Goals/Goals";
import Earnings from "./components/Earnings/Earnings";
import Restock from "./components/Restock/Restock";
import Inventory from "./components/Inventory/Inventory";

// ------Routes--------
export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/appointments' component={Appointments} />
        <Route exact path='/goals' component={Goals} />
        <Route exact path='/earnings' component={Earnings} />
        <Route exact path='/restock' component={Restock} />
        <Route exact path='/inventory' component={Inventory} />
    </Switch>
);