import React,{Component} from 'react';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import Content from './components/Content/Content';
import './App.css';


class App extends Component {
  state = {
    users:[
      {name:'Mike',age:53},
      {name:'Jhon',age:10},
      {name:'Nik',age:100}
    ]

  }
  render(){
    return (
      <div className="App">
        <Header/>
  
        <div className="main">
  
        <Sidebar/>
        <Content users={this.state.users}/>
  
        </div>
  
        <Footer/>
      </div>
    );
  }
}

export default App;
