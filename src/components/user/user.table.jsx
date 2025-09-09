import { Space, Table, Tag, Popconfirm } from "antd";

import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import UpdateUserModal from "./update.user.modal";
import { useState } from "react";
import ViewDetailUser from "./detail.user";
import { deleteUserAPI } from "../../services/api.service";

const UserTable = (props) => {
  const {
    dataUsers,
    loadData,
    currentPage,
    pageSize,
    total,
    setCurrentPage,
    setPageSize,
  } = props;
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);

  const [dataUpdate, setDataUpdate] = useState(null);

  const [isViewOpen, setIsViewOpen] = useState(false);

  const [dataView, setDataView] = useState(null);

  const columns = [
    {
      title: "STT",
      render: (_, record, index) => {
        return <>{index + 1 + (currentPage - 1) * pageSize}</>;
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

  const onChange = (pagination, filters, sorter, extra) => {
    //neu thay doi trang: current
    if (pagination && pagination.current) {
      if (+pagination.current != +currentPage) {
        setCurrentPage(+pagination.current);
      }
    }
    //neu thay doi tong so phan tu : pageSize
    if (pagination && pagination.pageSize) {
      if (+pagination.pageSize != +pageSize) {
        setPageSize(+pagination.pageSize);
      }
    }
    console.log(">>> check", { pagination, filters, sorter, extra });
  };

  return (
    <>
      <Table
        columns={columns}
        dataSource={dataUsers}
        rowKey="id"
        pagination={{
          current: currentPage,
          pageSize: pageSize,
          showSizeChanger: true,
          total: total,
          showTotal: (total, range) => {
            return (
              <div>
                {range[0]}-{range[1]} tren {total} rows
              </div>
            );
          },
        }}
        onChange={onChange}
      />
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
