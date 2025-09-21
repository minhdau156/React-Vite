import { Button } from "antd";
import { useState } from "react";
import CreateBookModal from "./create.book.modal";
const BookForm = () => {
  const [isModalCreateBookOpen, setIsModalCreateBookOpen] = useState(false);
  return (
    <>
      <div className="user-form" style={{ margin: "20px 0px" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3>Table Books</h3>
          <Button
            type="primary"
            onClick={() => {
              setIsModalCreateBookOpen(true);
            }}
          >
            Create Book
          </Button>
        </div>
        <div>
          <CreateBookModal
            isModalCreateBookOpen={isModalCreateBookOpen}
            setIsModalCreateBookOpen={setIsModalCreateBookOpen}
          />
        </div>
      </div>
    </>
  );
};

export default BookForm;
