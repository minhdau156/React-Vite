import { Drawer, Button } from "antd";

const ViewDetailBook = (props) => {
  const { isViewBookOpen, setIsViewBookOpen, viewBook, setViewBook } = props;
    
  return (
    <Drawer
      title="Basic Drawer"
      closable={{ "aria-label": "Close Button" }}
      onClose={() => {
        setIsViewBookOpen(false);
        setViewBook(null);
      }}
      open={isViewBookOpen}
    >
      {viewBook ? (
        <>
          <p>Id: {viewBook.id}</p>
          <br />
          <p>Author: {viewBook.author}</p>
          <br />
          <p>Main Text: {viewBook.mainText}</p>
          <br />
          <p>Price: {viewBook.price}</p>
          <br />
          <p>Sold: {viewBook.sold}</p>
          <br />
          <p>Quantity: {viewBook.quantity}</p>
          <br />
          <p>Category: {viewBook.category}</p>
          <br />
          <p>Avatar: </p>
          <div
            style={{
              marginTop: "15px",
              height: "100px",
              width: "150px",
              border: "1px solid #ccc",
            }}
          >
            <img
              height={100}
              width={150}
              style={{ height: "100%", width: "100%", objectFit: "contain" }}
              src={`${import.meta.env.VITE_BACKEND_URL}/image/book/${
                viewBook.thumbnail
              }`}
              alt=""
            />
          </div>
          
        </>
      ) : (
        <>
          <p>Không có dữ liệu</p>
        </>
      )}
    </Drawer>
  );
};

export default ViewDetailBook;
