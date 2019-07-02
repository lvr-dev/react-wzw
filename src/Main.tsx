import React, {FunctionComponent} from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { FilterableEmployeeList } from './employee-list/FilterableEmployeeList';
import { EmployeeDetail } from './employee-detail/EmployeeDetail';

export const Main: FunctionComponent = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path='/' component={FilterableEmployeeList}/>
            <Route path='/employees/:id' component={EmployeeDetail}/>
            <Route path='/employees' component={FilterableEmployeeList}/>
        </Switch>
        </BrowserRouter>
    )
};
