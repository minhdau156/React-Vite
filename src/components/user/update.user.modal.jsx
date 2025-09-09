import { Input, Button, notification, Modal } from "antd";
import { useState, useEffect } from "react";
import { updateUserAPI } from "../../services/api.service";

const UpdateUserModal = (props) => {
  const [fullName, setFullName] = useState("");
  const [id, setId] = useState("");
  const [phone, setPhone] = useState("");

  const {
    isModalUpdateOpen,
    setIsModalUpdateOpen,
    dataUpdate,
    setDataUpdate,
    loadData,
  } = props;

  useEffect(() => {
    if (dataUpdate) {
      setFullName(dataUpdate.fullName);
      setId(dataUpdate.id);
      setPhone(dataUpdate.phone);
    }
  }, [dataUpdate]);

  const handleSubmitBtn = async () => {
    const res = await updateUserAPI(id, fullName, phone);

    if (res.data) {
      console.log("success");
      notification.success({
        message: "Update User",
        description: "Cap Nhat User Thành Công",
      });
      resetAndCloseModal();
      await loadData();
    } else {
      console.log("error");
      notification.error({
        message: "Error Update User",
        description: JSON.stringify(res.message),
      });
    }
  };

  const resetAndCloseModal = () => {
    setIsModalUpdateOpen(false);
    setFullName("");
    setId("");
    setPhone("");
    setDataUpdate(null);
  };

  return (
    <Modal
      title="Update User"
      closable={{ "aria-label": "Custom Close Button" }}
      open={isModalUpdateOpen}
      onOk={() => handleSubmitBtn()}
      onCancel={() => resetAndCloseModal()}
      maskCloseable={false}
      okText={"SAVE"}
    >
      <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
        <div>
          <span>Id</span>
          <Input value={id} disabled />
        </div>
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
