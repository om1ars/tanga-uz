import { Typography, Row, Col, Statistic } from "antd";
import millify from "millify";
import React from "react";
import { Link } from "react-router-dom";

const { Title } = Typography;
export const HomePage = () => {
  return (
    <>
      <Title level={2} className="heading">
        Global Crypto State
      </Title>
      <Row>
          <Col span={12}><Statistic title={'Total Cryptocurrencies'} value='5' /></Col>
          <Col span={12}><Statistic title={'Total Exchanges'} value='5' /></Col>
          <Col span={12}><Statistic title={'Total Market-cap'} value='5' /></Col>
          <Col span={12}><Statistic title={'Total Cryptocurrencies'} value='5' /></Col>
          <Col span={12}><Statistic title={'Total Cryptocurrencies'} value='5' /></Col>
          <Col span={12}><Statistic title={'Total Cryptocurrencies'} value='5' /></Col>
      </Row>
    </>
  );
};
