// PopupCard.js
import React from 'react';
import './styles/Chart.css';

const PopupCard = ({ showPopup, onClose }) => {
  if (!showPopup) return null;

  return (
    <div className="popup-card">
      <div className="popup-content">
      <div class="container">
  <div ><h4 className='title'>Add New Profile</h4></div>
  <div class="element"><button className="close-button" onClick={onClose}><span className="close-icon">×</span></button></div>
</div>
        <hr></hr>
        
      
        <p className='basic'>Basic</p>
        <div className='form'>
        <label>Enter Name</label>        
           <input
            type="text"
            name="Username"
            isrequired= {true}
            // value={username}
            placeholder='Eg.John'
            // onChange={(e) => setusername(e.target.value)}
          />
          <label>Enter Email</label>
          <input
            type="text"
            name="email"
            placeholder='Eg.Jone@xyz.com'
            // onChange={(e) => setpassword(e.target.value)}
          />
           <label>Enter phone</label>
          <input
            type="text"
            name="number"
            placeholder='Eg.9123456780'
            // onChange={(e) => setpassword(e.target.value)}
          />
          </div>
          <hr className='divider' />
<button className='nextbtn' onClick={console.log('btn clicked')}>Next</button>       
      </div>
    </div>
  );
};

export default PopupCard;
