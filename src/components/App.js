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
import Search from './Search';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      currentTab : 'slider',
      jsonList: [],
      seacrher:false,
      name:''
    }
  }
  lis = ['asd']

  componentDidMount() {
       this.props.fetchProfile();

  }
  SearchUser = (event) => {

  
    if(event.target.value===''){
      // console.log("No search")
      this.setState({
        seacrher:false,
        currentTab:'slider'
      })
    }
    else{
      this.setState({
        seacrher:true,
        currentTab:'serach'
      })
    }
    this.setState({
      jsonList:lis
    })
  }

  changeTab = () => {
    this.setState({
      currentTab:'search'
    })
  }


  render() {
    // console.log(this.state.jsonList)

    return (
    <div>
        <Navbar inverse >
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
            <FormControl onChange={this.SearchUser} type="text" placeholder="Search" style={{margin:'10px 0 0 0'}}/>
            </FormGroup>
            
           </Nav>
          </Navbar.Collapse>

        </Navbar>
        <div>
          {this.state.currentTab === 'slider' ? <Slider /> :false}
          {this.state.currentTab === 'profile' ? <Profile /> : false}
          {this.state.seacrher === true ? <Search search_name={this.state.jsonList}/>:false}
        </div>
        </div>
        
    );
  }
}

export default App;
