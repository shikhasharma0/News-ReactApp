import { Route, Switch } from "react-router";
import './App.css';
import LoadingBar from 'react-top-loading-bar'

import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';

import {
  BrowserRouter as Router,
   //Switch,
  Route
} from "react-router-dom";

export default class App extends Component {
    state={
        progress: 0
      }
      setProgress  = (progress)=>{
        this.setState({progress: progress})
      }

    render(){
        return (
          <div >
             <Router>
                  <NavBar/> 
                 <LoadingBar
              color='#f11946'
              progress={this.state.progress}
            />
    

    <Route exact path="/"><News setProgress= {this.setProgress} key="general" pageSize={6} country='in' category="general"/></Route>   
          <Route exact path="/business"><News setProgress= {this.setProgress} key="business" pageSize={6} country='in' category="business"/></Route>
          <Route exact path="/entertaient"><News setProgress= {this.setProgress} key="entertaient"  pageSize={6} country='in' category="entertaient"/></Route>
          <Route exact path="/general"><News setProgress= {this.setProgress} key="general"  pageSize={6} country='in' category="general"/></Route>
          <Route exact path="/health"><News setProgress= {this.setProgress}key="health"  pageSize={6} country='in' category="health"/></Route>
          <Route exact path="/science"><News setProgress= {this.setProgress} key="science" pageSize={6} country='in' category="science"/></Route>
          <Route exact path="/sports"><News setProgress= {this.setProgress} key="sports"  pageSize={6} country='in' category="sports"/></Route>
          <Route exact path="/technology"><News setProgress= {this.setProgress} key="technology" pageSize={6} country='in' category="technology"/></Route>     
         

   </Router>
             </div>
        
);
}


}