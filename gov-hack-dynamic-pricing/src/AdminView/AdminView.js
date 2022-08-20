import "./AdminView.css";
import {
  LineChartOutlined,
  DollarCircleOutlined,
  HeatMapOutlined,
} from "@ant-design/icons";
import JourneyCounter from "./JourneyCounter";
import { Button } from "antd";
import { Link } from "react-router-dom";

function AdminView() {
  return (
    <div className="AdminView">
      <h1>Journeys Today</h1>
      <JourneyCounter />
      <div class="column">
        <Link to="/PastJourneys">
          <Button type="primary" size="large" icon={<LineChartOutlined />}>
            View Past Journeys
          </Button>
        </Link>
      </div>
      <div class="column">
        <Button type="primary" size="large" icon={<DollarCircleOutlined />}>
          View Earnings
        </Button>
      </div>
      <div class="column">
        <Button type="primary" size="large" icon={<HeatMapOutlined />}>
          Real-Time Capacity
        </Button>
      </div>
    </div>
  );
}

export default AdminView;
