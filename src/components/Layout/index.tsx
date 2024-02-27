import React from "react";
import { GridLayout } from './styles';
import MainHeader from "../MainHeader";
import Aside from "../Aside";
import Content from "../Content";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <GridLayout>
      <MainHeader />
      <Aside />
      <Content>
        {children}
      </Content>
    </GridLayout>
  )
}


export default Layout;