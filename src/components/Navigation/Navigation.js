import React from 'react';
import ProfileIcon from '../Profile/ProfileIcon';

const Navigation = ({ onRouteChange, isSignedIn, toggleModal }) => {
  if (isSignedIn) {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <ProfileIcon onRouteChange={onRouteChange} toggleModal={toggleModal} />
      </nav>
    );
  }
  return (
    <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <p
        onClick={() => onRouteChange('signIn')}
        className="f3 link dim white underline pa3 pointer"
      >
        Sign In
      </p>
      <p
        onClick={() => onRouteChange('register')}
        className="f3 link dim white underline pa3 pointer"
      >
        Register
      </p>
    </nav>
  );
};

export default Navigation;
