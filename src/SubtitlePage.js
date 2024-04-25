import React from 'react';
import { Link } from 'react-router-dom';

class SubtitlePage extends React.Component {
  render() {
    const { subtitle } = this.props;
    return (
      <div>
        {subtitle ? (
          <div className="subtitle-content">
            <h2>{subtitle.name}</h2>
            <p>{subtitle.content}</p>
          </div>
        ) : (
          <div className="subtitle-content"></div>
        )}
      </div>
    );
  }
}

export default SubtitlePage;

