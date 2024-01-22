import React from "react";


const CustomButton=({styling})=>{


          const btn={
                 backgroundColor:styling.bgColor,
                 fontSize:styling.fSize,

          }  

        const style_btn={
            fontSize:"40px",
            display:"flex",
            justifyContent:"center",
        
            
        }


   
    return(
        <div style={style_btn}>
           <button type="submit" style={btn}> {styling.btnValue}</button>
        </div>
    );
}
export default CustomButton;