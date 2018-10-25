import React, { Component } from "react";
import Particles from 'react-particles-js';
import particlesConfig from './particlesConfig';

class ParticlesNoRerender extends React.Component {
  shouldComponentUpdate(nextProps, nextState) => {
    return false;
  }

  render() {
    return (
      <Particles particlesConfig={particlesConfig />
    )
  }
}

export default ParticlesNoRerender;