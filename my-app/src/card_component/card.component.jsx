import React from 'react';

import './card_style.css';

const card=({s})=>{
    return(
        <div className="card">
          <div className="photo">
            <img src={s.profilepic}/> 
          </div>
          <div className="info">
              <span>{s.name}</span>
              <span>{s.address}</span>
          </div>

        </div>
    )
}
export default card;