import React from 'react';
import './App.css';
import Heading from"./components/heading";
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Footer from './components/Footer';
import DarkTheme, { createTheme } from 'react-dark-theme'
 
const lightTheme = {
  background: 'white',
  text: 'black',
}
 
const darkTheme = {
  background: 'black',
  text: 'white',
}

const myTheme = createTheme(darkTheme, lightTheme)

class App extends React.Component {

  render() {
    return (
      <div style={{ backgroundColor: myTheme.background, color: myTheme.text }}>
        <DarkTheme light={lightTheme} dark={darkTheme} defaultDark = {true} />

        <Heading />
        <AboutMe />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;
