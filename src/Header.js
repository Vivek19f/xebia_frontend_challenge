import { Link } from "react-router-dom";
import { Navbar,Nav } from "react-bootstrap";

const Header = () => {
    return ( 
        <>
            <Navbar  expand="lg">
            <Navbar.Brand>Hacker Earth Blog</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link ><Link to="/">Home</Link></Nav.Link>
                <Nav.Link><Link to="/blogs">Blog</Link></Nav.Link>
                <Nav.Link ><Link to="/blogs/new">New Blog</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </>
     );
}
 
export default Header;