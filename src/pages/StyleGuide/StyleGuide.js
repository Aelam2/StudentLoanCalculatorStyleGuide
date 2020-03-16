import React from "react";
import { PageHeader, Card, Col, Row, Input, Select, Statistic, Button, Alert, Collapse } from "antd";
import { Chart } from "@antv/g2";
import { ArrowUpOutlined, ArrowDownOutlined, CaretRightOutlined } from "@ant-design/icons";
import "./Styleguide.scss";

const { Panel } = Collapse;
const { Option } = Select;

export default class StyleGuide extends React.Component {
  state = {
    chartData: [
      { loan: "loan #1", number: 10000 },
      { loan: "loan #2", number: 12000 },
      { loan: "loan #3", number: 14000 },
      { loan: "loan #4", number: 7000 }
    ]
  };

  componentDidMount() {
    const chart = new Chart({
      container: "test-chart",
      width: 400,
      height: 200
    });

    chart.data(this.state.chartData);

    chart.interval().position("loan*number");

    chart.render();
  }

  render() {
    return (
      <div>
        <PageHeader
          style={{ backgroundColor: "white", marginBottom: "16px" }}
          onBack={() => null}
          title="Style Guide"
          subTitle="Student Loan Calculator"
        >
          The Student Loan Calculator Application will utilize the Design Framework "Ant Design"
          <br />
          The full package can be found here: <a href="https://www.npmjs.com/package/antd">Antd - npm</a>
          <br />
          Below are a collection of components and styles that will be used most frequently in the application
        </PageHeader>
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Text Inputs" bordered={false}>
              <Input size="large" placeholder="large size" style={{ marginTop: "8px" }} />
              <Input placeholder="default size" style={{ marginTop: "8px" }} />
              <Input size="small" placeholder="small size" style={{ marginTop: "8px" }} />
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Dropdowns" bordered={false}>
              <Select defaultValue="lucy" size="large" style={{ width: "100%", marginTop: "8px" }}>
                <Option value="lucy">Student Loans</Option>
              </Select>
              <Select defaultValue="lucy" style={{ width: "100%", marginTop: "8px" }}>
                <Option value="jack">Student Loans</Option>
                <Option value="lucy">Payment Plans</Option>
                <Option value="disabled" disabled>
                  Test
                </Option>
                <Option value="Yiminghe">Student Loans</Option>
              </Select>
              <Select defaultValue="lucy" style={{ width: "100%", marginTop: "8px" }} disabled>
                <Option value="lucy">Student Loans</Option>
              </Select>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Buttons" bordered={false}>
              <Button type="primary" style={{ width: "100%", marginTop: "8px" }} size="large">
                Primary
              </Button>
              <Button style={{ width: "100%", marginTop: "8px" }}>Default</Button>
              <Button type="dashed" style={{ width: "100%", marginTop: "8px" }}>
                Dashed
              </Button>
            </Card>
          </Col>
        </Row>

        <Row gutter={16} style={{ marginTop: "16px" }}>
          <Col span={8}>
            <Card title="Financial Statistcs" bordered={false}>
              <Statistic
                title="Active"
                value={112893}
                precision={2}
                valueStyle={{ color: "#3f8600" }}
                prefix={<ArrowUpOutlined />}
              />
              <Statistic
                title="Idle"
                value={9.3}
                precision={2}
                valueStyle={{ color: "#cf1322" }}
                prefix={<ArrowDownOutlined />}
                suffix="%"
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Feedback Message" bordered={false}>
              <Alert
                message="Success Tips"
                description="Detailed description and advice about successful copywriting."
                type="success"
                showIcon
              />
              <Alert message="Informational Notes" type="info" showIcon />
              <Alert message="Warning" type="warning" showIcon />
              <Alert message="Error" type="error" showIcon />{" "}
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              <Collapse
                bordered={false}
                defaultActiveKey={["1"]}
                expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
              >
                <Panel header="This is panel header 1" key="1">
                  Recurring Payements
                </Panel>
                <Panel header="This is panel header 2" key="2">
                  One-time Payments
                </Panel>
              </Collapse>
            </Card>
          </Col>
        </Row>

        <Row gutter={16} style={{ marginTop: "16px" }}>
          <Col span={8}>
            <Card title="Example Chart" bordered={false}>
              <div id="test-chart"></div>
            </Card>
          </Col>
          <Col span={16}>
            <Card title="Color Guidelines" bordered={false}>
              <h1>
                The colors of the project have no been finalized, however, the folowing is the current color scheme:
              </h1>
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                <div>
                  <span>
                    Primary Color #1: <p>#0F9AEE</p>
                  </span>
                  <div style={{ height: "100px", width: "100px", backgroundColor: "#0F9AEE" }}></div>
                </div>
                <div>
                  <span>
                    Primary Color #2:
                    <p>#C64FA0</p>
                  </span>
                  <div style={{ height: "100px", width: "100px", backgroundColor: "#C64FA0" }}></div>
                </div>
                <div>
                  <span>
                    Secondary Color #1:
                    <p>#42D6F9</p>
                  </span>
                  <div style={{ height: "100px", width: "100px", backgroundColor: "#42D6F9" }}></div>
                </div>
                <div>
                  <span>
                    Secondary Color #2:
                    <p>#f87AA3</p>
                  </span>
                  <div style={{ height: "100px", width: "100px", backgroundColor: "#f87AA3" }}></div>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
