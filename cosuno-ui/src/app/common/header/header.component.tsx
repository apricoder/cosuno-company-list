import * as React from 'react';
import styled from 'styled-components/macro';
import { RouterPath } from '../../router/router.path';
import { TransparentRoundedLink } from '../components/transparentRoundedButton';

const HeaderComponentStyled = styled.div`
  display: flex;
  height: 5rem;
  box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.25);
  z-index: 100;
  flex-shrink: 0;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: var(--max-content-width);
  margin: 0 auto;
  padding: 0 2rem;
`;

const HeaderTitle = styled(TransparentRoundedLink)`
  padding: .5rem 1rem;
  margin-left: -1rem;
  font-weight: 500;
  height: 4rem;
  cursor: pointer;
  font-size: 1.5rem;
`;

type Props = {
};

export const HeaderComponent = ({}: Props) => {
  return (
    <HeaderComponentStyled>
      <Content>
        <HeaderTitle to={RouterPath.Companies}>Companies List</HeaderTitle>
      </Content>
    </HeaderComponentStyled>
  );
};
