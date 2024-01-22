import React from "react";
import Card from '../card_component/card.component.jsx';
import students from '../card_component/dataset/student_info.jsx';
import SignUpInPage from './sign_up_and_Sign_in_page';
import Navbar from '../component/nav_bar/nav_bar.component.jsx';
import Footer from '../component/footer/footer.component.jsx';




const HomePage=()=>{

    return(
        <div className='HomePage'>
            <Navbar/>
           
         
        
        <div className='App'>
            {
                students.map((s)=>
                <Card key={s.name}  s={s}/>
                )
            }

       </div>
     
       <SignUpInPage />
       <Footer/>
     
         
    </div>

  

    );
}
export default HomePage