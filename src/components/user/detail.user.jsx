import { Drawer, Button } from "antd";
import { useState } from "react";
import {
  handleUploadFile,
  updateUserAvatarAPI,
} from "../../services/api.service";

const ViewDetailUser = (props) => {
  const { isViewOpen, setIsViewOpen, dataView, setDataView, loadData } = props;

  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleOnChangeFile = (event) => {
    if (!event.target.files || event.target.files.length === 0) {
      setSelectedFile(null);
      setPreview(null);
      return;
    }

    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }
    console.log(">>> check file", file);
  };

  const handleUpdateUserAvatar = async () => {
    //upload file
    const resUpload = await handleUploadFile(selectedFile);
    //update user avatar
    if (resUpload) {
      const newAvatar = resUpload.data;
      const resUpdateAvatar = await updateUserAvatarAPI(dataView.id, newAvatar);
      if (resUpdateAvatar.data) {
        setIsViewOpen(false);
        setSelectedFile(null);
        setPreview(null);
        await loadData();
        alert("Update Avatar Thanh Cong");
      }
    }

    //update user
  };
  return (
    <Drawer
      title="Basic Drawer"
      closable={{ "aria-label": "Close Button" }}
      onClose={() => {
        setIsViewOpen(false);
        setDataView(null);
      }}
      open={isViewOpen}
    >
      {dataView ? (
        <>
          <p>Id: {dataView.id}</p>
          <br />
          <p>Full Name: {dataView.fullName}</p>
          <br />
          <p>Phone Number: {dataView.phone}</p>
          <br />
          <p>Email: {dataView.email}</p>
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
              src={`${import.meta.env.VITE_BACKEND_URL}/image/avatar/${
                dataView.avatar
              }`}
              alt=""
            />
          </div>
          <div>
            <label
              htmlFor="btnUpload"
              style={{
                display: "block",
                width: "fit-content",
                marginTop: "15px",
                padding: "5px 10px",
                background: "orange",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Upload Avatar
            </label>
            <input
              type="file"
              hidden
              id="btnUpload"
              onChange={(event) => handleOnChangeFile(event)}
            />
          </div>
          {preview && (
            <>
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
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "contain",
                  }}
                  src={preview}
                  alt=""
                />
              </div>
              <Button onClick={() => handleUpdateUserAvatar()} type="primary">
                Save
              </Button>
            </>
          )}
        </>
      ) : (
        <>
          <p>Không có dữ liệu</p>
        </>
      )}
    </Drawer>
  );
};

export default ViewDetailUser;
