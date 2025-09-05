import { Drawer } from "antd";
import { useState, useEffect } from "react";

const ViewDetailUser = (props) => {
  const [fullName, setFullName] = useState("");
  const [id, setId] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const { isViewOpen, setIsViewOpen, dataView, setDataView } = props;
  useEffect(() => {
    if (dataView) {
      setFullName(dataView.fullName);
      setEmail(dataView.email);
      setId(dataView.id);
      setPhone(dataView.phone);
    }
  }, [dataView]);

  return (
    <Drawer
      title="Basic Drawer"
      closable={{ "aria-label": "Close Button" }}
      onClose={() => {
        setIsViewOpen(false);
        setDataView(null);
      }}
      open={isViewOpen}
    >
      <p>Id: {id}</p>
      <p>Full Name: {fullName}</p>
      <p>Phone Number: {phone}</p>
      <p>Email: {email}</p>
    </Drawer>
  );
};

export default ViewDetailUser;
