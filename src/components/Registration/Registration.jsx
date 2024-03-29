import React, { Fragment, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './Registration.css'

function Registration({ setIsShown }) {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
        alert("თქვენ წარმატებით გაიარეთ რეგისტრაცია!")
        alert("გთხოვთ გაიაროთ ავტორიზაცია");    

        const data = {
            UserName: userName,
            Email: email,
            Password: password
        }

        const url = 'http://3.65.48.160:8090/Auth/register';
        axios.post(url, data).then((result) => {
            alert(result.data);
        }).catch((error) => { alert(error) })
    }

    return (
        <Fragment>
            <div className="popup-bg">
                <div className="popup">
                    <div className="form_wrapper">
                        <div className="reg-header">რეგისტრაცია</div>
                        <div className="fields">
                            <label>სახელი</label>
                            <input type="text"
                                id="txtName"
                                placeholder="Enter UserName"
                                onChange={(e) => handleUserNameChange(e.target.value)}
                            />
                        </div>
                        <div className="fields">
                            <label>მეილი</label>
                            <input type="text"
                                id="txtEmail"
                                placeholder="Enter E-Mail"
                                onChange={(e) => handleEmailChange(e.target.value)}
                            />
                        </div>
                        <div className="fields">
                            <label>პაროლი</label>
                            <input type="text"
                                id="txtAddress"
                                placeholder="Enter Password"
                                onChange={(e) => handlePasswordChange(e.target.value)}
                            />
                        </div>

                        <div className="save-div">
                            <Link to="/login">
                                <button className="saveBtn" onClick={() => handleSave()}>შენახვა</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Registration;