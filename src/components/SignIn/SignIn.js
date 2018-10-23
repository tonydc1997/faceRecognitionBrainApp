import React from 'react';
// import { userInfo } from 'os';

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      signInEmail: '',
      signInPassword: '',
    };
  }

  onEmailChange = event => {
    this.setState({ signInEmail: event.target.value });
  };

  onPasswordChange = event => {
    this.setState({ signInPassword: event.target.value });
  };

  saveAuthTokenInSession = token => {
    window.sessionStorage.setItem('token', token);
  };

  // https://powerful-depths-38914.herokuapp.com/signIn
  onSubmitSignIn = () => {
    fetch('http://localhost:3000/signIn', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.userId && data.success === 'true') {
          this.saveAuthTokenInSession(data.token);
          fetch(`http://localhost:3000/profile/${data.userId}`, {
            method: 'get',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': data.token,
            },
          })
            .then(response => response.json())
            .then(user => {
              if (user && user.email) {
                this.props.loadUser(user);
                this.props.onRouteChange('home');
              }
            });
        }
      });
  };

  render() {
    const { onRouteChange } = this.props;
    return (
      <article className="br3 ba bw1 b--black-60 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80 bw1 br3 b--mid-gray">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6 tl" htmlFor="email-address">
                  Email
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>

              <div className="mv3">
                <label className="db fw6 lh-copy f6 tl" htmlFor="password">
                  Password
                </label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>

            <div className="">
              <input
                onClick={this.onSubmitSignIn}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Log in"
              />
            </div>

            <div className="lh-copy mt3">
              <p
                onClick={() => onRouteChange('register')}
                className="f6 link dim black db pointer fw6"
              >
                Register
              </p>
              {/* <a href="#0" className="f6 link dim black db">Forgot your password?</a> */}
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default SignIn;
