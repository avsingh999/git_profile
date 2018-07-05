import React, { Component } from 'react';
import {
  Navbar,
  Nav,
  NavItem,
} from "react-bootstrap";

import Profile from '../containers/Profile';
import Slider from '../containers/Slider';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      currentTab : 'slider'
    }
  }

  componentDidMount() {
    console.log("****************")
       this.props.fetchProfile();

  }

 componentWillMount() {
  //  this.props.fetchProfile();
  console.log("&&&&&&&&&&&&")
 }


  render() {
    return (
    <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="Git" onClick={() => this.setState({ currentTab: 'slider' })}>Git Profile</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            <NavItem eventKey={1} href="#" onClick ={() => this.setState({ currentTab:'slider'})}>
              Slider
            </NavItem>
            <NavItem eventKey={2} href="#" onClick={() => this.setState({ currentTab: 'profile' })}>
              Profile  
            </NavItem>
          </Nav>
        </Navbar>
        <div>
          {this.state.currentTab === 'slider' ? <Slider /> : false}
          {this.state.currentTab === 'profile' ? <Profile /> : false}
        </div>
      </div>

        
    );
  }
}

export default App;
