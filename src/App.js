import React, { useState, useEffect } from 'react'; 
import { BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import axios from "axios"; 
import './styles.css';
import SubtitlePage from './SubtitlePage.js';
/*komentar*/
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitles:[],
      selectedSubtitle: null, 
      error: null
    };
    
    this.fetchData();
  };

  fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/text');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();

      this.setState({ subtitles: jsonData });
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  handleSubtitleClick = (subtitle) => {
    this.setState({ selectedSubtitle: subtitle });
  };

  render() {
    return (
      <Router>
        <div className="container">
          <div className="sidebar">
            <ul>
              <li>
                <Link to="/">Domov</Link>
              </li>
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
              <Route path="/" element={<Home />} />
              
              {this.state.subtitles.map((subtitle) => (
                <Route key={subtitle.id} path={`/subtitles/${subtitle.name}`} element={<SubtitlePage subtitle={subtitle} />} />
              ))}
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

function Home() {
  return (
    <div className="subtitle-content">
      <h2>Dobrodošli na spletno stran Umetna inteligenca!</h2>

      <img src={process.env.PUBLIC_URL + '/Slika1.jpg'} alt="Slika 1" />
      <img src={process.env.PUBLIC_URL + '/Slika2.jpg'} alt="Slika 2" />
      <img src={process.env.PUBLIC_URL + '/Slika3.jpg'} alt="Slika 3" />

      <video controls>
        <source src={process.env.PUBLIC_URL + '/Video1.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video controls>
        <source src={process.env.PUBLIC_URL + '/Video2.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default App;