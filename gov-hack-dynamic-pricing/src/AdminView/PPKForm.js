import { InfoCircleOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import "./AdminForm.css";

const PPKForm = () => {
  return (
    <div class="AdminForm">
      <Form>
        <Form.Item label="PPK-High" required tooltip="This is a required field">
          <Input placeholder="$1" />
        </Form.Item>
        <Form.Item label="PPK-Med" required tooltip="This is a required field">
          <Input placeholder="$0.50" />
        </Form.Item>
        <Form.Item label="PPK-Low" required tooltip="This is a required field">
          <Input placeholder="$0.10" />
        </Form.Item>
        <Form.Item>
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PPKForm;
