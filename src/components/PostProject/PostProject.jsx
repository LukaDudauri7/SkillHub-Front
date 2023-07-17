import React, { Fragment, useState } from "react";
import axios from "axios";

function Registration({ setIsShown }) {
    const [firstName, setFirstName] = useState('');
    const [lasttName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleFirstNameChange = (value) => {
        setFirstName(value);
    }

    const handleLastNameChange = (value) => {
        setLastName(value);
    }

    const handlePhoneNumberChange = (value) => {
        setPhoneNumber(value);
    }

    const handleUserNameChange = (value) => {
        setUserName(value);
    }
    const handleEmailChange = (value) => {
        setEmail(value);
    }

    const handlePasswordChange = (value) => {
        setPassword(value);
    }

    const handleSave = () => {
        const data = {
            // FirstName: firstName,
            // LastName: lasttName,
            // PhoneNumber: phoneNumber,
            UserName: userName,
            Email: email,
            Password: password
        }

        const url = 'https://localhost:7028/Auth/register';
        axios.post(url, data).then((result) => {
            alert(result.data);
        }).catch((error) => { alert(error) })
    }

    return (
        <Fragment>
            <div className="popup-bg">
                <div className="popup">
                    <div className="form_wrapper">
                        <div className="reg-header">Registration</div>
                        <div className="fields">
                            <label>First Name</label>
                            <input type="text"
                                id="txtName"
                                placeholder="Enter FirstName"
                                onChange={(e) => handleFirstNameChange(e.target.value)}
                            />
                        </div>

                        <div className="fields">
                            <label>Last Name</label>
                            <input type="text"
                                id="txtName"
                                placeholder="Enter LastName"
                                onChange={(e) => handleLastNameChange(e.target.value)}
                            />
                        </div>

                        <div className="fields">
                            <label>User Name</label>
                            <input type="text"
                                id="txtName"
                                placeholder="Enter UserName"
                                onChange={(e) => handleUserNameChange(e.target.value)}
                            />
                        </div>

                        <div className="fields">
                            <label>Phone Number</label>
                            <input type="text"
                                id="txtPhoneNumber"
                                placeholder="Enter Phone Number"
                                onChange={(e) => handlePhoneNumberChange(e.target.value)}
                            />
                        </div>

                        <div className="fields">
                            <label>E-Mail</label>
                            <input type="text"
                                id="txtEmail"
                                placeholder="Enter E-Mail"
                                onChange={(e) => handleEmailChange(e.target.value)}
                            />

                        </div>

                        <div className="fields">
                            <label>Password</label>
                            <input type="text"
                                id="txtAddress"
                                placeholder="Enter Password"
                                onChange={(e) => handlePasswordChange(e.target.value)}
                            />
                        </div>

                        <div className="save-div">
                            <button className="saveBtn" onClick={() => handleSave()}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Registration;