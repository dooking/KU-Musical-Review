import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MusicalPage from './pages/MusicalPage';
import SearchPage from './pages/SearchPage';
import Navbar from './components/navbar';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Navbar/>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/musical" exact component={MusicalPage} />
        <Route path="/search" exact component={SearchPage} />
      </Switch>
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0px;
    margin: 0px;
    font-family: 'TmoneyRoundWindExtraBold';
    box-sizing: border-box;
  }
  body {
    height: 700px;
    background: #61248C;
  }
  a {
    text-decoration: none;
  }
  @font-face {
    font-family: 'TmoneyRoundWindExtraBold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/TmoneyRoundWindExtraBold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;

export default App;
