import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { ImHome } from 'react-icons/im';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';
import './Navigation.css';

const Navigation = () =>
{
  const { user, logOut } = useAuth();
    return (
     <div className="header">
			<Navbar
				sticky="top"
				collapseOnSelect expand="sm">
				<Container>
					<Link to="/home">
						{/* <img to="/home" className="logo" src={logo} alt="" /> */}
					</Link>
					<Navbar.Toggle />
					<Navbar.Collapse className="justify-content-end">
						<Nav.Link className="ms-3 home" as={Link} to="/home">
							<ImHome className="w-8 h-8" />
						</Nav.Link>
						{/* <Nav.Link className="ms-3 " as={Link} to="/offers">
							Offers
						</Nav.Link> */}
						{/* <Nav.Link className="ms-3 " as={Link} to="/addoffers">
							Add Offer
						</Nav.Link> */}
						{/* <Nav.Link className="ms-3 " as={Link} to="/manageoffer">
							Manage Offer
						</Nav.Link> */}
						<Nav.Link className="ms-3 " as={Link} to="/explore">
							Explore
						</Nav.Link>

					<Nav.Link as={HashLink} to="/home#contact">
              Contact
            </Nav.Link>

						{user?.email ? (
							<Button onClick={logOut} variant="light">
								Logout
							</Button>
						) : (
							<Nav.Link as={Link} to="/login">
								Login
							</Nav.Link>
						)}
						<br />
						<Navbar.Text>
							<Link to="/">{user?.displayName}</Link>
						</Navbar.Text>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
    );
};

export default Navigation;