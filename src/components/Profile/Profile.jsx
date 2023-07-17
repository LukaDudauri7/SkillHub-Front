import React from 'react'
import './Profile.css'
import Header from "../Header/Header";
import { Link } from 'react-router-dom';

function Profile(){
    return(
        <div>
            <Header />
            <div className="profile-div">
                <div className='profile-header'>პროფილის შექმნა</div>

                <div className="form_wrapper">
                        <div className="reg-header">რეგისტრაცია</div>
                        <div className="fields">
                            <label>სახელი</label>
                            <input type="text"
                                id="txtName"
                                placeholder="Enter UserName"
                            />
                        </div>
                        <div className="fields">
                            <label>მეილი</label>
                            <input type="text"
                                id="txtEmail"
                                placeholder="Enter E-Mail"
                            />
                        </div>
                        <div className="fields">
                            <label>პაროლი</label>
                            <input type="text"
                                id="txtAddress"
                                placeholder="Enter Password"
                            />
                        </div>

                        <div className="save-div">
                            <Link to="/login">
                                <button className="saveBtn" >შენახვა</button>
                            </Link>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Profile;