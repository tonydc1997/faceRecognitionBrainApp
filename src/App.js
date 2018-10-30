import React, { Component } from 'react';
import ParticlesNoRerender from './components/ParticlesNoRerender/ParticlesNoRerender';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Modal from './components/Modal/Modal';
import Profile from './components/Profile/Profile';
import './App.css';

const initialState = {
  input: '',
  imageUrl: '',
  boxes: [],
  route: 'signIn',
  isSignedIn: false,
  isProfileOpen: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: new Date(),
    age: '',
    book: '',
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  // Heroku URLS:
  // https://powerful-depths-38914.herokuapp.com/signIn
  // https://powerful-depths-38914.herokuapp.com/profile/${data.id}
  componentDidMount() {
    const token = window.sessionStorage.getItem('token');
    if (token) {
      fetch('http://localhost:3000/signIn', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token,
        },
      })
        .then(response => response.json())
        .then(data => {
          if (data && data.id) {
            fetch(`http://localhost:3000/profile/${data.id}`, {
              method: 'get',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': token,
              },
            })
              .then(response => response.json())
              .then(user => {
                if (user && user.email) {
                  this.loadUser(user);
                  this.onRouteChange('home');
                }
              });
          }
        })
        .catch(console.log);
    }
  }

  loadUser = data => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined,
        age: data.age,
        book: data.book,
      },
    });
  };

  calculateFaceLocations = data => {
    if (data && data.outputs) {
      const image = document.getElementById('inputImage');
      const width = Number(image.width);
      const height = Number(image.height);
      return data.outputs[0].data.regions.map(face => {
        const clarifaiFace = face.region_info.bounding_box;
        return {
          leftCol: clarifaiFace.left_col * width,
          topRow: clarifaiFace.top_row * height,
          rightCol: width - clarifaiFace.right_col * width,
          bottomRow: height - clarifaiFace.bottom_row * height,
        };
      });
    }
  };

  displayFaceBoxes = boxes => {
    if (boxes) {
      this.setState({ boxes });
    }
  };

  onInputChange = event => {
    this.setState({ input: event.target.value });
  };

  // Heroku URLS:
  // https://powerful-depths-38914.herokuapp.com/imageUrl
  // https://powerful-depths-38914.herokuapp.com/image
  onButtonSubmit = () => {
    const { input, user } = this.state;
    this.setState({ imageUrl: input });
    fetch('http://localhost:3000/imageUrl', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': window.sessionStorage.getItem('token')
      },
      body: JSON.stringify({
        input,
      }),
    })
      .then(response => response.json())
      .then(response => {
        if (response) {
          fetch('http://localhost:3000/image', {
            method: 'put',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': window.sessionStorage.getItem('token')
            },
            body: JSON.stringify({
              id: user.id,
            }),
          })
            .then(resp => resp.json())
            .then(count => {
              this.setState(Object.assign(user, { entries: count }));
            })
            .catch(console.log);
        }
        this.displayFaceBoxes(this.calculateFaceLocations(response));
      })
      .catch(err => console.log(err));
  };

  saveAuthTokenInSession = token => {
    window.sessionStorage.setItem('token', token);
  };

  removeAuthTokenInSession = () => {
    window.sessionStorage.removeItem('token');
  };

  onRouteChange = route => {
    if (route === 'signOut') {
      this.removeAuthTokenInSession();
      return this.setState(initialState);
    }
    if (route === 'home') {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route });
  };

  toggleModal = () => {
    this.setState(prevState => ({
      ...prevState,
      isProfileOpen: !prevState.isProfileOpen,
    }));
  };

  render() {
    const {
      isSignedIn,
      imageUrl,
      route,
      boxes,
      isProfileOpen,
      user,
    } = this.state;
    switch (route) {
      default:
        return (
          <div className="App">
            <ParticlesNoRerender />
            <Navigation
              isSignedIn={isSignedIn}
              onRouteChange={this.onRouteChange}
            />
            <Register
              loadUser={this.loadUser}
              onRouteChange={this.onRouteChange}
            />
          </div>
        );
      case 'signIn':
        return (
          <div className="App">
            <ParticlesNoRerender />
            <Navigation
              isSignedIn={isSignedIn}
              onRouteChange={this.onRouteChange}
            />
            <SignIn
              loadUser={this.loadUser}
              onRouteChange={this.onRouteChange}
              saveAuthTokenInSession={this.saveAuthTokenInSession}
            />
          </div>
        );
      case 'home':
        return (
          <div className="App">
            <ParticlesNoRerender />
            <Navigation
              isSignedIn={isSignedIn}
              onRouteChange={this.onRouteChange}
              toggleModal={this.toggleModal}
            />
            <Logo />
            <Rank name={user.name} entries={user.entries} />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <FaceRecognition boxes={boxes} imageUrl={imageUrl} />
            {isProfileOpen && (
              <Modal>
                <Profile
                  isProfileOpen={isProfileOpen}
                  toggleModal={this.toggleModal}
                  loadUser={this.loadUser}
                  user={user}
                />
              </Modal>
            )}
          </div>
        );
    }
  }
}

export default App;
