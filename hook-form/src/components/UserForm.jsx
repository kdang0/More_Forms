import React, { useState } from 'react'

const UserForm = () => {

    const [form, setForm] = useState({
        firstName : {value : "", hasError: false, error: "First Name must be at least 2 characters", validation: {type: "length", value: 2}},
        lastName : {value: "", hasError: false, error:"Last Name must be at least 2 characters", validation: {type: "length", value: 2}},
        email: {value: "", hasError: false, error:"Email must be at least 5 characters", validation: {type: "length", value: 5}},
        password : {value: "", hasError: false, error:"Passwords must be at least 8 characters", validation: {type: "length", value: 8}},
        confPassword: {value: "", hasError: false, error:"Passwords must match", validation: {type: "comparison"}}
    });

    const validator = (e) => {
        switch (form[e.target.name]["validation"].type){
            case "length":
                return e.target.value.length < form[e.target.name]["validation"].value;
            case "comparison":
                return e.target.value != form["password"].value;
        }   
    }
    const handleForm = (e) => {
        let name = e.target.name;
        let copy = structuredClone(form);
        copy[name].value = e.target.value;
        copy[name].hasError = validator(e);
         setForm({
                ...copy
                })
    }

    return (
        <form>
            <div>
                {
                    form.firstName.hasError ? 
                    <p style={{ color: 'red'}}> {form.firstName.error} </p> :
                    ''
                }

                <label>First Name: </label>
                <input type="text" onBlur={ handleForm} name="firstName" />
            </div>
            <div>
                {
                    form.lastName.hasError ? 
                    <p style={{ color: 'red'}}> { form.lastName.error } </p> :
                    ''
                }
                <label>Last Name: </label>
                <input type="text" onBlur={ handleForm } name="lastName"/>
            </div>
            <div>
                {
                    form.email.hasError ? 
                    <p style={{ color: 'red'}}> { form.email.error } </p> :
                    ''
                }
                <label>Email Address: </label>
                <input type="text" onBlur={ handleForm } name="email"/>
            </div>
            <div>
                {
                    form.password.hasError ? 
                    <p style={{ color: 'red'}}> { form.password.error } </p> :
                    ''
                }
                <label>Password: </label>
                <input type="password" onBlur={ handleForm } name="password"/>
            </div>

            <div>
                {
                    form.confPassword.hasError ? 
                    <p style={{ color: 'red'}}> { form.confPassword.error } </p> :
                    ''
                }
                <label>Confirm Password: </label>
                <input type="password" onBlur={ handleForm } name="confPassword"/>
            </div>
            <input type="submit" value="Create User" />
            <div>
                <h1 className="text-danger">Form Data: </h1>
                <p>First Name: { form.firstName.value } </p>
                <p>Last Name: { form.lastName.value } </p>
                <p>Email: { form.email.value } </p>
                <p>Password: { form.password.value } </p>
                <p>Confirm Password: { form.confPassword.value } </p>
            </div>
        </form>
    )
}


export default UserForm;