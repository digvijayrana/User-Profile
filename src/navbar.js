import React ,{Component}  from "react";
import pic from "../src/img/pic.jpg";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
//   NavLink,
  Collapse,
  Container
} from "shards-react";

class Mainavbar extends Component {
  constructor(props) {
    super(props);

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);

    this.state = {
      dropdownOpen: false,
      collapseOpen: false
    };
  }

  toggleDropdown() {
    this.setState({
      ...this.state,
      ...{
        dropdownOpen: !this.state.dropdownOpen
      }
    });
  }

  toggleNavbar() {
    this.setState({
      ...this.state,
      ...{
        collapseOpen: !this.state.collapseOpen
      }
    });
  }

  render() {
    return (
      <Navbar className="border border-bottom-0 border-secondary" type="dark" theme="dark" expand="md">
        <Container>
        <NavbarBrand className="text-danger font-weight-bold" href="#"> React</NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} />

        <Collapse open={this.state.collapseOpen} navbar>
          <Nav navbar className="ml-auto">
            <NavItem >
            <div className="media">
               <img className="rounded-circle" src={pic} alt="prashant" width="50px"/> 
               {/* <img src="./images/prashant.jpg" alt="Jane Doe" class="mr-3 mt-3 rounded-circle" style={{width:"45px"}}/> */}
            </div>  
            </NavItem>
          </Nav>
        </Collapse>
        </Container>
      </Navbar>
    
    );
  }
}
export default Mainavbar;