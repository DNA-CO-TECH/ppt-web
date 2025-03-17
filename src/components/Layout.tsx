import React from 'react';
import { Layout as AntLayout } from 'antd';
import styled from '@emotion/styled';

const { Content } = AntLayout;

const StyledLayout = styled(AntLayout)`
  min-height: 100vh;
  width: 100%;
`;

const MainContent = styled(Content)`
  display: flex;
  padding: 24px;
  gap: 24px;
  max-width: 100%;
  width: 100%;

  /* 平板设备 */
  @media (max-width: 1024px) {
    padding: 16px;
    gap: 16px;
  }

  /* 手机设备 */
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 12px;
    gap: 12px;
  }
`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <StyledLayout>
      <MainContent>
        {children}
      </MainContent>
    </StyledLayout>
  );
};

export default Layout; 