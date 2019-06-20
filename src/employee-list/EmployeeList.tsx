import React, { FunctionComponent } from 'react';
import { Header, Icon } from 'semantic-ui-react'
import './EmployeeList.css';
import { Employee } from '../types/Employee';
import { EmployeeRow } from '../employee-row/EmployeeRow';
import ShootingStars from '../assets/shooting-stars.png';

export const EmployeeList: FunctionComponent<{employees: Employee[]}> = ({employees}) => {
    const rows: any[] = [];
    employees.forEach((emp) => {
        rows.push(<EmployeeRow key={emp.id} employee={emp} />);
    });
    return (
      <div>
          <div className="sub-header">
            <div className="center-wrapper">
                <img src={ShootingStars} alt="shooting stars" />
                <h1>Medewerkers</h1>
            </div>
          </div>
          <ul>
              {rows}
          </ul>
      </div>
    );
};

