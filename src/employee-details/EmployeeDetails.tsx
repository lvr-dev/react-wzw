import React, { FunctionComponent } from 'react';
import './EmployeeDetails.css';
import { Employee } from '../types/Employee';

export const EmployeeDetails: FunctionComponent<{employee:Employee}> = ({employee}) => {

    return (
        <div className="collapsable-row flew-row">
            <div className="collapsable-content">
                <span className="content-label">huidige opdrachtgever:</span>
                <span className="content-row">{employee.client}</span>
            </div>
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