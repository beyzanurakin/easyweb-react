import React from 'react';
import { Box } from '@mui/system';
import Chart from 'react-apexcharts';

import {
  Breadcrumb,
  BreadcrumbItem,
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardText,
  CardTitle,
} from 'reactstrap';
import LineChart from '../charts/LineChart';
import PieChart from '../charts/PieChart';
import AreaChart from '../charts/AreaChart';
import BarChart from '../charts/BarChart';
import PillChart from '../charts/PillChart';
import StackedBarChart from '../charts/StackedBarChart';

function Dashboard() {
  const options1 = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: { show: false },
    comparedResult: [2, -3, 8],
    labels: ['App', 'Service', 'Product'],
    stroke: { width: 0 },
    colors: ['#28c76f66', '#28c76f33', '#00FF00'],
    grid: {
      padding: {
        right: -20,
        bottom: -8,
        left: -20,
      },
    },
    plotOptions: {
      pie: {
        startAngle: -10,
        donut: {
          labels: {
            show: true,
            name: {
              offsetY: 15,
            },
            value: {
              offsetY: -15,
              formatter(val) {
                return `${parseInt(val)} %`;
              },
            },
            total: {
              show: true,
              offsetY: 15,
              label: 'App',
              formatter() {
                return '53%';
              },
            },
          },
        },
      },
    },
  };
  const series = [
    {
      name: 'Visits',
      data: [100, 120, 90, 170, 130, 160, 140, 240, 220, 180, 270, 280, 375],
    },
    {
      name: 'Clicks',
      data: [60, 80, 70, 110, 80, 100, 90, 180, 160, 140, 200, 220, 275],
    },
    {
      name: 'Sales',
      data: [20, 40, 30, 70, 40, 60, 50, 140, 120, 100, 140, 180, 220],
    },
  ];
  const options = {
    chart: {
      parentHeightOffset: 0,
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: false,
      curve: 'straight',
    },
    legend: {
      position: 'top',
      horizontalAlign: 'start',
    },
    grid: {
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    colors: ['#a4f8cd', '#60f2ca', '#2bdac7'],
    xaxis: {
      categories: [
        '7/12',
        '8/12',
        '9/12',
        '10/12',
        '11/12',
        '12/12',
        '13/12',
        '14/12',
        '15/12',
        '16/12',
        '17/12',
        '18/12',
        '19/12',
        '20/12',
      ],
    },
    fill: {
      opacity: 1,
      type: 'solid',
    },
    tooltip: {
      shared: false,
    },
    yaxis: {
      opposite: 'rtl',
    },
  };
  return (
    <div>
      <Box sx={{ padding: '1rem' }}>
        <Breadcrumb listTag='div'>
          <BreadcrumbItem href='#' tag='a'>
            Home
          </BreadcrumbItem>
          <BreadcrumbItem href='#' tag='a'>
            Library
          </BreadcrumbItem>
          <BreadcrumbItem href='#' tag='a'>
            Data
          </BreadcrumbItem>
          <BreadcrumbItem active tag='span'>
            Bootstrap
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Container>
        <Row className='match-height gy-4'>
          <Col sm='4'>
            <Card>
              <CardBody>
                <Row>
                  <Col xs='6'>
                    <Box className='d-flex flex-column justify-content-between'>
                      <CardTitle>
                        <h5>Seo Puanı</h5>
                      </CardTitle>
                      <div className='font-small-2'>Son Tarama : Bugün</div>

                      <CardText className='text-muted font-small-2 mt-2'>
                        <p className='fw-bolder'>Önceki: 84</p>
                        <span> 4.0%</span>
                      </CardText>
                    </Box>
                  </Col>
                  <Col xs='6'>
                    <Chart
                      options={options1}
                      series={[53, 16, 31]}
                      type='donut'
                      height={120}
                    />
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col sm='4'>
            <Card>
              <CardBody>
                <Row>
                  <Col xs='6'>
                    <Box className='d-flex flex-column justify-content-between'>
                      <CardTitle>
                        <h5>Anahtar Kelimeler</h5>
                      </CardTitle>
                      <div className='font-small-2'>Son Tarama : Bugün</div>

                      <CardText className='text-muted font-small-2 mt-2'>
                        <p className='fw-bolder'>1243</p>
                        <span>+12</span>
                      </CardText>
                    </Box>
                  </Col>
                  <Col xs='6'>
                    <Chart
                      options={options}
                      series={series}
                      type='line'
                      height={120}
                    />
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col sm='4'>
            <Card>
              <CardBody>
                <Row>
                  <Col xs='6'>
                    <Box className='d-flex flex-column justify-content-between'>
                      <CardTitle>
                        <h5>Site Trafiği</h5>
                      </CardTitle>
                      <div className='font-small-2'>Son Tarama : Bugün</div>

                      <CardText className='text-muted font-small-2 mt-2'>
                        <p className='fw-bolder'>9243</p>
                        <span> +112</span>
                      </CardText>
                    </Box>
                  </Col>
                  <Col xs='6'>
                    <Chart
                      options={options1}
                      series={[53, 16, 31]}
                      type='donut'
                      height={120}
                    />
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col sm='4'>
            <Card>
              <LineChart />
            </Card>
          </Col>
          <Col sm='4'>
            <Card>
              <PieChart />
            </Card>
          </Col>
          <Col sm='4'>
            <Card>
              <CardBody>
                <AreaChart />
              </CardBody>
            </Card>
          </Col>
          <Col sm='4'>
            <Card>
              <CardBody>
                <BarChart />
              </CardBody>
            </Card>
          </Col>
          <Col sm='4'>
            <Card>
              <CardBody>
                <PillChart />
              </CardBody>
            </Card>
          </Col>
          <Col sm='4'>
            <Card>
              <CardBody>
                <StackedBarChart />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;
