import React, { useState } from 'react';

const SignIn = ({
  loadUser,
  onRouteChange,
  saveAuthTokenInSession,
  handleResponse,
}) => {
  const [signInCredentials, setSignInCredentials] = useState({
    signInEmail: '',
    signInPassword: '',
  });
  const { signInEmail, signInPassword } = signInCredentials;

  const handleChange = event => {
    const { name, value } = event.target;
    setSignInCredentials({ ...signInCredentials, [name]: value });
  };

  // Heroku URLS:
  // https://powerful-depths-38914.herokuapp.com/signIn
  // https://powerful-depths-38914.herokuapp.com/profile/${data.userId}

  // Local URLS:
  // http://localhost:3000/signIn
  // http://localhost:3000/profile/
  const onSubmitSignIn = () => {
    const postRequestOptions = {
      method: 'post',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: JSON.stringify({
        email: signInEmail,
        password: signInPassword,
      }),
    };
    fetch(
      'https://powerful-depths-38914.herokuapp.com/signIn',
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
              if (user && user.email) {
                loadUser(user);
                onRouteChange('home');
              }
            });
        }
      });
  };

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
                onChange={handleChange}
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
                onChange={handleChange}
              />
            </div>
          </fieldset>

          <div className="">
            <input
              onClick={onSubmitSignIn}
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
};

export default SignIn;
