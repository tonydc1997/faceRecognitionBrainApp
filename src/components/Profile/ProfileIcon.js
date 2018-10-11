import React from 'react';

class ProfileIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDownOpen: false
    }
  }

  render() {
    return (
      <div class="pa4 tc">
        <img
            src="http://tachyons.io/img/logo.jpg"
            class="br-100 ba h3 w3 dib" alt="avatar" />
      </div>
    );
  }
}

export default ProfileIcon;