import { Space, Table, Tag, Popconfirm } from "antd";

import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import UpdateUserModal from "./update.user.modal";
import { useState } from "react";
import ViewDetailUser from "./detail.user";
import { deleteUserAPI } from "../../services/api.service";

const UserTable = (props) => {
  const { dataUsers, loadData } = props;
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);

  const [dataUpdate, setDataUpdate] = useState(null);

  const [isViewOpen, setIsViewOpen] = useState(false);

  const [dataView, setDataView] = useState(null);

  const columns = [
    {
      title: "STT",
      render: (_, record, index) => {
        return <>{index + 1}</>;
      },
    },
    {
      title: "Id",
      dataIndex: "id",
      render: (_, record) => {
        return (
          <a
            onClick={() => {
              setDataView(record);
              setIsViewOpen(true);
            }}
            style={{ cursor: "pointer", color: "blue" }}
          >
            {record.id}
          </a>
        );
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
            <EditOutlined
              onClick={() => {
                setDataUpdate(record);
                setIsModalUpdateOpen(true);
              }}
              style={{ cursor: "pointer", color: "orange" }}
            />

            <Popconfirm
              title="Xóa người dùng"
              description="Bạn chắc chắn xóa user này"
              onConfirm={() => handleDeleteUser(record.id)}
              okText="Yes"
              cancelText="No"
              placement="left"
            >
              <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
            </Popconfirm>
          </div>
        </>
      ),
    },
  ];

  const handleDeleteUser = async (id) => {
    await deleteUserAPI(id);

    await loadData();
  };

  return (
    <>
      <Table columns={columns} dataSource={dataUsers} rowKey="id" />
      <UpdateUserModal
        isModalUpdateOpen={isModalUpdateOpen}
        setIsModalUpdateOpen={setIsModalUpdateOpen}
        dataUpdate={dataUpdate}
        setDataUpdate={setDataUpdate}
        loadData={loadData}
      />
      <ViewDetailUser
        isViewOpen={isViewOpen}
        setIsViewOpen={setIsViewOpen}
        dataView={dataView}
        setDataView={setDataView}
        loadData={loadData}
      />
    </>
  );
};

export default UserTable;
