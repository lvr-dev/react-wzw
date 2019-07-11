import React, {FunctionComponent} from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { FilterableEmployeeList } from './employee-list/FilterableEmployeeList';
import { EmployeeUpdate } from './employee-detail/EmployeeUpdate';
import { EmployeeCreate } from './employee-detail/EmployeeCreate';

export const Main: FunctionComponent = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path='/' component={FilterableEmployeeList}/>
            <Route path='/employees/new' component={EmployeeCreate}/>
            <Route path='/employees/:id' component={EmployeeUpdate}/>
            <Route path='/employees' component={FilterableEmployeeList}/>
        </Switch>
        </BrowserRouter>
    )
};
