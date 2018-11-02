import React, { Component } from 'react';
import Particles from 'react-particles-js';
import particlesConfig from './particlesConfig';

class ParticlesNoRerender extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return <Particles params={particlesConfig} className="particles" />;
  }
}

export default ParticlesNoRerender;
