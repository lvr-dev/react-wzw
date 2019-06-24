import React from 'react';
import * as TestRenderer from 'react-test-renderer';
import { EmployeeRow } from './EmployeeRow';
import ReactDOM from 'react-dom';
import {EmployeeList} from "../employee-list/EmployeeList";

describe('EmployeeRow component', () => {
    const mockData = {
        "id": 1,
        "lastName": "Jansen",
        "firstName": "Frits",
        "client": "Avico",
        "since": "2019-02-01",
        "until": "2019-11-01",
        "status": "assigned",
        "visible": true
    };

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<EmployeeRow employee={mockData}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });


    it('shows the last name of the employee', () => {
        const component = TestRenderer.create(<EmployeeRow employee={mockData}/>);
        const rootInstance = component.root;
        const spanItem = rootInstance.findByType('span');
        expect(spanItem.props.children).toContain('Frits Jansen');
    });

    it('fails if the expected last name is not correct', () => {
        const component = TestRenderer.create(<EmployeeRow employee={mockData}/>);
        const rootInstance = component.root;
        const spanItem = rootInstance.findByType('span');
        expect(spanItem.props.children).not.toContain('Tim');
    })
});