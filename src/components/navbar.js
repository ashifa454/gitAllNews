import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,Button,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';  
import {auth,GoogleProvider} from './firebase';
export default class NavBar extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false,
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
      signInUsingGoogle=()=>{
          auth.signInWithPopup(GoogleProvider).then((result)=>{
              if(result!==null){
                  localStorage.setItem('user',JSON.stringify({
                      'displayName':result.user.displayName,
                      'uid':result.user.uid,
                      'dp':result.user.photoURL
                  }))
              }
          }).catch(error=>{
              console.log('Something Wen Wrong')
          })
      }
  render() {
    return (
        <div>
        <Navbar className="fixed-top" color="secondary" dark expand="md">
          <NavbarBrand href="/">GitAll News</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            {this.props.user? <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    {this.props.user.displayName}
                </DropdownToggle>
                <DropdownMenu right>
               <DropdownItem/>
                  <DropdownItem>
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>:<NavItem>
                <NavLink>
                    <Button onClick={()=>this.signInUsingGoogle()}>Login with Google</Button>
                </NavLink>
              </NavItem>}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
