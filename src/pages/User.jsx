import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { fetchAllUserAPI } from "../services/api.service";
import { useState, useEffect } from "react";

const UserPage = () => {
  const [dataUsers, setDataUsers] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const res = await fetchAllUserAPI();
    setDataUsers(res.data);
  };

  return (
    <div style={{ padding: "20px" }}>
      <UserForm loadData={loadData} />
      <UserTable dataUsers={dataUsers} loadData={loadData} />
    </div>
  );
};

export default UserPage;
