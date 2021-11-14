import { Box } from '@mui/system';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { ImHome } from 'react-icons/im';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../Images/logo2.png';
import './Navigation.css';

const Navigation = () =>
{
  const { user, logOut } = useAuth();
    return (
     <div className="header">
			<Navbar
				sticky="top"
				collapseOnSelect expand="sm"
			>
				<Container>
					<Link to="/home">
						<img to="/home" className="logo" src={logo} alt="" />
					</Link>
					<Navbar.Toggle />
					<Navbar.Collapse className="justify-content-end">
						<Nav.Link className="ms-3 home" as={Link} to="/home">
							<ImHome className="w-8 h-8" />
						</Nav.Link>
						
						<Nav.Link className="ms-3 " as={Link} to="/explore">
							Explore
						</Nav.Link>

					<Nav.Link as={HashLink} to="/home#contact">
              Contact
            </Nav.Link>

						{

						  user?.email ?
                            <Box>
                                <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                                    <Button color="secondary">Dashboard</Button>
                                </NavLink>
                                <Button onClick={logOut} color="secondary">Logout</Button>
                            </Box>
                            :
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                <Button color="inherit">Login</Button>
                            </NavLink>


						}
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