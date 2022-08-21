import "antd/dist/antd.css";
import { Layout, Image, Menu, Switch } from "antd";
import React, { useState } from "react";
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
const MyWay = () => {
  return (
    <Layout>
      <Header
        className="site-layout-background"
        style={{
          padding: 0,
        }}
      >
        <Menu
          mode="horizontal"
          onClick={onClickHandler}
          defaultSelectedKeys={["1"]}
          items={items}
        />
      </Header>
      <Content
        style={{
          margin: "24px 16px 0",
          overflow: "initial",
        }}
      >
        <div
          className="site-layout-background"
          style={{
            padding: 24,
            textAlign: "center",
          }}
        >
          Touched On:
          <Switch size="small" checked={true} />
          <Image src="/myway.jpeg"></Image>
        </div>
      </Content>
      <Footer
        style={{
          bottom: 0,
          textAlign: "center",
        }}
      >
        copyright @ us
      </Footer>
    </Layout>
  );
};

export default MyWay;
