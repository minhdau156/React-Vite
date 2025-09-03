import { Input, Button, notification, Modal } from "antd";
import { useState } from "react";
import { createUserAPI } from "../../services/api.service";

const UpdateUserModal = () => {
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleSubmitBtn = async () => {
    const res = await createUserAPI(fullName, password, email, phone);

    if (res.data) {
      console.log("success");
      notification.success({
        message: "Create User",
        description: "Tạo User Thành Công",
      });
      resetAndCloseModal();
      //   await loadData();
    } else {
      console.log("error");
      notification.error({
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
    <Modal
      title="Update User"
      closable={{ "aria-label": "Custom Close Button" }}
      open={isModalOpen}
      onOk={() => handleSubmitBtn()}
      onCancel={() => resetAndCloseModal()}
      maskCloseable={false}
      okText={"SAVE"}
    >
      <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
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
  );
};

export default UpdateUserModal;
