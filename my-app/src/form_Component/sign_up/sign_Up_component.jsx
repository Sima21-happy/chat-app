import React from "react";
import './signUp.css';
import Custom from '../../custom_button/custom_btn.jsx';


const signUp=()=>{
    const signUpProperties={
        btnValue:"signUp",
        bgColor:"#00ffff",
        fSize:"28px",
        bRadius:"20px",
        pdg:"10px 20px",
        tTransform:"uppercase"
  }
  let user_name;
  let user_email;
  let user_password;

  const handlefullName=(e)=>{
              user_name=e.target.value;
  }
  const handleEmail=(e)=>{
    user_email=e.target.value;
 }

 const handlePassword=(e)=>{
    user_password=e.target.value;
}
 
  const HandleSubmit=(e)=>{
    console.log("Sign Up..");
    e.preventDefault();
    console.log(user_name);
    console.log(user_email);
    console.log(user_password);
  }

    return(
        <div className="signUp">
           <form onSubmit={HandleSubmit}>
            <h2>Create an Account</h2>
            <label>Full Name</label>
            <input type="text" name="f_name"  onChange={handlefullName}/>
            <label>Email</label>
            <input type="email" name="email" onChange={handleEmail}/>
            <label>password</label>
            <input type="password" name="password" onChange={handlePassword}/>
            <Custom styling={signUpProperties}/>
           {/* <Custom styleHandling={signUpProperties.btnValue}/> */}
           </form>
        </div>

    );
}
export default signUp;