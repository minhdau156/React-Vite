import { ArrowRightOutlined } from "@ant-design/icons";
import { Form, Input, Button, Divider, message } from "antd";
import { useNavigate, Link } from "react-router-dom";
import { loginUserAPI } from "../services/api.service";
import { useContext, useState } from "react";
import { AuthContext } from "../components/context/auth.context";

const LoginPage = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const [messageApi, contextHolder] = message.useMessage();
  const { setUser } = useContext(AuthContext);

  const onFinish = async (values) => {
    setLoading(true);
    const res = await loginUserAPI(values.email, values.password);

    if (res.data) {
      console.log(res);
      messageApi.open({
        type: "success",
        content: "Login Thanh Cong",
      });
      localStorage.setItem("access_token", res.data.access_token);
      const user = {
        email: res.data.user.email,
        phone: res.data.user.phone,
        fullName: res.data.user.fullName,
        role: res.data.user.role,
        avatar: res.data.user.avatar,
        id: res.data.user.id,
      };
      setUser(user);
      navigate("/");
    } else {
      messageApi.open({
        type: "error",
        content: JSON.stringify(res.message),
      });
    }
    setLoading(false);
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
          Login
        </h2>
        <div
          style={{
            margin: "auto",

            width: "400px",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
            border: "1px solid #ccc",

            // display: "flex",
            // flexDirection: "column",
          }}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
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

          <Form.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Button
                loading={loading}
                type="primary"
                onClick={() => form.submit()}
              >
                Login
              </Button>
              <Link to="/">
                Go to HomePage <ArrowRightOutlined />
              </Link>
            </div>
          </Form.Item>

          <Divider />
          <div style={{ textAlign: "center" }}>
            Da co tai khoan? <Link to={"/register"}>Chua co tai khoan</Link>
          </div>
        </div>
      </Form>
    </>
  );
};

export default LoginPage;
