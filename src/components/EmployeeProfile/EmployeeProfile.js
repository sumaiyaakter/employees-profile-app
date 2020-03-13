import React, { useState } from 'react';
import './Employee-profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillAlt, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const EmployeeProfile = (props) => {
    const{img, name, annualIncome, job, email, phone } = props.user;

    const [paid, setPaid] = useState(false);
    let paymentButton = <button onClick={() => {props.handleAddUser(props.user); setPaid(true)}} className="btn pay-btn"> <FontAwesomeIcon icon={faMoneyBillAlt} />pay</button>
  
    if(paid){
        paymentButton = <button className="btn paid-btn" disabled><FontAwesomeIcon icon={faCheckCircle} /> paid</button>
    }

    return (
        <div className="user-list">
            <div className="d-flex align-center">
                <img src={img} alt=""/>
                <div>
                    <h3>{name}</h3>
                    <p>{job}</p>
                </div>
            </div>
            <div className="user-list_content">
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>Due salary: ${annualIncome}</p>
                {paymentButton}
            </div>
        </div>
    );
};

export default EmployeeProfile;









