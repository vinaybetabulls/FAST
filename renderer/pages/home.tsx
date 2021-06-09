import React from "react";
import { Layout } from "antd";
import IconHeader from "../components/IconHeader/IconHeader";
import SideNav from "../components/SideNav/SideNav";
import MiteBodyContainer from "../components/Main/MiteBodyContainer/MiteBodyContainer";
import { default as MiteFooter } from "../components/Footer/Footer";

const { Header, Content, Footer } = Layout;

function Home() {
  return (
    <React.Fragment>
      <Header className="icon-header">
        <IconHeader />
      </Header>
      <Content style={{ display: "flex" }}>
        <SideNav />
        <MiteBodyContainer />
      </Content>
      <Footer>
        <MiteFooter />
      </Footer>
    </React.Fragment>
  );
}

export default Home;
