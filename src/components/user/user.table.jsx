import { Space, Table, Tag } from "antd";
import { fetchAllUserAPI } from "../../services/api.service";
import { useState, useEffect } from "react";

const UserTable = () => {
  const [dataUsers, setDataUsers] = useState([]);

  useEffect(() => {
    loadData(); 
  }, []);
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
  ];
  

  const loadData = async () => {
    const res = await fetchAllUserAPI();
    setDataUsers(res.data);
  };

  

  return <Table columns={columns} dataSource={dataUsers} rowKey="id" />;
};

export default UserTable;
