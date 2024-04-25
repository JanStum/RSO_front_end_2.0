import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './styles.css';
import SubtitlePage from './SubtitlePage.js';
/*komentar*/
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitles: [
        { id: 1, name: '1910s', content: `asdf` },
        { id: 2, name: '1920s', content: `bcda` },
        { id: 3, name: '1930s', content: `adff` },
        { id: 4, name: '1940s', content: `asdg` },
        { id: 5, name: '1950s', content: `asdfh` },
        { id: 6, name: '1960', content: `sssgfg` },
        { id: 7, name: '1970s', content: `V456` },
        { id: 8, name: '1980s', content: `0hjhdfs` },
        { id: 9, name: '1990s', content: `fasdhg` },
        { id: 10, name: '2000s', content: `yyyx` },
        { id: 11, name: '2010s', content: `Vjfgsy` },
        { id: 12, name: '2020s', content: `jhdxyas` },
      ],
      selectedSubtitle: null, // Dodamo stanje za izbrano desetletje
    };
  }

  handleSubtitleClick = (subtitle) => {
    this.setState({ selectedSubtitle: subtitle });
  };

  render() {
    return (
      <Router>
        <div className="container">
          <div className="sidebar">
            <ul>
              {this.state.subtitles.map((subtitle) => (
                <li key={subtitle.id}>
                  <Link to={`/subtitles/${subtitle.name}`} onClick={() => this.handleSubtitleClick(subtitle)}>
                    {subtitle.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="content">
            <Routes>
              <Route path="/subtitles/:name" element={<SubtitlePage subtitles={this.state.subtitles} />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
