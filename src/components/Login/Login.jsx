import React, { Fragment, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import Header from "../Header/Header";
import './Login.css'

function Join(setIsShown) {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');


    const handleUserNameChange = (value) => {
        setUserName(value);
    }

    const handlePasswordChange = (value) => {
        setPassword(value);
    }

    const handleSave = () => {
        const data = {
            UserName: userName,
            Password: password
        }

        const url = 'https://localhost:7028/Auth/register';
        axios.post(url, data).then((result) => {
            alert(result.data);
        }).catch((error) => { alert(error) })
    }

    return (
        <Fragment>
            <Header />
            <div className="popup-bg">
                <div className="popup">
                    <div className="form_wrapper">
                        <div className="reg-header">შესვლა</div>

                        <div className="fields">
                            <label>სახელი</label>
                            <input type="text"
                                id="txtName"
                                placeholder="Enter UserName"
                                onChange={(e) => handleUserNameChange(e.target.value)}
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

                            <Link to="/profile">
                                <button className="saveButton" onClick={() => handleSave()}>შენახვა</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Join