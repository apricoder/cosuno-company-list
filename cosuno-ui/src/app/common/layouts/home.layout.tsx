import { Layout } from 'antd';
import * as React from 'react';
import styled from 'styled-components/macro';
import { Header } from '../header/header';

const { Footer, Sider, Content } = Layout;

const HomeLayout = styled(Layout)`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const HomeContent = styled(Content)`
  flex-grow: 1;
  overflow-y: auto;
`;

export const withHomeLayout = (Component: JSX.Element) => (
  <HomeLayout>
    <Header>General logged in header</Header>
    <HomeContent>
      {Component}
    </HomeContent>
  </HomeLayout>
);
