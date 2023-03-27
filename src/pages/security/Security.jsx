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
} from 'reactstrap'
import { Outlet, NavLink as Link } from 'react-router-dom'
import SingleHeatChart from '../../charts/SingleHeatChart'
import LifeLineChart from '../../charts/LifeLineChart'

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
        <Row className='match-height gy-4 '>
          <Col sm='8'>
            <Card>
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
      </Container>
    </div>
  )
}

export default Security
