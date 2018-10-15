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
      <div className="pa4 tc dib relative dropdown">
        <img
          src="http://tachyons.io/img/logo.jpg"
          className="br-100 ba h3 w3 dib dropdown__btn" alt="avatar"
          isOpen={this.state.dropdownOpen} onClick={this.toggle} 
        />
          { this.state.dropdownOpen &&
              <ul
                style={{marginTop: "-5px", right: "2.2rem", backgroundColor: "buttonface"}}
                className="b--transparent br2 shadow-5 list mb0 pa0 absolute dropdown__content"
              >
                <li className="db bb b--black-10">
                  <button onClick={this.props.toggleModal}
                    style={{width: "10rem", borderTopLeftRadius: ".25rem", borderTopRightRadius: ".25rem"}}
                    className="b--transparent bg-animate hover-bg-moon-gray f6 f5-ns b db pa2 w4 link dark-gray tl dropdown__content">View Profile</button>
                </li>
                <li className="db m0">
                  <button onClick={() => this.props.onRouteChange('signOut')}
                    style={{width: "10rem", borderBottomLeftRadius: ".25rem", borderBottomRightRadius: ".25rem"}}
                    className="b--transparent bg-animate hover-bg-moon-gray f6 f5-ns b db pa2 w4 link dark-gray tl dropdown__content">Sign Out</button>
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