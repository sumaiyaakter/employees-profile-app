import React from 'react';
import './Employee-count.css'

const EmployeeCount = (props) => {
    const users = props.allUser;
  
    let total = 0;
    for(let i=0; i<users.length; i++){
        const ur = users[i];
        total = total + ur.annualIncome;
    }
    
    return (
        <div className="d-flex">
            <h3>Number of Employees: <br/><span>{users.length}</span></h3>
            <h3>Total Paid:<br/><span>{total}</span></h3>
        </div>
    );
};

export default EmployeeCount;