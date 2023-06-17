import React, { useState } from "react";

import '../App.css';





const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [cpass, setCpass] = useState("");
    const [error, setError] = useState("");
    const [success,setSuccess]=useState("");

    function formSubmit(e){
       e.preventDefault();
       if(!email && !name && !pass  && !cpass){
        setError("Error:All the fields are mandatory");
       }
       else if(!name.includes==' '){
        setError("Error:Full Name Required!");
       }
       else if(pass!=cpass){
        setError("Error:Password doesn't Match!")
       }

       else if(!(email.includes)=='@'){
        setError("Error:Required Valid Email")
       }

       else{
        setSuccess("Successfully Signed Up!")
       }
    }

    return (
        <form className="form-label">

            <h1 className='heading'>Signup</h1>
            <div className="input-field">
                <input type="text" className="fullname" onChange={(e) => setName(e.target.value.trim())} placeholder="Full Name" /><br />

                <input type="email" className="email" onChange={(e) => setEmail(e.target.value.trim())} placeholder="Email" /><br />

                <input type="password" className="password" onChange={(e) => setPass(e.target.value.trim())} placeholder="Password" /><br />

                <input type="password" className="confirm-password" onChange={(e) => setCpass(e.target.value.trim())} placeholder="Confirm Password" /><br />
            </div>
            {error ? <p className="error">{error}</p>:<p className="success">{success}</p>}
            <input type="submit" value="Signup" onClick={formSubmit} className="btn" />

        </form>

    )
}

export default Form;