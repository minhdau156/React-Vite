import { Link, NavLink } from "react-router-dom";
import { Menu } from "antd";
import {
  UsergroupAddOutlined,
  HomeOutlined,
  BookOutlined,
  SettingOutlined,
  LoginOutlined,
  AliwangwangOutlined,
} from "@ant-design/icons";
import { useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";
const Header = () => {
  const [current, setCurrent] = useState("mail");

  const { user } = useContext(AuthContext);

  console.log(">>> check data", user);
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  const items = [
    {
      label: <Link to={"/"}>Home</Link>,
      key: "home",
      icon: <HomeOutlined />,
    },
    {
      label: <Link to={"/users"}>Users</Link>,
      key: "users",
      icon: <UsergroupAddOutlined />,
    },
    {
      label: <Link to={"/books"}>Books</Link>,
      key: "books",
      icon: <BookOutlined />,
    },

    ...(!user.id
      ? [
          {
            label: <Link to={"/login"}>Login</Link>,
            key: "login",
            icon: <LoginOutlined />,
          },
        ]
      : []),

    ...(user.id
      ? [
          {
            label: `Welcome ${user.fullName}`,
            key: "setting",
            icon: <AliwangwangOutlined />,
            children: [
              {
                key: "logout",
                label: "Logout",
              },
            ],
          },
        ]
      : []),
  ];
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default Header;
