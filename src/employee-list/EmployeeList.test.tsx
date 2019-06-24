import React from 'react';
import * as TestRenderer from 'react-test-renderer';
import { EmployeeList } from './EmployeeList';
import ReactDOM from 'react-dom';


describe("EmployeeList component", () => {

    const mockData =     [
        {"id": 1, "lastName": "Jansen", "firstName": "Frits", "client": "Avico", "since": "2019-02-01", "until": "2019-11-01", "status": "assigned", "visible": true },
        {"id": 2, "lastName": "Groot", "firstName": "Kees", "prefix": "de", "client": "Avico", "since": "2018-01-01", "until": "2019-07-01", "status": "assigned", "visible": false },
        {"id": 3, "lastName": "Karabiyik", "firstName": "Fazia", "client": "ABN Bank", "since": "2019-03-15", "until": "2020-03-01", "status": "assigned", "visible": true }
    ];

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<EmployeeList employees={mockData}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it("shows only items with status visible == true ", () => {
        const component = TestRenderer.create(<EmployeeList employees={mockData}/>);
        const rootInstance = component.root;
        const rows = rootInstance.findAllByType('li');
        expect(rows.length).toBe(2);
    });
});