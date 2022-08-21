import { Layout, Menu } from "antd";
import AdminForm from "./AdminForm";
const { Header, Content } = Layout;
const items = [
  { label: "Home", key: "home" }, // remember to pass the key prop
  { label: "Journeys", key: "journeys" }, // which is required
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
function Manage() {
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
          <AdminForm />
        </Content>
      </Layout>
    </Layout>
  );
}
export default Manage;
