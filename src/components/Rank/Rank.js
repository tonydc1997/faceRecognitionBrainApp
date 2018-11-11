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

  generateEmoji = entries => {
    const { handleResponse, errorLog } = this.props;
    fetch(
      `https://j8aypdmm19.execute-api.us-east-1.amazonaws.com/prod/rank?rank=${entries}`,
    )
      .then(handleResponse)
      .then(data => this.setState({ emoji: data.input }))
      .catch(errorLog);
  };

  render() {
    const { name, entries } = this.props;
    const { emoji } = this.state;
    return (
      <div>
        <div className="white f3">
          {`${name}, your current entry count is ...`}
        </div>
        <div className="white f1">{entries}</div>
        <div className="white f3">{`Rank Badge: ${emoji}`}</div>
      </div>
    );
  }
}
export default Rank;
