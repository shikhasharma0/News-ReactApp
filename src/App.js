import './App.css';
import LoadingBar from 'react-top-loading-bar'

import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';

import {
  Routes,
   //Switch,
  Route,
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
            <NavBar/> 
           <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
      
    <Routes>
    <Route exact path="/" element={<News setProgress= {this.setProgress} key="home" pageSize={6} country='in' category="general"/>}/>
          <Route exact path="/business" element={<News setProgress= {this.setProgress} key="business" pageSize={6} country='in' category="business"/>}/>
          <Route exact path="/entertainment" element={<News setProgress= {this.setProgress} key="entertainment"  pageSize={6} country='in' category="entertaient"/>}/>
          <Route exact path="/general" element={<News setProgress= {this.setProgress} key="general"  pageSize={6} country='in' category="general"/>}/>
          <Route exact path="/health" element={<News setProgress= {this.setProgress}key="health"  pageSize={6} country='in' category="health"/>}/>
          <Route exact path="/science"element={<News setProgress= {this.setProgress} key="science" pageSize={6} country='in' category="science"/>}/>
          <Route exact path="/sports"element={<News setProgress= {this.setProgress} key="sports"  pageSize={6} country='in' category="sports"/>}/>
          <Route exact path="/technology"element={<News setProgress= {this.setProgress} key="technology" pageSize={6} country='in' category="technology"/>}/>
         
          </Routes>     
      {/* //<News exact path="/" pageSize={6} country='in' category="general"/> */}
    </div>
    
  );
}
}


// // 09a326b4f3e141e3b4fa6615918ad5f6





