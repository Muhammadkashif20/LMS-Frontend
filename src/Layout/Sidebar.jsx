import React from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  BookOutlined,
  SettingOutlined,
  TeamOutlined,
  DashboardOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

const Sidebar = ({ items }) => {
  return (
    <Sider
      width={240}
      style={{
        minHeight: "100vh",
        background: "#001529",
      }}
    >
      <div
        style={{
          height: 64,
          margin: 16,
          background: "rgba(255, 255, 255, 0.2)",
          borderRadius: 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontWeight: "600",
          fontSize: "18px",
        }}
      >
        Dashboard
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={items}
        style={{
          fontSize: "15px",
          fontWeight: 500,
        }}
      />
    </Sider>
  );
};

export default Sidebar;
