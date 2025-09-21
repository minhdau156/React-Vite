import { useEffect, useState } from "react";

import { Input, Button, notification, Modal } from "antd";
import { updateBookAPI } from "../../services/api.service";
import { ApiFilled } from "@ant-design/icons";

const UpdateBookModal = (props) => {
  const {
    updateBook,
    setUpdateBook,
    isModalUpdateBookOpen,
    setIsModalUpdateBookOpen,
    loadBook,
  } = props;

  const [mainText, setMainText] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [id, setId] = useState("");

  const { api, contextHolder } = notification.useNotification();
  useEffect(() => {
    if (updateBook) {
      setId(updateBook.id);
      setMainText(updateBook.mainText);
      setAuthor(updateBook.author);
      setPrice(updateBook.price);
      setCategory(updateBook.category);
      setQuantity(updateBook.quantity);
    }
  }, [updateBook]);

  const handleSubmitBtn = async () => {
    const res = await updateBookAPI(
      mainText,
      author,
      price,
      quantity,
      category,
      id
    );

    if (res.data) {
      api.success({
        message: "Update Book",
        description: "Cap Nhat Book Thành Công",
      });
      await loadBook();
    }
    resetAndCloseModal();
  };

  const resetAndCloseModal = () => {
    setIsModalUpdateBookOpen(false);
    setMainText("");
    setAuthor("");
    setPrice(0);
    setCategory("");
    setQuantity(0);
    setId("");
    setUpdateBook(null);
  };

  return (
    <>
      {contextHolder}
      <Modal
        title="Update Book"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalUpdateBookOpen}
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
            <span>Main Text</span>
            <Input
              value={mainText}
              onChange={(event) => {
                setMainText(event.target.value);
              }}
            />
          </div>

          <div>
            <span>Author</span>
            <Input
              value={author}
              onChange={(event) => {
                setAuthor(event.target.value);
              }}
            />
          </div>
          <div>
            <span>Price</span>
            <Input
              value={price}
              onChange={(event) => {
                setPrice(event.target.value);
              }}
            />
          </div>
          <div>
            <span>Quantity</span>
            <Input
              value={quantity}
              onChange={(event) => {
                setQuantity(event.target.value);
              }}
            />
          </div>
          <div>
            <span>Category</span>
            <Input
              value={category}
              onChange={(event) => {
                setCategory(event.target.value);
              }}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default UpdateBookModal;
