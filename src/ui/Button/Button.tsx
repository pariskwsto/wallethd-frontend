import { ReactNode } from 'react';

import { ButtonSize, ButtonType, ButtonVariation } from './interfaces';
import { ButtonWrapper } from './style';

interface ButtonProps {
  children: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  size?: ButtonSize;
  type?: ButtonType;
  variation?: ButtonVariation;
}

export const Button = ({
  children,
  disabled,
  onClick,
  size,
  type = ButtonType.Button,
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
