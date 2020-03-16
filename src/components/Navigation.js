import React from "react";
import { Layout, Menu, Empty } from "antd";
import { UserOutlined, LaptopOutlined, NotificationOutlined } from "@ant-design/icons";
import "./Navigation.scss";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default class StyleGuide extends React.Component {
  render() {
    return (
      <Layout style={{ height: "100vh" }}>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]} style={{ lineHeight: "64px" }}>
            <Menu.Item key="2" style={{ marginLeft: "250px" }}>
              Style Guide
            </Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={300} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <Empty description="Placeholder " style={{ marginTop: "50px" }} />
            </Menu>
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280
              }}
            >
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}
