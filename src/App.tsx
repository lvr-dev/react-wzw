import React from 'react';
import './App.css';
import { Header } from './layout/Header';
import { Main } from './Main';

const App: React.FC = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="content-wrapper">
        <Main />
      </div>
    </div>
  );
};

export default App;
