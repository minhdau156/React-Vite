import { Space, Table, Tag } from "antd";

import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import UpdateUserModal from "./update.user.modal";

const UserTable = (props) => {
  const { dataUsers } = props;
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      render: (_, record) => {
        return <a href="#">{record.id}</a>;
      },
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) => (
        <>
          <div style={{ display: "flex", gap: "20px" }}>
            <EditOutlined style={{ cursor: "pointer", color: "orange" }} />

            <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
          </div>
        </>
      ),
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={dataUsers} rowKey="id" />
      <UpdateUserModal />
    </>
  );
};

export default UserTable;
