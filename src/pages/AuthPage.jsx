import { useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { signupUser, loginUser } from "../services/api";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../features/auth/authSlice";

import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import authImage from "../assets/auth-image.png";
import { FaUser, FaLock, FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";

const AuthContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

const ImagePanel = styled.div`
  flex: 1;
  background-image: url(${authImage});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: clamp(30px, 5vw, 50px);
  @media (max-width: 900px) {
    display: none;
  }
`;

const BrandingTitle = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  line-height: 1.2;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  font-size: clamp(2rem, 2vw + 1rem, 3.5rem);
  white-space: nowrap;
  text-align: center;
  user-select: none;
`;

const FormPanel = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  @media (max-width: 600px) {
    padding: 25px;
  }
`;

const FormWrapper = styled.div`
  width: 100%;
  max-width: 400px;
`;

const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: clamp(1.8rem, 4vw, 2.2rem);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputGroup = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  svg {
    color: #aaa;
  }
`;

const StyledInputWithIcon = styled(Input)`
  width: 100%;
  padding-left: 45px;
  padding-right: 45px;
`;

const LeftIcon = styled.div`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
`;

const PasswordToggleIcon = styled.div`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #aaa;
  cursor: pointer;
  font-size: 1.1rem;
`;

const ToggleText = styled.p`
  text-align: center;
  margin-top: 20px;
  span {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const AuthPage = () => {
  const [isLoginView, setIsLoginView] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleView = () => {
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setIsLoginView(!isLoginView);
  };

  const handleSignupSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    try {
      const response = await signupUser({
        name,
        email,
        password,
        confirmPassword,
      });
      toast.success(response.data.message || "Signup successful! Please login.");
      toggleView();
    } catch (error) {
      toast.error(error.response?.data?.message || "Signup failed.");
    }
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    try {
      const isAdminLogin =
        email === import.meta.env.VITE_ADMIN_EMAIL &&
        password === import.meta.env.VITE_ADMIN_PASSWORD;
      if (isAdminLogin) {
        const adminData = { user: { name: "Admin", email }, isAdmin: true };
        dispatch(login(adminData));
        toast.success("Admin login successful!");
        navigate("/admin/dashboard");
        return;
      }

      const response = await loginUser({ email, password });
      const userData = { user: response.data.user, isAdmin: false };
      dispatch(login(userData));

      toast.success(response.data.message || "Login successful!");
      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed.");
    }
  };

  return (
    <AuthContainer>
      <ImagePanel>
        <BrandingTitle>Smart Blood Management</BrandingTitle>
      </ImagePanel>
      <FormPanel>
        <FormWrapper>
          <FormTitle>{isLoginView ? "Welcome Back!" : "Create Account"}</FormTitle>

          <Form onSubmit={isLoginView ? handleLoginSubmit : handleSignupSubmit}>
            {!isLoginView && (
              <>
                <InputGroup>
                  <LeftIcon>
                    <FaUser />
                  </LeftIcon>
                  <StyledInputWithIcon
                    type="text"
                    placeholder="Full Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </InputGroup>

                <InputGroup>
                  <LeftIcon>
                    <FaEnvelope />
                  </LeftIcon>
                  <StyledInputWithIcon
                    type="email"
                    placeholder="Email Address"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </InputGroup>

                <InputGroup>
                  <LeftIcon>
                    <FaLock />
                  </LeftIcon>
                  <StyledInputWithIcon
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <PasswordToggleIcon onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </PasswordToggleIcon>
                </InputGroup>

                <InputGroup>
                  <LeftIcon>
                    <FaLock />
                  </LeftIcon>
                  <StyledInputWithIcon
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <PasswordToggleIcon
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </PasswordToggleIcon>
                </InputGroup>
              </>
            )}

            {isLoginView && (
              <>
                <InputGroup>
                  <LeftIcon>
                    <FaEnvelope />
                  </LeftIcon>
                  <StyledInputWithIcon
                    type="email"
                    placeholder="Email Address"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </InputGroup>

                <InputGroup>
                  <LeftIcon>
                    <FaLock />
                  </LeftIcon>
                  <StyledInputWithIcon
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <PasswordToggleIcon onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </PasswordToggleIcon>
                </InputGroup>
              </>
            )}

            <Button type="submit" style={{ width: "100%", marginTop: "10px" }}>
              {isLoginView ? "Login" : "Sign Up"}
            </Button>
          </Form>

          <ToggleText onClick={toggleView}>
            {isLoginView ? "Don't have an account? " : "Already have an account? "}
            <span>{isLoginView ? "Sign Up" : "Login"}</span>
          </ToggleText>
        </FormWrapper>
      </FormPanel>
    </AuthContainer>
  );
};

export default AuthPage;
