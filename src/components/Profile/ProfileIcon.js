import React from 'react';

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
      <div className="pa4 tc dib relative">
        <img
          src="http://tachyons.io/img/logo.jpg"
          className="br-100 ba h3 w3 dib" alt="avatar"
          onClick={this.toggle} 
        />
        {this.state.dropdownOpen && (
          <ul
            style={{marginTop: "-5px", right: "2.2rem", backgroundColor: "buttonface"}}
            className="b--transparent br2 shadow-5 list mb0 pa0 absolute"
          >
            <li className="db bb b--black-10">
              <button onClick={this.props.toggleModal}
                style={{width: "10rem", borderTopLeftRadius: ".25rem", borderTopRightRadius: ".25rem"}}
                className="b--transparent bg-animate hover-bg-moon-gray f6 f5-ns b db pa2 w4 link dark-gray tl">View Profile</button>
            </li>
            <li className="db m0">
              <button onClick={() => this.props.onRouteChange('signOut')}
                style={{width: "10rem", borderBottomLeftRadius: ".25rem", borderBottomRightRadius: ".25rem"}}
                className="b--transparent bg-animate hover-bg-moon-gray f6 f5-ns b db pa2 w4 link dark-gray tl">Sign Out</button>
            </li>
          </ul>
        )
        }
      </div>
    );
  }
}

export default ProfileIcon;