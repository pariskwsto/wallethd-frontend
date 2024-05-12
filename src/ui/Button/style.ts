import styled, { css } from 'styled-components';

import { ButtonSize, ButtonVariation } from './interfaces';

const buttonSizes = {
  [ButtonSize.Small]: css`
    padding: 0.5rem 0.625rem;
    font-size: 0.875rem;
  `,
  [ButtonSize.Medium]: css`
    padding: 0.625rem 1rem;
    font-size: 1rem;
  `,
  [ButtonSize.Large]: css`
    padding: 1rem 1.625rem;
    font-size: 1.375rem;
  `,
};

const buttonVariations = {
  [ButtonVariation.Default]: css`
    color: var(--text-color);
    background-color: var(--color-grey-0);

    &:hover {
      background-color: var(--color-grey-100);
    }
  `,
};

export const ButtonWrapper = styled.button<{
  $size?: ButtonSize;
  $variation?: ButtonVariation;
}>`
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-sm);
  line-height: 1;
  cursor: pointer;
  transition: background-color 0.3s;

  ${({ $size = ButtonSize.Medium }) => buttonSizes[$size]}
  ${({ $variation = ButtonVariation.Default }) => buttonVariations[$variation]}
`;
