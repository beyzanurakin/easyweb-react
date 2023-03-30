import React, { useState, useEffect } from 'react'
import {
  Nav,
  NavItem,
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Progress,
  Table,
} from 'reactstrap'
import { Outlet, NavLink as Link } from 'react-router-dom'
import SingleHeatChart from '../../charts/SingleHeatChart'
import LifeLineChart from '../../charts/LifeLineChart'
import {
  RiErrorWarningLine,
  RiCloseCircleLine,
  RiCheckboxCircleLine,
  RiExternalLinkFill,
} from 'react-icons/ri'
import HeatChart from '../../charts/HeatChart'

function Security() {
  const [active, setActive] = useState('1')
  return (
    <div>
      <Container fluid className='my-3  mx-0'>
        <Row className='match-height gy-4 '>
          <Col sm='12'>
            <Card>
              <CardBody className='py-2 px-2'>
                <Nav pills>
                  <NavItem>
                    <Link
                      to='/security'
                      active={active === '1'}
                      className='nav-link'
                    >
                      Genel Bakış
                    </Link>
                  </NavItem>
                </Nav>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container fluid className='mx-0 w-100'>
        <Row className='match-height gy-4 my-4'>
          <Col sm='8'>
            <Card className='mb-4'>
              <CardBody>
                <CardTitle>
                  <h4>Günlük Durum</h4>
                </CardTitle>
                <SingleHeatChart />
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <CardTitle>
                  <h4>Gecikme Süresi</h4>
                </CardTitle>
                <LifeLineChart />
              </CardBody>
            </Card>
          </Col>
          <Col sm='4'>
            <Card>
              <CardBody>
                <CardTitle>
                  <h4>Genel Çalışma Süresi</h4>
                </CardTitle>
                <Row className='mb-4'>
                  <Col sm='4' className='fs-5 fw-bold'>
                    Son 24 Saat
                  </Col>
                  <Col sm='6' className='align-items-center'>
                    <Progress value='100' color='danger' />
                  </Col>

                  <Col sm='2'>100%</Col>
                </Row>
                <Row className='my-4'>
                  <Col sm='4' className='fs-5 fw-bold'>
                    Son 7 Gün
                  </Col>
                  <Col sm='6' className='align-items-center'>
                    <Progress value='100' color='info' />
                  </Col>

                  <Col sm='2'>100%</Col>
                </Row>
                <Row className='my-4'>
                  <Col sm='4' className='fs-5 fw-bold'>
                    Son 30 Gün
                  </Col>
                  <Col sm='6' className='align-items-center'>
                    <Progress value='100' color='success' />
                  </Col>
                  <Col sm='2'>100%</Col>
                </Row>
                <CardTitle>
                  <h4>En Son Kesinti</h4>
                  <p>Arıza Süresi Kaydedilmedi.</p>
                </CardTitle>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className='match-height gy-4 my-4'>
          <Col sm='12'>
            <Card>
              <CardBody>
                <Table bordered className='mb-4'>
                  <thead>
                    <tr>
                      <th>DEVAM EDEN OLAYLAR</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <Table bordered>
                        <thead>
                          <tr>
                            <th style={{ width: '70%' }}>OLAY</th>
                            <th style={{ width: '15%' }}>TARİH</th>
                            <th style={{ width: '15%' }}>YORUMLAR</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <Row>
                              <Col sm='1'>
                                <RiErrorWarningLine
                                  size='25px'
                                  color='yellow'
                                />
                              </Col>
                              <Col sm='11'>Herhangi bir olay bulunmadı</Col>
                            </Row>
                          </tr>
                        </tbody>
                      </Table>
                    </tr>
                  </tbody>
                </Table>
                <Table bordered className='mb-4'>
                  <thead>
                    <tr>
                      <th>DEVAM EDEN OLAYLAR</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <Table bordered>
                        <thead>
                          <tr>
                            <th style={{ width: '70%' }}>OLAY</th>
                            <th
                              style={{ width: '15%' }}
                              className='text-center'
                            >
                              TARİH
                            </th>
                            <th
                              style={{ width: '15%' }}
                              className='text-center'
                            >
                              YORUMLAR
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <Row className='d-flex align-items-center'>
                                <Col sm='11'>
                                  <p>INSTAGRAMDA BUTİK AÇMAK</p>
                                  <a href='#'>
                                    https://paratik.net/wp-content/uploads/2023/02/instagramda-butik-acmak-768x459.jpg.webp
                                  </a>
                                </Col>
                                <Col sm='1'>
                                  <RiExternalLinkFill />
                                </Col>
                              </Row>
                            </td>
                            <td className='text-center'>7D</td>
                            <td className='text-center'>769 kib</td>
                          </tr>
                        </tbody>
                      </Table>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm='7'>
            <Card>
              <CardBody>
                <CardTitle>
                  <h4>Haftalık Durum</h4>
                </CardTitle>
                <HeatChart />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Security
