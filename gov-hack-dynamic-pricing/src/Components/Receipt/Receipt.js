import "antd/dist/antd.css";
import { Layout, Image, Menu, Button, Descriptions, Radio } from "antd";
import React, { useState } from "react";
const { Header, Content, Footer } = Layout;
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
const Receipt = () => {
  const [size, setSize] = useState("default");
  const onChange = (e) => {
    console.log("size checked", e.target.value);
    setSize(e.target.value);
  };

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
          defaultSelectedKeys={["2"]}
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
          <div>
            <br />
            <br />
            <Image src="/receipt.png" width="300px" height="150px"></Image>

            <Descriptions style={{ marginLeft: "500px" }}>
              <Descriptions.Item label="Trip fare"> $5.50</Descriptions.Item>
            </Descriptions>
            <Descriptions style={{ marginLeft: "500px" }}>
              <Descriptions.Item label="Distance travelled">
                15Kms
              </Descriptions.Item>
            </Descriptions>
            <br />
            <br />
          </div>
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

export default Receipt;
