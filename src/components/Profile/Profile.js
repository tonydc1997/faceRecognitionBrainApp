import React from 'react';
import './Profile.css';

const Profile = ({ isProfileOpen, toggleModal }) => {
  return (
    <div className="profile-modal">
      <article className="br3 ba bw1 b--black-60 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center bg-white">
        <main className="pa4 black-80 w-80">
        <img
          src="http://tachyons.io/img/logo.jpg"
          className="h3 w3 dib" alt="avatar" />
          <h1>Shovel Knight</h1>
          <h4>Images Submitted: NUMBER</h4>
          <p>Member since: TIMESTAMP</p>
          <hr/>
          <label className="mt2 fw6" htmlFor="user-name">Name</label>
          <input 
            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 hover-black" 
            type="text" 
            name="name"  
            id="name" 
            onChange={this.onNameChange}
          />
          <input 
            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 hover-black" 
            type="email" 
            name="email-address"  
            id="email-address" 
            onChange={this.onEmailChange}
          />
          <input 
            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 hover-black" 
            type="password" 
            name="password"  
            id="password" 
            onChange={this.onPasswordChange}
          />
        </main>
      </article>
    </div>
  );
}

export default Profile;
