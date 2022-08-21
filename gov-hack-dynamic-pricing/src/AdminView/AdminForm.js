import { InfoCircleOutlined } from "@ant-design/icons";
import { Button, Form, Input, Radio } from "antd";
import React, { useState } from "react";
import "./AdminForm.css";
import PPKForm from "./PPKForm";
import OccForm from "./OccForm";

const AdminForm = () => {
  const [type, setType] = useState("ppk");
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState("optional");

  const onRequiredTypeChange = ({ requiredMarkValue }) => {
    setRequiredMarkType(requiredMarkValue);
  };

  const ppkClick = () => {
    setType("ppk");
  };

  const occClick = () => {
    setType("occ");
  };

  return (
    <div class="AdminForm">
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          requiredMarkValue: requiredMark,
        }}
        onValuesChange={onRequiredTypeChange}
        requiredMark={requiredMark}
      >
        <Form.Item label="Set Type" name="requiredMarkValue">
          <Radio.Group>
            <Radio.Button onClick={ppkClick} value>
              Price Per KM
            </Radio.Button>
            <Radio.Button onClick={occClick} value>
              Occupancy %
            </Radio.Button>
          </Radio.Group>
        </Form.Item>
      </Form>
      {type === "ppk" ? <PPKForm /> : <OccForm />}
    </div>
  );
};

export default AdminForm;
