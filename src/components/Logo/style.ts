import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--sidebar-section-bg-color);
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  color: var(--text-brand-color);
  text-decoration: none;
`;

export const LogoImg = styled.img`
  width: 2rem;
  height: 2rem;
  margin-right: 0.5rem;
`;
