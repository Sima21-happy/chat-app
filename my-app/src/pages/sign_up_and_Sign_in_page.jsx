import React from "react";
import SignIn from '../form_Component/sign_in/sign_In.component'
import SignUp from '../form_Component/sign_up/sign_Up_component'
import './signUpIn.css';


const signUpInPage=()=>{

    return(
       <div className="signUpIn">
          <SignUp/>
         <SignIn/>

       </div>
 
    );
}
export default signUpInPage;