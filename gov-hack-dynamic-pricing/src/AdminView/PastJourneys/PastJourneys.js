import lineGraph from "./lineGraph.png";
import heatMap from "./heatMap.png";
import "./PastJourneys.css";
import { Layout, Menu } from "antd";
import { Select } from "antd";
import React, { useState } from "react";
const { Option } = Select;
const { Header, Content } = Layout;
const items = [
  { label: "Home", key: "home" }, // remember to pass the key prop
  { label: "Stats", key: "stats" }, // which is required
  { label: "Manage", key: "manage" },
];
const onClickHandler = (e) => {
  if (e.key === "stats") {
    window.location.href = "/PastJourneys";
  }
  if (e.key === "home") {
    window.location.href = "/AdminApp";
  }
  if (e.key === "manage") {
    window.location.href = "/Manage";
  }
};
function PastJourneys() {
  const [selected, setSelected] = useState("a");
  const handleChange = (value) => {
    console.log(`selected ${value}`);
    setSelected(value);
  };
  return (
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
      <Layout style={{ padding: "0 24px 24px" }}>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <div>
            <h1>Stat to display...</h1>
            <Select
              defaultValue="a"
              style={{
                width: 120,
              }}
              onChange={handleChange}
            >
              <Option value="a">Past Journeys</Option>
              <Option value="b">Earnings</Option>
              <Option value="c">Real-Time Capacity</Option>
            </Select>
          </div>
          {selected === "a" ? (
            <>
              <h1 style={{ marginTop: "2em" }}> Displaying - Past Journeys </h1>
              <div className="PastJourneys">
                <img src={lineGraph} alt="lineGraph"></img>
              </div>
            </>
          ) : (
            <>
              <h1 style={{ marginTop: "2em" }}>
                {" "}
                Displaying - Occupancy Heat Map{" "}
              </h1>
              <div className="PastJourneys">
                <img src={heatMap} alt="heatMap"></img>
              </div>
            </>
          )}
        </Content>
      </Layout>
    </Layout>
  );
}
export default PastJourneys;
// ReactDOM.render(<DemoLine />, document.getElementById("container"));
