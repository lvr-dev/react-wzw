import React from 'react';
import './App.css';
import { Header } from './layout/Header';
import { EmployeeList } from './employee-list/EmployeeList';


const App: React.FC = () => {

  const Employees = [
    {"id": 10001, "lastName": "Jansen", "firstName": "Frits", "client": "Avico", "since": "2019-02-01", "until": "2019-11-01", "status": "assigned", "visible": true },
    {"id": 10002, "lastName": "Groot", "firstName": "Kees", "prefix": "de", "client": "Avico", "since": "2018-01-01", "until": "2019-07-01", "status": "assigned", "visible": false },
    {"id": 10003, "lastName": "Karabiyik", "firstName": "Fazia", "client": "ABN Bank", "since": "2019-03-15", "until": "2020-03-01", "status": "assigned", "visible": true },
    {"id": 10004, "lastName": "Taylor", "firstName": "Albert", "client": "Atlas Co", "since": "2017-01-01", "until": "2019-07-01", "status": "expiring", "visible": true },
    {"id": 10005, "lastName": "Hansen", "firstName": "Nina", "client": "Kleembach", "since": "2019-06-01", "until": "2020-01-01", "status": "assigned", "visible": true },
    {"id": 10006, "lastName": "Ravensteijn", "firstName": "Ronald", "prefix": "van", "client": "Rover BV", "since": "2018-06-01", "until": "2021-11-01", "status": "lookout", "visible": true },
    {"id": 10007, "lastName": "Karsten", "firstName": "Fanny", "client": "Leeman", "since": "2018-01-01", "until": "2019-12-01", "status": "assigned", "visible": false },
    {"id": 10008, "lastName": "Kemperman", "firstName": "Kevin", "client": "Rtv Friesland", "since": "2017-06-01", "until": "2019-08-01", "status": "lookout", "visible": true },
    {"id": 10009, "lastName": "Caron", "firstName": "Joost", "client": "Rtv Friesland", "since": "2017-04-01", "until": "2019-06-01", "status": "unassigned", "visible": true },
    {"id": 10010, "lastName": "Vaanders", "firstName": "Stefan", "client": "Carico", "since": "2019-1-01", "until": "2019-10-01", "status": "on the lookout", "visible": true }
  ];

  return (
    <div className="app-wrapper">
      <Header />
      <div className="content-wrapper">
        <EmployeeList employees={Employees}/>
      </div>
    </div>
  );
};

export default App;
