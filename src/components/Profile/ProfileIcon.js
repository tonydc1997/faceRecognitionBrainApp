import React from 'react';
// import './Profile.css';
// import { 
//   Dropdown, 
//   DropdownToggle, 
//   DropdownMenu, 
//   DropdownItem 
// } from 'reactstrap';

class ProfileIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDownOpen: false
    }
  }

  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <div className="pa4 tc dropdown">
        <img
          src="http://tachyons.io/img/logo.jpg"
          className="br-100 ba h3 w3 dib dropdown__btn" alt="avatar"
          isOpen={this.state.dropdownOpen} onClick={this.toggle} 
        />
          { this.state.dropdownOpen &&
              <ul
                style={{marginTop: '-5px', marginRight: '0', backgroundColor: 'rgba(255, 255, 255, 0.5)'}}
                className="b--transparent shadow-5 list dropdown__content"
              >
                <li className="db">
                  <button onClick={this.props.toggleModal}
                    className="b--black-70 f6 f5-ns b db pa2 link dim mid-gray dropdown__content">View Profile</button>
                </li>
                <li className="db mr2">
                  <button onClick={() => this.props.onRouteChange('signOut')}
                    className="b--black-70 f6 f5-ns b db pa2 link dim mid-gray dropdown__content">Sign Out</button>
                </li>
              </ul>
          }
      </div>
    );
  }
}

      {/* <div className="pa4 tc">
        // Dropdown
        <div isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          //Dropdown Toggle
          <div
            tag="span"
            data-toggle="dropdown"
            aria-expanded={this.state.dropdownOpen}
          >
          <img
            src="http://tachyons.io/img/logo.jpg"
            className="br-100 ba h3 w3 dib" alt="avatar" />
          </div>
          //Dropdown Menu
          <div
            right
            className="b--transparent shadow-5" 
            style={{marginTop: '20px', backgroundColor: 'rgba(255, 255, 255, 0.5)'}}
          > // Dropdown Item
            <div onClick={this.props.toggleModal}>View Profile</div>
            // Dropdown Item
            <div divider />
            // Dropdown Item
            <div onClick={() => this.props.onRouteChange('signOut')}>Sign Out</div>
          </div>
        </div>
      </div> */}

export default ProfileIcon;