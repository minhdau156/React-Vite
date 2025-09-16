import { Input, Button, notification, Modal } from "antd";
import { useState } from "react";
import { createUserAPI } from "../../services/api.service";

const UserForm = (props) => {
  const { loadData } = props;
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const handleSubmitBtn = async () => {
    const res = await createUserAPI(fullName, password, email, phone);

    if (res.data) {
      api.success({
        message: "Create User",
        description: "Tạo User Thành Công",
      });
      resetAndCloseModal();
      await loadData();
    } else {
      api.error({
        message: "Error Create User",
        description: JSON.stringify(res.message),
      });
    }
  };

  const resetAndCloseModal = () => {
    setIsModalOpen(false);
    setFullName("");
    setEmail("");
    setPassword("");
    setPhone("");
  };

  return (
    <>
      {contextHolder}
      <div className="user-form" style={{ margin: "20px 0px" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3>Table Users</h3>
          <Button
            type="primary"
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            Create User
          </Button>
        </div>
        <Modal
          title="Create User"
          closable={{ "aria-label": "Custom Close Button" }}
          open={isModalOpen}
          onOk={() => handleSubmitBtn()}
          onCancel={() => resetAndCloseModal()}
          maskCloseable={false}
          okText={"CREATE"}
        >
          <div
            style={{ display: "flex", gap: "15px", flexDirection: "column" }}
          >
            <div>
              <span>Full Name</span>
              <Input
                value={fullName}
                onChange={(event) => {
                  setFullName(event.target.value);
                }}
              />
            </div>
            <div>
              <span>Password</span>
              <Input.Password
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </div>
            <div>
              <span>Email</span>
              <Input
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>
            <div>
              <span>Phone Number</span>
              <Input
                value={phone}
                onChange={(event) => {
                  setPhone(event.target.value);
                }}
              />
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default UserForm;
