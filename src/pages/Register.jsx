import { Button, Input, Form, notification, Divider } from "antd";

import { registerUserAPI } from "../services/api.service";
import { useNavigate, Link } from "react-router-dom";

const RegisterPage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();

  const onFinish = async (values) => {
    const res = await registerUserAPI(
      values.fullName,
      values.password,
      values.email,
      values.phone
    );
    if (res.data) {
      api.success({
        message: "Register User",
        description: "Register User Thành Công",
      });
      navigate("/login");
    } else {
      api.error({
        message: "Error Register User",
        description: JSON.stringify(res.message),
      });
    }
  };

  return (
    <>
      {contextHolder}
      <Form
        layout="vertical"
        form={form}
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <h2
          style={{
            textAlign: "center",
            margin: "20px",
            color: "blue",
          }}
        >
          Register
        </h2>
        <div
          style={{
            margin: "auto",

            width: "400px",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid #ccc",
            padding: "20px",

            // display: "flex",
            // flexDirection: "column",
          }}
        >
          <Form.Item
            label="Full Name"
            name="fullName"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="Phone Number"
            name="phone"
            rules={[
              {
                required: true,

                pattern: new RegExp(/\d+/g),
                message: "Wrong format",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <div>
            <Button type="primary" onClick={() => form.submit()}>
              Register
            </Button>
          </div>
          <Divider />
          <div>
            Da co dang nhap r ?<Link to={"/login"}>Chua dang nhap</Link>
          </div>
        </div>
      </Form>
    </>
  );
};

export default RegisterPage;
