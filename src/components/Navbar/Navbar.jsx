import { useState } from "react";
import {
  Nav,
  NavContainer, 
  NavLogo,
  NavMenu,
  NavItem,
  MobileIcon,
  NavBtn,
} from "./Navbar.styles";
import Button from "../Button/Button";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const { isAuthenticated, isAdmin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    dispatch(logout());
    if (isOpen) {
      toggle();
    }
    navigate("/");
  };

  const closeMenu = () => {
    if (isOpen) {
      toggle();
    }
  };

  return (
    <Nav>
      <NavContainer>
        
        <Link to="/" onClick={closeMenu}>
          <NavLogo>
            <img src={logo} alt="Blood Bank Logo" />
            <span>Smart Blood Bank</span>
          </NavLogo>
        </Link>

        <MobileIcon onClick={toggle}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MobileIcon>
        
        <NavMenu $isOpen={isOpen}>
          {isAuthenticated ? (
            isAdmin ? (
              <>
                <NavItem>
                  <Link to="/" onClick={closeMenu}>
                    Home (View Site)
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/admin/dashboard" onClick={closeMenu}>
                    Dashboard
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/available-blood" onClick={closeMenu}>
                    Available Blood
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/admin/requests" onClick={closeMenu}>
                    Requests
                  </Link>
                </NavItem>
              </>
            ) : (
              <>
                <NavItem>
                  <Link to="/" onClick={closeMenu}>
                    Home
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/available-blood" onClick={closeMenu}>
                    Available Blood
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/donate-blood" onClick={closeMenu}>
                    Donate Blood
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/request-blood" onClick={closeMenu}>
                    Request Blood
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/hospitals" onClick={closeMenu}>
                    Hospitals
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/contact-us" onClick={closeMenu}>
                    Contact Us
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/about-us" onClick={closeMenu}>
                    About Us
                  </Link>
                </NavItem>
              </>
            )
          ) : (
            <>
              <NavItem>
                <Link to="/" onClick={closeMenu}>
                  Home
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/about-us" onClick={closeMenu}>
                  About Us
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/contact-us" onClick={closeMenu}>
                  Contact Us
                </Link>
              </NavItem>
            </>
          )}

          <NavItem className="mobile-only-btn">
            {isAuthenticated ? (
              <Button onClick={handleLogout}>Logout</Button>
            ) : (
              <Link to="/login" onClick={closeMenu}>
                <Button>Login / Register</Button>
              </Link>
            )}
          </NavItem>
        </NavMenu>

        <NavBtn>
          {isAuthenticated ? (
            <Button onClick={handleLogout}>Logout</Button>
          ) : (
            <Link to="/login">
              <Button>Login / Register</Button>
            </Link>
          )}
        </NavBtn>

      </NavContainer> 
    </Nav>
  );
};

export default Navbar;