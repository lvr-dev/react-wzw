import React, { FunctionComponent, Fragment } from 'react';
import useApiPostHook from '../hooks/useApiPostHook';
import Employee from '../types/Employee'
import { EmployeeForm } from './EmployeeForm';
import { SubHeader } from '../layout/SubHeader';

export const EmployeeCreate: FunctionComponent = () => {
    const initialState:Employee = {
        lastName: '',
        email: '',
        status: 'assigned',
        visible: 'true'
    };

    const url = `http://localhost:3000/employee/create`;
    const [response , doFetch] = useApiPostHook(
        initialState,
        url
    );

    const formValues = {
        firstName: '',
        prefix: '',
        lastName: '',
        email: '',
        client: '',
        since: '',
        until: '',
        status:  '',
        visible: '1'
    };
    return (
        <Fragment>
        <SubHeader title={'Nieuwe medewerker'} />
        <EmployeeForm employee={formValues}/>
        </Fragment>
    );
};
