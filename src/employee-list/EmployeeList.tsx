import React, { FunctionComponent, Fragment } from 'react';
import './EmployeeList.css';
import { EmployeeRow } from './EmployeeRow';
import Employee from '../types/Employee';


export const EmployeeList:  FunctionComponent<{employees:Employee[]}> = ({employees}) => {
    const rows: any[] = [];
    employees.map((emp) => {
        if (emp.id && emp.visible) {
            rows.push(<EmployeeRow key={emp.id} employee={emp}/>);
        }
        return rows;
    });
    return (
        <Fragment>
            {rows}
        </Fragment>

    );
};

