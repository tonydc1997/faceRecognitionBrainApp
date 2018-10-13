import React from 'react';
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
      <div className="pa4 tc bg-red">
        <div isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <img
            src="http://tachyons.io/img/logo.jpg"
            className="br-100 ba h3 w3 dib" alt="avatar" />
          </div>
          <div
            right
            className="b--transparent shadow-5" 
            style={{marginTop: '20px', backgroundColor: 'rgba(255, 255, 255, 0.5)'}}
          >
            <button onClick={this.props.toggleModal}
            className="bb b--black-70">View Profile</button>
            <button onClick={() => this.props.onRouteChange('signOut')}>Sign Out</button>
          </div>
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