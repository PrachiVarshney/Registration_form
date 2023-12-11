import React, { useEffect, useState } from "react";
import './App.css';

function Child() {
    const data = { name: "", email: "", password: "" };
    const [inputData, setInputData] = useState(data);
    const [flag, setFlag] = useState(false);

    useEffect(() => {
        console.log("Registered");
    }, [flag]);

    function changehandler(e) {
        setInputData(prevData => ({ ...prevData, [e.target.name]: e.target.value }));
        console.log(inputData);
    }

    function submitHandler(e) {
        e.preventDefault();
        if (!inputData.name || !inputData.email || !inputData.password) {
            alert("All fields are mandatory");
        } else {
            setFlag(true);
        }
    }

    return (
        <div className="form-container">
            <pre>{flag ? <h2>Hello {inputData.name}, You've Registered Successfully</h2> : ""}</pre>
            <form onSubmit={submitHandler}>
                <h1>Registration Form</h1>
                <label>Name:</label>
                <input type='text' placeholder="Enter Your Name" name="name" onChange={changehandler} value={inputData.name}></input>
                <label>Email:</label>
                <input type='text' placeholder="Enter your Email" name="email" onChange={changehandler} value={inputData.email}></input>
                <label>Password:</label>
                <input type='password' placeholder="Enter your Password" name="password" onChange={changehandler} value={inputData.password}></input>
                <button type="submit">Submit</button>
            </form>
        </div>
         
    )
}
       
    

export default Child;
