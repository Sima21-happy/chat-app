import React from "react";
import './signIn.css';
import SignInButton from '../../custom_button/custom_btn.jsx';

const SignIn=()=>{
    //creating object for the signin btn
    const signInProperties={
        btnValue:"sign In",
        bgColor:'gray',
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
      console.log("Sign In..");
      e.preventDefault();
      console.log(user_name);
      console.log(user_email);
      console.log(user_password);
    }
  
   
    return(
        <div className="signIn">
            
           <form onSubmit={HandleSubmit} >
            <h2>Sign In an Account</h2>
            <label>Full Name</label>
            <input type="text" name="f_name"  onChange={handlefullName}/>
            <label>Email</label>
            <input type="email" name="email" onChange={handleEmail}/>
            <label>password</label>
            <input type="password" name="password" onChange={handlePassword}/>

            <SignInButton styling={signInProperties}/>
            
           </form>
        </div>

       


    );
}
export default SignIn;