import React, { FunctionComponent } from 'react';
import { useContext } from 'react';
import { __RouterContext } from 'react-router';
import { EmployeeForm } from './EmployeeForm';

export const EmployeeDetail: FunctionComponent<{selectedId?:string}> = ({selectedId}) => {
    const routerContext = useContext((__RouterContext));
    const paramsObject:any = routerContext.match.params;
    if (paramsObject.id || selectedId) {
        const employeeId = paramsObject.id || selectedId;
    }
    return <EmployeeForm/>
};
