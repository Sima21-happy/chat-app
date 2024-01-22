import React  from "react";
import './footer.style.css';
import facebook from '../../assets/logo.images/facebook.png'
import Insta from '../../assets/logo.images/insta.jfif'
import Linkedin from '../../assets/logo.images/linkedin.png'
  

const Footer=()=>{

    return(
      <div className="footer">
       
        <div className="Social_Media"  >
             <h5>Social Media</h5>
          
           {/* <div className="icons" style={{
          display:"flex",
          
           }}> */}
           <div style={{
            display:"flex",
            justifyContent:"center"

           }}>
             <div style={{marginRight:"30px",}}><img src={facebook} height="40px" width="40px"/></div>
             <div style={{marginRight:"30px",}}><img src={Insta} height="40px" width="40px"/></div>
            <div className="Linkden"><img src={Linkedin} height="40px" width="40px"/></div>
          </div>

       
        </div>
        
        
        <div className="CopyRight">
          <h5>Copyright@2024</h5>
        </div>

     </div>

    );
}
export default Footer;