import * as React from 'react';
import React {Component} from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
 import Controller from './screens/Controller';
 import Header from './common/header/Header';
 //import Details from './screens/details/Details';
 

class App extends Component {
    render(){
    return (
      <div className="App">
      
        <Header/>
        
        <Login/>
  
      </div>
    );
  }
  }
  export default App;
  