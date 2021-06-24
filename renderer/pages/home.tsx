import React from "react";
import { Layout } from "antd";
import IconHeader from "../components/IconHeader/IconHeader";
import SideNav from "../components/SideNav/SideNav";
import MiteBodyContainer from "../components/Main/MiteBodyContainer/MiteBodyContainer";
import { default as MiteFooter } from "../components/Footer/Footer";
import TabView from "../components/TabView/TabView";

const { Header, Content, Footer } = Layout;
import { AppProvider } from "../Context/MainContext";

function Home() {
  return (
    <React.Fragment>
      <AppProvider>
        <Header className="icon-header">
          <IconHeader />
        </Header>
        <Content style={{ display: "flex" }}>
          <SideNav />
          <TabView />
        </Content>
        <Footer>
          <MiteFooter />
        </Footer>
      </AppProvider>
    </React.Fragment>
  );
}

export default Home;
