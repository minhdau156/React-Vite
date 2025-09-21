import { useState } from "react";

import { Input, Button, notification, Modal } from "antd";
import { createBookAPI } from "../../services/api.service";

const CreateBookModal = (props) => {
  const { isModalCreateBookOpen, setIsModalCreateBookOpen } = props;

  const [mainText, setMainText] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [category, setCategory] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmitBtn = async () => {
    const res = await createBookAPI(
      mainText,
      author,
      price,
      quantity,
      category,
      file
    );
    if (res.data) {
      console.log("create book success");
    }
    resetAndCloseModal();
  };

  const handleOnChangeFile = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFile(file);
    }
  };

  const resetAndCloseModal = () => {
    setIsModalCreateBookOpen(false);
    setMainText("");
    setAuthor("");
    setPrice(0);
    setQuantity(0);
    setCategory("");
    setFile(null);
  };
  return (
    <Modal
      title="Create Book"
      closable={{ "aria-label": "Custom Close Button" }}
      open={isModalCreateBookOpen}
      onOk={() => handleSubmitBtn()}
      onCancel={() => resetAndCloseModal()}
      maskCloseable={false}
      okText={"CREATE"}
    >
      <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
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
          <Input.Password
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
        <div>
          <span>Image</span>
          <Input
            type="file"
            
            onChange={(event) => {
              handleOnChangeFile(event);
            }}
          />
        </div>
      </div>
    </Modal>
  );
};

export default CreateBookModal;
