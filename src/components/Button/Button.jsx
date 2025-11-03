import { StyledButton } from './Button.styles';

const Button = ({ children, variant, ...props }) => {
  return (
    <StyledButton $variant={variant} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;