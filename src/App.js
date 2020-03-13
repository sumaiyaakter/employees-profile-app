import React from 'react';
import Employee from './components/EmployeePanel/Employee';
import './App.css'

const App = () => {
  return (
    <div>
      <header>
        <h1>Employees  Profile App</h1>
      </header>
      <Employee></Employee>
    </div>
  );
};

export default App;