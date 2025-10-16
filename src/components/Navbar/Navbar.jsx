import { Nav, NavLogo, NavMenu, NavItem } from "./Navbar.styles";
import Button from "../Button/Button";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";

const Navbar = () => {
  const { isAuthenticated, isAdmin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <Nav>
      <Link to="/">
        <NavLogo>
          <img src={logo} alt="Blood Bank Logo" />
          <span>Smart Blood Bank</span>
        </NavLogo>
      </Link>
      
      <NavMenu>
        {isAuthenticated ? (
          
          isAdmin ? (
            <>
              <NavItem>
                <Link to="/">Home (View Site)</Link>
              </NavItem>
              <NavItem>
                <Link to="/admin/dashboard">Dashboard</Link>
              </NavItem>
              <NavItem>
                <Link to="/available-blood">Available Blood</Link>
              </NavItem>
              <NavItem>
                <Link to="/admin/donations">Donations</Link>
              </NavItem>
              <NavItem>
                <Link to="/admin/requests">Requests</Link>
              </NavItem>
            </>
          ) : (
            <>
              <NavItem>
                <Link to="/">Home</Link>
              </NavItem>
              <NavItem>
                <Link to="/available-blood">Available Blood</Link>
              </NavItem>
              <NavItem>
                <Link to="/donate-blood">Donate Blood</Link>
              </NavItem>
              <NavItem>
                <Link to="/request-blood">Request Blood</Link>
              </NavItem>
              <NavItem>
                <Link to="/hospitals">Hospitals</Link>
              </NavItem>
              <NavItem>
                <Link to="/contact-us">Contact Us</Link>
              </NavItem>
              <NavItem>
                <Link to="/about-us">About Us</Link>
              </NavItem>
            </>
          )

        ) : (
          <>
            <NavItem>
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/about-us">About Us</Link>
            </NavItem>
            <NavItem>
              <Link to="/contact-us">Contact Us</Link>
            </NavItem>
          </>
        )}
      </NavMenu>
        {isAuthenticated ? (
        <Button onClick={handleLogout}>Logout</Button>
      ) : (
        <Link to="/login">
          <Button>Login / Register</Button>
        </Link>
      )}
    </Nav>
  );
};

export default Navbar;