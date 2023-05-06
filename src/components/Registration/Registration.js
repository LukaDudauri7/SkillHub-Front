import React, { Fragment, useState } from "react";
import axios from "axios";

function Registration() {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [adress, setAdress] = useState('');

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
            IsActive: 1
        }

        const url = '';
        axios.post(url, data).then((result) => {
            alert(result.data);
        }).catch((error) => { alert(error) })
    }

    return (
        <Fragment>
            <div>Registration</div>
            <label>Name</label>
            <input type="text"
                id="txtName"
                placeholder="Enter Name"
                onChange={(e) => handleNameChange(e.target.value)}
            /> <br></br>

            <label>Phone Number</label>
            <input type="text"
                id="txtPhoneNumber"
                placeholder="Enter Phone Number"
                onChange={(e) => handlePhoneNumberChange(e.target.value)} />
            <br></br>

            <label>Name</label>
            <input type="text"
                id="txtAddress"
                placeholder="Enter Address"
                onChange={(e) => handleAddressChange(e.target.value)} />
            <br></br>
            <button onClick={() => handleSave()}>Save</button>
        </Fragment>
    )
}

export default Registration;