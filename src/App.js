import React from 'react';
import Header from './Header/Header';
import './App.css';

class App extends React.Component {
  render(){
    return(
      <div className="App">
        <Header/>
        <div style={{zIndex:'-50',margin:'10px 10px',backgroundImage: "url(" + { Image } + ")" }}>
           <img src='https://cdn1.sph.harvard.edu/wp-content/uploads/sites/30/2019/07/beverage-blur-cup-370018-1200x875.jpg' alt='bg' width='80%' height='500px' />
        </div>
      </div>
    );    
  }
}

export default App;