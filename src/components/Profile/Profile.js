import React from 'react';
import './Profile.css';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    const { user } = this.props;
    this.state = {
      name: user.name,
      age: user.age,
      book: user.book,
    };
  }

  onFormChange = event => {
    switch (event.target.name) {
      case 'user-name':
        this.setState({ name: event.target.value });
        break;
      case 'user-age':
        this.setState({ age: event.target.value });
        break;
      case 'user-book':
        this.setState({ book: event.target.value });
        break;
      default:
    }
  };

  // Heroku URL:
  // https://powerful-depths-38914.herokuapp.com/profile/${user.id}
  onProfileUpdate = data => {
    const { user, loadUser, toggleModal, errorLog } = this.props;
    const getToken = window.sessionStorage.getItem('token');
    const postRequestOptions = {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': getToken,
      },
      body: JSON.stringify({ formInput: data }),
    };
    fetch(`http://localhost:3000/profile/${user.id}`, postRequestOptions)
      .then(resp => {
        if (resp.status === 200 || resp.status === 304) {
          toggleModal();
          loadUser({ ...user, ...data });
        }
      })
      .catch(errorLog);
  };

  render() {
    const { user, toggleModal } = this.props;
    const { name, age, book } = this.state;
    return (
      <div className="profile-modal">
        <article className="br3 ba bw1 b--black-60 mv4 w-100 w-70-m w-35-l mw6 shadow-5 center bg-white">
          <main className="pa4 black-80 w-80">
            <img
              src="http://tachyons.io/img/logo.jpg"
              className="h3 w3 dib"
              alt="avatar"
            />
            <h1>{name}</h1>
            <h4>{`Images Submitted: ${user.entries}`}</h4>
            <p>
              {`Member since: ${new Date(user.joined).toLocaleDateString()}`}
            </p>
            <hr />
            <label className="mt2 fw6" htmlFor="user-name">
              Name:
            </label>
            <input
              onChange={this.onFormChange}
              className="pa2 ba w-100"
              type="text"
              placeholder={user.name}
              name="user-name"
              id="name"
            />
            <label className="mt2 fw6" htmlFor="user-age">
              Age:
            </label>
            <input
              onChange={this.onFormChange}
              className="pa2 ba w-100"
              type="text"
              placeholder={user.age}
              name="user-age"
              id="age"
            />
            <label className="mt2 fw6" htmlFor="user-book">
              Favorite Book:
            </label>
            <input
              onChange={this.onFormChange}
              className="pa2 ba w-100"
              type="text"
              placeholder={user.book}
              name="user-book"
              id="book"
            />
            <div
              className="mt2"
              style={{ display: 'flex', justifyContent: 'space-evenly' }}
            >
              <button
                onClick={() => this.onProfileUpdate({ name, age, book })}
                className="ba pa2 grow pointer w-40 bg-blue b--dark-blue br1 white b"
                type="button"
              >
                Save
              </button>
              <button
                className="ba pa2 grow pointer w-40 bg-white b--dark-red br1 red b"
                onClick={toggleModal}
                type="button"
              >
                Cancel
              </button>
            </div>
          </main>
          <div className="modal-close" onClick={toggleModal}>
            &times;
          </div>
        </article>
      </div>
    );
  }
}

export default Profile;
