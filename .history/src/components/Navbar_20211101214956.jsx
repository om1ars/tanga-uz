import React from "react";
import {
  HomeOutLined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
} from "@ant-design/icons";
import { Button, Typography, Menu } from "antd";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";

export const Navbar = () => {
  return (
    <div className="nav__container">
      <div className="logo-container">
        <Avatar  />
        <Typography.Title level={2} className="logo">
          <Link to="/">CryptoVerse</Link>
        </Typography.Title>
      </div>
      <Menu theme={dark}>
          <Menu.Item icon={<HomeOutLined /> }>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined /> }>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined /> }>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined /> }>
          </Menu.Item>
      </Menu>
    </div>
  );
};
