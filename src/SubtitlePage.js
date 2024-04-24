import React from 'react';

class SubtitlePage extends React.Component {
  render() {
    const { subtitles } = this.props;
    const subtitleName = window.location.pathname.split('/').pop();
    const subtitle = subtitles.find((subtitle) => subtitle.name === subtitleName);
    return (
      <div>
        {subtitle ? (
          <div className="subtitle-content">
            <h2>{subtitle.name}</h2>
            <p>{subtitle.content}</p>
          </div>
        ) : (
          <div className="subtitle-content">
            <h2>Subtitle Not Found</h2>
          </div>
        )}
      </div>
    );
  }
}

export default SubtitlePage;



