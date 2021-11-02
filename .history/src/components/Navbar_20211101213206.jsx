import React from "react";
import {
  HomeOutLined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
} from "@ant-design/icons";
import { Button, Avatar, Typography, Menu } from "antd";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="nav__container">
      <div className="logo-container">
        <Avatar  src={/>
        <Typography.Title level={2} className="logo">
          <Link to="/">CryptoVerse</Link>
        </Typography.Title>
        <Button className="menu-control-container"></Button>
      </div>
    </div>
  );
};
