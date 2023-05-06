import React, { Fragment, useState } from "react";
import axios from "axios";
import './Registration.css'

function Registration() {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAdress] = useState('');
    const [showed, setShowed] = useState(false);    

    const handleNameChange = (value) => {
        setName(value);
    }

    const handlePhoneNumberChange = (value) => {
        setPhoneNumber(value);
    }

    const handleAddressChange = (value) => {
        setAdress(value);
    }

    const handleSave = () => {
        const data = {
            Name: name,
            PhoneNumber: phoneNumber,
            Address: address,
            IsActive: 1
        }

        const url = '';
        axios.post(url, data).then((result) => {
            alert(result.data);
        }).catch((error) => { alert(error) })
    }

    return (
        <Fragment>
            <div className="popup" style={showed ? { display: "none" } : { display: "block" }}>
                <div className="close-button" onClick={(e) => setShowed(true)}></div>
                <div className="form_wrapper">
                    <div className="reg-header">Registration</div>
                    <div className="fields">
                        <label>Name</label>
                        <input type="text"
                            id="txtName"
                            placeholder="Enter Name"
                            onChange={(e) => handleNameChange(e.target.value)}
                        /> <br></br>
                    </div>


                    <div className="fields">
                        <label>Phone Number</label>
                        <input type="text"
                            id="txtPhoneNumber"
                            placeholder="Enter Phone Number"
                            onChange={(e) => handlePhoneNumberChange(e.target.value)} />
                        <br></br>
                    </div>

                    <div className="fields">
                        <label>Address</label>
                        <input type="text"
                            id="txtAddress"
                            placeholder="Enter Address"
                            onChange={(e) => handleAddressChange(e.target.value)} />
                        <br></br>
                    </div>

                    <div className="fields">
                        <label>E-Mail</label>
                        <input type="text"
                            id="txtAddress"
                            placeholder="Enter E-Mail"
                            onChange={(e) => handleAddressChange(e.target.value)} />
                        <br></br>
                    </div>

                    <div className="fields">
                        <label>Password</label>
                        <input type="text"
                            id="txtAddress"
                            placeholder="Enter Password"
                            onChange={(e) => handleAddressChange(e.target.value)} />
                        <br></br>
                    </div>

                    <div className="fields">
                        <label>Confirm Password</label>
                        <input type="text"
                            id="txtAddress"
                            placeholder="Confirm Password"
                            onChange={(e) => handleAddressChange(e.target.value)} />
                        <br></br>
                    </div>
                    <div className="save-div">
                        <button className="saveBtn" onClick={() => handleSave()}>Save</button>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default Registration;