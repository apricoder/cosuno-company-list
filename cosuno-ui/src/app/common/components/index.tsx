import styled from 'styled-components/macro';
import * as React from 'react';

export const PageStyled = styled.div`
  z-index: 0;
  display: flex;
  flex-direction: row;
  max-width: var(--max-content-width);
  margin: 0 auto;
  padding: 2rem;
`;

export const Panel = styled(({ className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
})`
  padding: 1rem 2rem;
  border-radius: var(--panel-border-radius);
  background: var(--bg-surface);
  box-shadow: 0 0 0.2rem 0 rgba(0, 0, 0, 0.25);
  color: var(--on-surface);

  > * {
    width: 100%;
  }
`;

export const RightPlaceholder = styled.div`
  flex-basis: var(--side-menu-width);
  flex-grow: 1;
`;

export const LeftPlaceholder = styled(RightPlaceholder)`
  flex-shrink: 0;
  min-width: var(--side-menu-width);
`;

export const SideMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: calc(var(--side-menu-width) - 2rem);
  padding-right: 2rem;
`;

export const Content = styled.div`
  flex-grow: 100;
  flex-basis: 50rem;
  max-width: 50rem;
  display: flex;
  flex-direction: column;
`;
