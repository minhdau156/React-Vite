import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { fetchAllUserAPI } from "../services/api.service";
import { useState, useEffect } from "react";

const UserPage = () => {
  const [dataUsers, setDataUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    loadData();
  }, [currentPage, pageSize]);

  const loadData = async () => {
    const res = await fetchAllUserAPI(currentPage, pageSize);
    if (res.data) {
      setDataUsers(res.data.data);
      setCurrentPage(res.data.metaPagination.currentPage);
      setPageSize(res.data.metaPagination.pageSize);
      setTotal(res.data.metaPagination.totalItems);
    }
  };
  
  return (
    <div style={{ padding: "20px" }}>
      <UserForm loadData={loadData} />
      <UserTable
        dataUsers={dataUsers}
        loadData={loadData}
        currentPage={currentPage}
        pageSize={pageSize}
        total={total}
        setCurrentPage={setCurrentPage}
        setPageSize={setPageSize}
      />
    </div>
  );
};

export default UserPage;
