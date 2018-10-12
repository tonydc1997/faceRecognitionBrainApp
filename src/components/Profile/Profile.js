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
          <label className="mt2 fw6" htmlFor="user-name">Name:</label>
          <input 
            className="pa2 ba w-100" 
            type="text" 
            placeholder="Shovel Knight"
            name="user-name"  
            id="name" 
          />
          <label className="mt2 fw6" htmlFor="user-age">Age:</label>
          <input 
            className="pa2 ba w-100" 
            type="text" 
            placeholder="90"
            name="user-age"  
            id="age" 
          />
          <label className="mt2 fw6" htmlFor="user-book">Favorite Book:</label>
          <input 
            className="pa2 ba w-100" 
            type="text" 
            placeholder="Deep Work"
            name="user-book"  
            id="book" 
          />

        </main>
      </article>
    </div>
  );
}

export default Profile;
