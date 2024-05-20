import styled from 'styled-components';

export const LoginFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 25rem;
  padding: 2rem;
  background-color: var(--color-grey-0);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const LoginFormTitle = styled.h1`
  margin-bottom: 1.5rem;
`;

export const LoginFormElement = styled.form`
  display: flex;
  flex-direction: column;
`;

export const LoginFormLabel = styled.label`
  margin-bottom: 0.5rem;
`;

export const LoginFormInput = styled.input`
  margin-bottom: 1rem;
  padding: 0.75rem;
  border: 1px solid var(--color-grey-300);
  border-radius: 8px;
`;

export const LoginFormButton = styled.button`
  margin-top: 12px;
  padding: 0.75rem 0.5rem;
  color: var(--color-grey-0);
  background-color: var(--color-brand-500);
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(1px);
    cursor: pointer;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(2px);
    box-shadow: none;
  }
`;

export const ErrorMessage = styled.div`
  padding: 0.5rem;
  color: var(--color-red-700);
  text-align: center;
  font-size: 0.875rem;

  & > div {
    margin-bottom: 0.5rem;
  }
`;
