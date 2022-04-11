import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

const style = `
  padding: .5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 5rem;
  cursor: pointer;
  color: var(--on-surface);

  &:hover {
    background: var(--bg-surface-hover);
    color: var(--on-surface);
  }
`;

export const TransparentRoundedButton = styled.a`
  ${style}
`;

export const TransparentRoundedLink = styled(Link)`
  ${style}
`;
