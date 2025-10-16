import { useState } from 'react';
import styled from 'styled-components';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';
import authImage from '../assets/auth-image.png'; 
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../features/auth/authSlice';

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
padding: 40px 50px;
  @media (max-width: 900px) {
    display: none;
  }
`;

const BrandingTitle = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2.8rem;
  font-weight: bold;
  line-height: 1.2;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);

`;
const FormPanel = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
`;
const FormWrapper = styled.div`
  width: 100%;
  max-width: 400px;
`;
const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const InputGroup = styled.div`
  position: relative;
  svg { position: absolute; left: 15px; top: 50%; transform: translateY(-50%); color: #aaa; }
`;
const StyledInputWithIcon = styled(Input)`
  padding-left: 45px;
`;
const ToggleText = styled.p`
  text-align: center;
  margin-top: 20px;
  span { color: ${({ theme }) => theme.colors.primary}; font-weight: bold; cursor: pointer; &:hover { text-decoration: underline; } }
`;


const AuthPage = () => {
  const [isLoginView, setIsLoginView] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleView = () => {
    setIsLoginView(!isLoginView);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    
    const isAdminLogin = email === import.meta.env.VITE_ADMIN_EMAIL && password === import.meta.env.VITE_ADMIN_PASSWORD;

    if (isLoginView && isAdminLogin) {
      dispatch(login({
        user: { name: 'Admin', email: email },
        isAdmin: true,
      }));
      navigate('/admin/dashboard'); 
    } else if (isLoginView) {
      dispatch(login({
        user: { name: 'Waleed Iftikhar', email: email }, 
        isAdmin: false,
      }));
      navigate('/'); 
    } else {
      dispatch(login({
        user: { name: 'New User', email: email },
        isAdmin: false,
      }));
      navigate('/');
    }
  };

  return (
    <AuthContainer>
  <ImagePanel>
        <BrandingTitle>
          Smart Blood Management
        </BrandingTitle>
      </ImagePanel>      <FormPanel>
        <FormWrapper>
          <FormTitle>{isLoginView ? 'Welcome Back!' : 'Create Account'}</FormTitle>
          
          <Form onSubmit={handleFormSubmit}>
            {!isLoginView && (
              <InputGroup>
                <FaUser />
                <StyledInputWithIcon type="text" placeholder="Full Name" required />
              </InputGroup>
            )}

            <InputGroup>
              <FaEnvelope />
              <StyledInputWithIcon 
                type="email" 
                placeholder="Email Address" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>

            <InputGroup>
              <FaLock />
              <StyledInputWithIcon 
                type="password" 
                placeholder="Password" 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputGroup>

            {!isLoginView && (
              <InputGroup>
                <FaLock />
                <StyledInputWithIcon type="password" placeholder="Confirm Password" required />
              </InputGroup>
            )}

            <Button type="submit" style={{ width: '100%', marginTop: '10px' }}>
              {isLoginView ? 'Login' : 'Sign Up'}
            </Button>
          </Form>

          <ToggleText onClick={toggleView}>
            {isLoginView ? "Don't have an account? " : "Already have an account? "}
            <span>{isLoginView ? 'Sign Up' : 'Login'}</span>
          </ToggleText>
        </FormWrapper>
      </FormPanel>
    </AuthContainer>
  );
};

export default AuthPage;