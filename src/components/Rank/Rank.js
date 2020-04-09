import React, { useState } from 'react';

const Rank = ({entries, name, errorLog}) => {
  const [emojiRank, setEmoji] = useState({
    emoji: '',
  })
  const { emoji } = emojiRank;

  const generateEmoji = entries => {
    fetch(
      `https://j8aypdmm19.execute-api.us-east-1.amazonaws.com/prod/rank?rank=${entries}`
    )
      .then(response => response.json())
      .then(data => setEmoji({ emoji: data.input }))
      .catch(errorLog);
  };

  componentDidMount() {
    this.generateEmoji(entries);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.entries === entries && prevProps.name === name) {
      return null;
    }
    this.generateEmoji(entries);
  }

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


export default Rank;
