import { Button, Form, Input } from "antd";
import "./AdminForm.css";

const OccForm = () => {
  return (
    <div class="AdminForm">
      <Form>
        <Form.Item
          label="Occupancy - High"
          required
          tooltip="This is a required field"
        >
          <Input placeholder="80%" />
        </Form.Item>
        <Form.Item
          label="Occupancy - Med"
          required
          tooltip="This is a required field"
        >
          <Input placeholder="40%" />
        </Form.Item>
        <Form.Item
          label="Occupancy - Low"
          required
          tooltip="This is a required field"
        >
          <Input placeholder="10%" />
        </Form.Item>
        <Form.Item>
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default OccForm;
