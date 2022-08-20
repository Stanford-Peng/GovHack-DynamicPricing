import { Button, Form, Input } from "antd";
import React from "react";

const JourneyForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Source"
        name="destination"
        rules={[
          {
            required: true,
            message: "Please enter the start place",
          },
        ]}
      >
        <Input defaultValue="54-24 Kidston Cres, Curtin ACT 2605" />
      </Form.Item>

      <Form.Item
        label="Destination"
        name="destination"
        rules={[
          {
            required: true,
            message: "Please enter the destination",
          },
        ]}
      >
        <Input defaultValue="971 Majura Rd, Majura Park ACT 2609" />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" onClick="onClickHandler">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default JourneyForm;
