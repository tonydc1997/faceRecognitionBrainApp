import React, { useState } from 'react';

const Register = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
    name: '',
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  // Heroku URL:
  // https://powerful-depths-38914.herokuapp.com/register

  // Local URL:
  // http://localhost:3000/(register)(profile)
  const onSubmitSignIn = () => {
    const { email, password, name } = this.state;
    const {
      loadUser,
      onRouteChange,
      saveAuthTokenInSession,
      handleResponse,
    } = this.props;
    const postRequestOptions = {
      method: 'post',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: JSON.stringify({
        email,
        password,
        name,
      }),
    };
    fetch(
      'https://powerful-depths-38914.herokuapp.com/register',
      postRequestOptions
    )
      .then(handleResponse)
      .then(data => {
        if (data.userId && data.success === 'true') {
          const getRequestOptions = {
            method: 'get',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              Authorization: data.token,
            },
          };
          saveAuthTokenInSession(data.token);
          fetch(
            `https://powerful-depths-38914.herokuapp.com/profile/${data.userId}`,
            getRequestOptions
          )
            .then(handleResponse)
            .then(user => {
              if (user.id) {
                loadUser(user);
                onRouteChange('home');
              }
            });
        }
      });
  };

  return (
    <article className="br3 ba bw1 b--black-60 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Register</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6 tl" htmlFor="name">
                Name
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="text"
                name="name"
                id="name"
                onChange={this.onNameChange}
              />
            </div>
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
              value="Register"
            />
          </div>
        </div>
      </main>
    </article>
  );
};

export default Register;
