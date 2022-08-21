import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import React from "react";
import GoogleMaps from "./Components/GoogleMaps/GoogleMaps";
import JourneyForm from "./Components/JourneyForm/JourneyForm";

const { Header, Content, Footer, Sider } = Layout;
const items = [
  { label: "Home", key: "home" }, // remember to pass the key prop
  { label: "MyWay", key: "myway" }, // which is required
  { label: "Current Travel Receipt", key: "currentReceipt" }, // which is required
];
const onClickHandler = (e) => {
  if (e.key == "myway") {
    window.location.href = "/myway";
  }
  if (e.key == "home") {
    window.location.href = "/";
  }
  if (e.key == "currentReceipt") {
    window.location.href = "/currentReceipt";
  }
};

const App = () => (
  <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["0"]}
        onClick={onClickHandler}
        items={items}
      />
    </Header>
    <Layout>
      <Sider
        width={400}
        className="site-layout-background"
        style={{ padding: "20px" }}
      >
        <JourneyForm></JourneyForm>
      </Sider>
      <Layout style={{ padding: "0 24px 24px" }}>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <GoogleMaps></GoogleMaps>
        </Content>
      </Layout>
    </Layout>
  </Layout>
);

export default App;
