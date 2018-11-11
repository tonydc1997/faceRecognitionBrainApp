import React from 'react';

class Rank extends React.Component {
  constructor() {
    super();
    this.state = {
      emoji: '',
    };
  }

  componentDidMount() {
    const { entries } = this.props;
    this.generateEmoji(entries);
  }

  render() {
    return (
      <div>
        <div className="white f3">
          {`${name}, your current entry count is ...`}
        </div>
        <div className="white f1">{entries}</div>
      </div>
    );
  }
}
export default Rank;
