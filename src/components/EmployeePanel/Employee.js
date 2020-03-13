import React, { useState } from 'react';
import employeeData from '../../employeeData';
import EmployeeProfile from '../EmployeeProfile/EmployeeProfile';
import EmployeeCount from '../EmployeeCount/EmployeeCount';
import './Employee.css';

const Employee = () => {

    
    const userInfo = employeeData.slice(0,9);
    const [users, setUsers] = useState(userInfo)
    const[userCount, setUserCount] = useState([]);

    const handleAddUser = (addUsers) =>{
        const newUser = [...userCount, addUsers];
        setUserCount(newUser)
    }

    return (
        <div className="user-container">
            <div className="UserCount">
                <EmployeeCount allUser = {userCount}></EmployeeCount>
            </div>

            <div className="users">
                {
                    users.map(user => <EmployeeProfile handleAddUser = {handleAddUser} user={user}></EmployeeProfile>)
                }
            </div>
            
        </div>
    );
};

export default Employee;