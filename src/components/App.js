import React, { Component } from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  FormControl,
  FormGroup,
  Button
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
       this.props.fetchProfile();

  }


  render() {
    return (
    <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a onClick={() => this.setState({ currentTab: 'slider' })} style={{cursor:'pointer'}}>Git Profile</a>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav > <NavItem eventKey={1} onClick ={() => this.setState({ currentTab:'slider'})}>
              Slider
            </NavItem>
            <NavItem eventKey={2} onClick={() => this.setState({ currentTab: 'profile' })}>
              Profile  
            </NavItem>
            </Nav>
           
            <Nav pullRight>
            <FormGroup>
            <FormControl type="text" placeholder="Search" style={{margin:'10px 0 0 0'}}/>
            </FormGroup>
            
           </Nav>
          </Navbar.Collapse>

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
