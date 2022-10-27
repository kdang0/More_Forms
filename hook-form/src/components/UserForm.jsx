import React, { useState } from 'react'

const UserForm = (props) => {
    const [firstName, setfirstName] = useState("");
    const [firstNameError, setfirstNameError] = useState("");
    const [lastName, setlastName] = useState("");
    const [lastNameError, setlastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passError, setPassError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confPassError, setConfPassError] = useState("");


    const handleFirstName = (e) => {
        if(e.target.value.length < 2) {
            setfirstNameError("First Name must be at least 2 characters");
        } else {
            setfirstName(e.target.value);
            // firstName = e.target.value; 
            setfirstNameError("");
        }
    }

    const handleLastName = (e) => {
        if(e.target.value.length < 2){
            setlastNameError("Last Name must be at least 2 characters");
        } else {
            setlastName(e.target.value);
            setlastNameError("");
        }
    }

    const handleEmail = (e) => {
        if(e.target.value.length < 5){
            setEmailError("Email must be at least 5 characters");
        } else {
            setEmail(e.target.value);
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        if(e.target.value.length < 8){
            setPassError("Passwords must be at least 8 characters");
        } else { 
            setPassword(e.target.value);
            setPassError("");
        }
    }

    const handleConfirmPassword = (e) => {
        if(e.target.value != password){
            setConfPassError("Passwords must match")
        } else{
            setConfirmPassword(e.target.value);
            setConfPassError("");
        }
    }


    


    // const [form, setForm] = useState({});

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { username, email, password };
        setForm(newUser)
    };
    return (
        <form onSubmit= { createUser }>
            <div>
                {
                    firstNameError ? 
                    <p style={{ color: 'red'}}> { firstNameError } </p> :
                    ''
                }

                <label>First Name: </label>
                <input type="text" onChange={ handleFirstName } />
            </div>
            <div>
                {
                    lastNameError ? 
                    <p style={{ color: 'red'}}> { lastNameError } </p> :
                    ''
                }
                <label>Last Name: </label>
                <input type="text" onChange={handleLastName} />
            </div>
            <div>
                {
                    emailError ? 
                    <p style={{ color: 'red'}}> { emailError } </p> :
                    ''
                }
                <label>Email Address: </label>
                <input type="text" onChange={ handleEmail } />
            </div>
            <div>
                {
                    passError ? 
                    <p style={{ color: 'red'}}> { passError } </p> :
                    ''
                }
                <label>Password: </label>
                <input type="password" onChange={ handlePassword } />
            </div>

            <div>
                {
                    confPassError ? 
                    <p style={{ color: 'red'}}> { confPassError } </p> :
                    ''
                }
                <label>Confirm Password: </label>
                <input type="password" onChange={ handleConfirmPassword } />
            </div>
            <input type="submit" value="Create User" />
            <div>
                <h1 className="text-danger">Form Data: </h1>
                <p>First Name: { firstName } </p>
                <p>Last Name: { lastName } </p>
                <p>Email: { email } </p>
                <p>Password: { password } </p>
                <p>Confirm Password: { confirmPassword } </p>
            </div>
        </form>
    )
}

export default UserForm