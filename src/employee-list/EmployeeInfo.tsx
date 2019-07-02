import React, { FunctionComponent } from 'react';
import './EmployeeList.css';
import Employee from '../types/Employee';

export const EmployeeInfo: FunctionComponent<{employee:Employee}> = ({employee}) => {

    return (
        <div className="collapsable-row flew-row">
            <div>
                <span className="content-label">sinds:</span>
                <span className="content-row">{employee.since}</span>
            </div>
            <div>
                <span className="content-label">tot:</span>
                <span className="content-row">{employee.until}</span>
            </div>
        </div>
    );
};
