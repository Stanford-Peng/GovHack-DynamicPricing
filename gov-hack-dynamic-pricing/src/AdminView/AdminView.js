import "./AdminView.css";
import {
  LineChartOutlined,
  DollarCircleOutlined,
  HeatMapOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import JourneyCounter from "./JourneyCounter";
import { Button } from "antd";
import { Link } from "react-router-dom";

function AdminView() {
  return (
    <div className="AdminView">
      <h1>Journeys Today</h1>
      <JourneyCounter />
      <div class="column">
        <Link to="/Manage">
          <Button type="primary" size="large" icon={<LineChartOutlined />}>
            Manage Pricing
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default AdminView;
