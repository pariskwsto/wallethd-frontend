import { ButtonSize, ButtonVariation } from './interfaces';
import { ButtonWrapper } from './style';

interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  size?: ButtonSize;
  type?: 'button' | 'reset' | 'submit';
  variation?: ButtonVariation;
}

export const Button = ({
  children,
  disabled,
  onClick,
  size,
  type = 'button',
  variation,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonWrapper
      disabled={disabled}
      onClick={onClick}
      $size={size}
      type={type}
      $variation={variation}
    >
      {children}
    </ButtonWrapper>
  );
};
