import { Space, Table, Tag, Popconfirm } from "antd";

import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

import { useState } from "react";

import ViewDetailBook from "./detail.book";
import UpdateBookModal from "./update.book.modal";

const BookTable = (props) => {
  const {
    dataBook,
    loadBook,
    currentPageBook,
    pageSize,
    total,
    setCurrentPageBook,
    setPageSize,
  } = props;

  const [viewBook, setViewBook] = useState(null);
  const [isViewBookOpen, setIsViewBookOpen] = useState(false);

  const [updateBook, setUpdateBook] = useState(null);
  const [isModalUpdateBookOpen, setIsModalUpdateBookOpen] = useState(false);
  const columns = [
    {
      title: "STT",
      render: (_, record, index) => {
        return <>{index + 1 + (currentPageBook - 1) * pageSize}</>;
      },
    },
    {
      title: "Id",
      dataIndex: "id",
      render: (_, record) => {
        return (
          <a
            onClick={() => {
              setViewBook(record);
              setIsViewBookOpen(true);
            }}
            style={{ cursor: "pointer", color: "blue" }}
          >
            {record.id}
          </a>
        );
      },
    },
    {
      title: "Main Text",
      dataIndex: "mainText",
    },
    {
      title: "Author",
      dataIndex: "author",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Sold",
      dataIndex: "sold",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) => (
        <>
          <div style={{ display: "flex", gap: "20px" }}>
            <EditOutlined
              onClick={() => {
                setUpdateBook(record);
                setIsModalUpdateBookOpen(true);
              }}
              style={{ cursor: "pointer", color: "orange" }}
            />

            <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
          </div>
        </>
      ),
    },
  ];

  const onChange = (pagination) => {
    //neu thay doi trang: current
    if (pagination && pagination.current) {
      if (+pagination.current != +currentPageBook) {
        setCurrentPageBook(+pagination.current);
      }
    }
    //neu thay doi tong so phan tu : pageSize
    if (pagination && pagination.pageSize) {
      if (+pagination.pageSize != +pageSize) {
        setPageSize(+pagination.pageSize);
      }
    }
  };

  return (
    <>
      <Table
        columns={columns}
        dataSource={dataBook}
        rowKey="id"
        pagination={{
          current: currentPageBook,
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
      <ViewDetailBook
        isViewBookOpen={isViewBookOpen}
        setIsViewBookOpen={setIsViewBookOpen}
        viewBook={viewBook}
        setViewBook={setViewBook}
      />
      <UpdateBookModal
        updateBook={updateBook}
        isModalUpdateBookOpen={isModalUpdateBookOpen}
        setIsModalUpdateBookOpen={setIsModalUpdateBookOpen}
        setUpdateBook={setUpdateBook}
        loadBook={loadBook}
      />
    </>
  );
};

export default BookTable;
