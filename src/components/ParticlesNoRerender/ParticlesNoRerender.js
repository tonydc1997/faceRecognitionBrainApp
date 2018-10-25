import React, { Component } from 'react';
import Particles from 'react-particles-js';
import particlesConfig from './particlesConfig';

class ParticlesNoRerender extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Particles particlesConfig={particlesConfig} className="particles" />
    );
  }
}

export default ParticlesNoRerender;
