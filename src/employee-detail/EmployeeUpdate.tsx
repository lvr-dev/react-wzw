import React, { FunctionComponent, Fragment } from 'react';
import { useContext } from 'react';
import { __RouterContext } from 'react-router';
import useApiGetHook from '../hooks/useApiGetHook';
import Employee from '../types/Employee'
import { EmployeeForm } from './EmployeeForm';
import { SubHeader } from '../layout/SubHeader';

export const EmployeeUpdate: FunctionComponent<{selectedId:string}> = ({selectedId}) => {
    const initialState:Employee = new Employee();
    const routerContext = useContext((__RouterContext));
    const paramsObject:any = routerContext.match.params;

    const employeeId = paramsObject.id || selectedId;
    const url = `http://localhost:3000/employee/${employeeId}`;
    const [{ data, isLoading, isError }, doFetch] = useApiGetHook(
        initialState,
        url
    );
    const formValues = data;
    return (
            <Fragment>
                <SubHeader title={'Edit employee'}/>
                <EmployeeForm employee={formValues}/>
            </Fragment>
    )
};
