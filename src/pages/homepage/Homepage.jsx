import React, { useState } from 'react'
import SemiCircularChart from '../../charts/SemiCircularChart'
import {
  FormGroup,
  Input,
  Form,
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Nav,
  NavItem,
  NavLink,
  Pagination,
  PaginationItem,
  PaginationLink,
} from 'reactstrap'
import { RiMore2Fill, RiPencilLine, RiAddFill } from 'react-icons/ri'
import { AreaChart } from '../../charts'
import { Link } from 'react-router-dom'

function Homepage() {
  const [active, setActive] = useState('1')

  const toggle = (tab) => {
    if (active !== tab) {
      setActive(tab)
    }
  }
  return (
    <div>
      <Container fluid>
        <div className='d-flex justify-content-between align-items-center'>
          <h4>Sitelerim</h4>

          <Button style={{ backgroundColor: '#447DD1', color: '#fff' }}>
            Yeni Ekle | <RiAddFill />
          </Button>
        </div>

        <Nav pills className='mb-4'>
          <NavItem>
            <NavLink
              active={active === '1'}
              onClick={() => {
                toggle('1')
              }}
            >
              Tüm Siteler(3)
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              active={active === '2'}
              onClick={() => {
                toggle('2')
              }}
            >
              Acil Durum(1)
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              active={active === '3'}
              onClick={() => {
                toggle('3')
              }}
            >
              Güncelleme(2)
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              active={active === '4'}
              onClick={() => {
                toggle('4')
              }}
            >
              Yedekleme(0)
            </NavLink>
          </NavItem>
        </Nav>

        <Row>
          <Col sm='4'>
            <Card>
              <CardBody>
                <Row className='mb-4'>
                  <Col sm='1'>
                    <Form>
                      <FormGroup check inline>
                        <Input type='checkbox' />
                      </FormGroup>
                    </Form>
                  </Col>
                  <Col sm='9'>
                    <h5>PARATİK.NET</h5>
                  </Col>
                  <Col sm='2'>
                    {' '}
                    <RiMore2Fill fontSize='25px' />
                    <RiPencilLine fontSize='25px' />
                  </Col>
                  <Col sm='12'>Son Güncellenme Tarihi: 21.02.2023 - 15.23</Col>
                </Row>
                <Row className='my-4'>
                  <Col sm='3' className='d-flex flex-column align-items-center'>
                    <h5 className='p-0 m-1'>SUNUCU</h5>
                    <p>
                      <svg
                        width='30'
                        height='30'
                        viewBox='0 0 30 30'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <rect
                          width='30'
                          height='30'
                          rx='15'
                          fill='#4DAF00'
                          fill-opacity='0.22'
                        />
                        <ellipse
                          cx='14.9998'
                          cy='9.5'
                          rx='7.33333'
                          ry='2.75'
                          stroke='#0DA000'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <ellipse
                          cx='14.9998'
                          cy='9.5'
                          rx='7.33333'
                          ry='2.75'
                          stroke='white'
                          stroke-opacity='0.1'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M7.6665 9.5V15C7.6665 16.5188 10.9497 17.75 14.9998 17.75C19.0499 17.75 22.3332 16.5188 22.3332 15V9.5'
                          stroke='#53894E'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M7.6665 9.5V15C7.6665 16.5188 10.9497 17.75 14.9998 17.75C19.0499 17.75 22.3332 16.5188 22.3332 15V9.5'
                          stroke='white'
                          stroke-opacity='0.1'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M7.6665 15V20.5C7.6665 22.0188 10.9497 23.25 14.9998 23.25C19.0499 23.25 22.3332 22.0188 22.3332 20.5V15'
                          stroke='#53894E'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M7.6665 15V20.5C7.6665 22.0188 10.9497 23.25 14.9998 23.25C19.0499 23.25 22.3332 22.0188 22.3332 20.5V15'
                          stroke='white'
                          stroke-opacity='0.1'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </svg>
                    </p>
                  </Col>
                  <Col sm='3' className='d-flex flex-column align-items-center'>
                    <h5 className='p-0 m-1'>GÜVENLİK</h5>
                    <p>
                      <svg
                        width='31'
                        height='30'
                        viewBox='0 0 31 30'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <rect
                          x='0.5'
                          width='30'
                          height='30'
                          rx='15'
                          fill='#4DAF00'
                          fill-opacity='0.22'
                        />
                        <path
                          d='M12.75 15L14.5833 16.8334L18.25 13.1667'
                          stroke='#0DA000'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M12.75 15L14.5833 16.8334L18.25 13.1667'
                          stroke='white'
                          stroke-opacity='0.1'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M15.5 6.75C17.6411 8.64436 20.4357 9.63069 23.2916 9.5C24.1317 12.3577 23.7769 15.434 22.3084 18.0255C20.8399 20.617 18.3832 22.5021 15.5 23.25C12.6167 22.5021 10.16 20.617 8.6915 18.0255C7.22299 15.434 6.86821 12.3577 7.70829 9.5C10.5642 9.63069 13.3588 8.64436 15.5 6.75'
                          stroke='#53894E'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M15.5 6.75C17.6411 8.64436 20.4357 9.63069 23.2916 9.5C24.1317 12.3577 23.7769 15.434 22.3084 18.0255C20.8399 20.617 18.3832 22.5021 15.5 23.25C12.6167 22.5021 10.16 20.617 8.6915 18.0255C7.22299 15.434 6.86821 12.3577 7.70829 9.5C10.5642 9.63069 13.3588 8.64436 15.5 6.75'
                          stroke='white'
                          stroke-opacity='0.1'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </svg>
                    </p>
                  </Col>
                  <Col sm='3' className='d-flex flex-column align-items-center'>
                    <h5 className='p-0 m-1'>HOSTİNG</h5>
                    <p>
                      <svg
                        width='31'
                        height='30'
                        viewBox='0 0 31 30'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <rect
                          x='0.5'
                          width='30'
                          height='30'
                          rx='15'
                          fill='#4DAF00'
                          fill-opacity='0.22'
                        />
                        <path
                          d='M12.75 15L14.5833 16.8334L18.25 13.1667'
                          stroke='#0DA000'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M12.75 15L14.5833 16.8334L18.25 13.1667'
                          stroke='white'
                          stroke-opacity='0.1'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M15.5 6.75C17.6411 8.64436 20.4357 9.63069 23.2916 9.5C24.1317 12.3577 23.7769 15.434 22.3084 18.0255C20.8399 20.617 18.3832 22.5021 15.5 23.25C12.6167 22.5021 10.16 20.617 8.6915 18.0255C7.22299 15.434 6.86821 12.3577 7.70829 9.5C10.5642 9.63069 13.3588 8.64436 15.5 6.75'
                          stroke='#53894E'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M15.5 6.75C17.6411 8.64436 20.4357 9.63069 23.2916 9.5C24.1317 12.3577 23.7769 15.434 22.3084 18.0255C20.8399 20.617 18.3832 22.5021 15.5 23.25C12.6167 22.5021 10.16 20.617 8.6915 18.0255C7.22299 15.434 6.86821 12.3577 7.70829 9.5C10.5642 9.63069 13.3588 8.64436 15.5 6.75'
                          stroke='white'
                          stroke-opacity='0.1'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </svg>
                    </p>
                  </Col>
                  <Col sm='3' className='d-flex flex-column align-items-center'>
                    <h5 className='p-0 m-1'>YEDEKLEME</h5>
                    <p>
                      <svg
                        width='31'
                        height='30'
                        viewBox='0 0 31 30'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <rect
                          x='0.5'
                          width='30'
                          height='30'
                          rx='15'
                          fill='#4DAF00'
                          fill-opacity='0.22'
                        />
                        <path
                          d='M21.9165 20.5C23.6884 20.5 25.1249 19.0636 25.1249 17.2917C25.1249 15.5197 23.6884 14.0833 21.9165 14.0833H20.9999C21.3637 12.4622 20.739 10.7896 19.3611 9.6954C17.9831 8.60124 16.0613 8.25181 14.3194 8.77874C12.5776 9.30567 11.2804 10.6289 10.9165 12.25C8.90111 12.1693 7.1082 13.4652 6.63906 15.3418C6.16992 17.2183 7.15596 19.1499 8.99153 19.95'
                          stroke='#53894E'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M21.9165 20.5C23.6884 20.5 25.1249 19.0636 25.1249 17.2917C25.1249 15.5197 23.6884 14.0833 21.9165 14.0833H20.9999C21.3637 12.4622 20.739 10.7896 19.3611 9.6954C17.9831 8.60124 16.0613 8.25181 14.3194 8.77874C12.5776 9.30567 11.2804 10.6289 10.9165 12.25C8.90111 12.1693 7.1082 13.4652 6.63906 15.3418C6.16992 17.2183 7.15596 19.1499 8.99153 19.95'
                          stroke='white'
                          stroke-opacity='0.1'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M15.4998 15.9167V24.1667'
                          stroke='#0DA000'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M15.4998 15.9167V24.1667'
                          stroke='white'
                          stroke-opacity='0.1'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M12.75 21.4167L15.5 24.1667L18.25 21.4167'
                          stroke='#0DA000'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M12.75 21.4167L15.5 24.1667L18.25 21.4167'
                          stroke='white'
                          stroke-opacity='0.1'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </svg>
                    </p>
                  </Col>
                </Row>
                <Row className='my-4'>
                  <Col sm='6'>
                    <Card>
                      <CardBody className='pb-0'>
                        <h5 className='text-center'>Performans</h5>
                        <SemiCircularChart serie='78' color='#53894E' />
                        <div className='text-muted text-center'>
                          <p className='m-1'>Son Test Tarihi:</p>
                          <p>21.02.2023 - 13.55</p>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col sm='6'>
                    <Card>
                      <CardBody className='pb-0'>
                        <h5 className='text-center'>Seo Puanı</h5>
                        <SemiCircularChart serie='75' color='#53894E' />
                        <div className='text-muted text-center'>
                          <p className='m-1'>Son Test Tarihi:</p>
                          <p>21.02.2023 - 13.55</p>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
                <Row className='mt-2'>
                  <Card>
                    <CardBody>
                      <Col sm='12'>
                        <h4 className='my-2'>Analitik</h4>
                        <p className='my-2'>Aylık Tıklanma Sayısı</p>
                        <h4>112.000</h4>
                      </Col>
                      <Col sm='12'>
                        <AreaChart />
                        <p>01.02.2023-21.02.2023</p>
                        <div className='d-flex justify-content-center'>
                          <Button
                            style={{
                              backgroundColor: '#0d6efd',
                            }}
                          >
                            {' '}
                            <Link to='/seo/overview' style={{ color: '#fff' }}>
                              Siteye Git
                            </Link>
                          </Button>{' '}
                        </div>
                      </Col>
                    </CardBody>
                  </Card>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col sm='4'>
            <Card>
              <CardBody>
                <Row className='mb-4'>
                  <Col sm='1'>
                    <Form>
                      <FormGroup check inline>
                        <Input type='checkbox' />
                      </FormGroup>
                    </Form>
                  </Col>
                  <Col sm='9'>
                    <h5>PARATİK.NET</h5>
                  </Col>
                  <Col sm='2'>
                    {' '}
                    <RiMore2Fill fontSize='25px' />
                    <RiPencilLine fontSize='25px' />
                  </Col>
                  <Col sm='12'>Son Güncellenme Tarihi: 21.02.2023 - 15.23</Col>
                </Row>
                <Row className='my-4'>
                  <Col sm='3' className='d-flex flex-column align-items-center'>
                    <h5 className='p-0 m-1'>SUNUCU</h5>
                    <p>
                      <svg
                        width='30'
                        height='30'
                        viewBox='0 0 30 30'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <rect
                          width='30'
                          height='30'
                          rx='15'
                          fill='#4DAF00'
                          fill-opacity='0.22'
                        />
                        <ellipse
                          cx='14.9998'
                          cy='9.5'
                          rx='7.33333'
                          ry='2.75'
                          stroke='#0DA000'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <ellipse
                          cx='14.9998'
                          cy='9.5'
                          rx='7.33333'
                          ry='2.75'
                          stroke='white'
                          stroke-opacity='0.1'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M7.6665 9.5V15C7.6665 16.5188 10.9497 17.75 14.9998 17.75C19.0499 17.75 22.3332 16.5188 22.3332 15V9.5'
                          stroke='#53894E'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M7.6665 9.5V15C7.6665 16.5188 10.9497 17.75 14.9998 17.75C19.0499 17.75 22.3332 16.5188 22.3332 15V9.5'
                          stroke='white'
                          stroke-opacity='0.1'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M7.6665 15V20.5C7.6665 22.0188 10.9497 23.25 14.9998 23.25C19.0499 23.25 22.3332 22.0188 22.3332 20.5V15'
                          stroke='#53894E'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M7.6665 15V20.5C7.6665 22.0188 10.9497 23.25 14.9998 23.25C19.0499 23.25 22.3332 22.0188 22.3332 20.5V15'
                          stroke='white'
                          stroke-opacity='0.1'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </svg>
                    </p>
                  </Col>
                  <Col sm='3' className='d-flex flex-column align-items-center'>
                    <h5 className='p-0 m-1'>GÜVENLİK</h5>
                    <p>
                      <svg
                        width='31'
                        height='30'
                        viewBox='0 0 31 30'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <rect
                          x='0.5'
                          width='30'
                          height='30'
                          rx='15'
                          fill='#4DAF00'
                          fill-opacity='0.22'
                        />
                        <path
                          d='M12.75 15L14.5833 16.8334L18.25 13.1667'
                          stroke='#0DA000'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M12.75 15L14.5833 16.8334L18.25 13.1667'
                          stroke='white'
                          stroke-opacity='0.1'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M15.5 6.75C17.6411 8.64436 20.4357 9.63069 23.2916 9.5C24.1317 12.3577 23.7769 15.434 22.3084 18.0255C20.8399 20.617 18.3832 22.5021 15.5 23.25C12.6167 22.5021 10.16 20.617 8.6915 18.0255C7.22299 15.434 6.86821 12.3577 7.70829 9.5C10.5642 9.63069 13.3588 8.64436 15.5 6.75'
                          stroke='#53894E'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M15.5 6.75C17.6411 8.64436 20.4357 9.63069 23.2916 9.5C24.1317 12.3577 23.7769 15.434 22.3084 18.0255C20.8399 20.617 18.3832 22.5021 15.5 23.25C12.6167 22.5021 10.16 20.617 8.6915 18.0255C7.22299 15.434 6.86821 12.3577 7.70829 9.5C10.5642 9.63069 13.3588 8.64436 15.5 6.75'
                          stroke='white'
                          stroke-opacity='0.1'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </svg>
                    </p>
                  </Col>
                  <Col sm='3' className='d-flex flex-column align-items-center'>
                    <h5 className='p-0 m-1'>HOSTİNG</h5>
                    <p>
                      <svg
                        width='31'
                        height='30'
                        viewBox='0 0 31 30'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <rect
                          x='0.5'
                          width='30'
                          height='30'
                          rx='15'
                          fill='#4DAF00'
                          fill-opacity='0.22'
                        />
                        <path
                          d='M12.75 15L14.5833 16.8334L18.25 13.1667'
                          stroke='#0DA000'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M12.75 15L14.5833 16.8334L18.25 13.1667'
                          stroke='white'
                          stroke-opacity='0.1'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M15.5 6.75C17.6411 8.64436 20.4357 9.63069 23.2916 9.5C24.1317 12.3577 23.7769 15.434 22.3084 18.0255C20.8399 20.617 18.3832 22.5021 15.5 23.25C12.6167 22.5021 10.16 20.617 8.6915 18.0255C7.22299 15.434 6.86821 12.3577 7.70829 9.5C10.5642 9.63069 13.3588 8.64436 15.5 6.75'
                          stroke='#53894E'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M15.5 6.75C17.6411 8.64436 20.4357 9.63069 23.2916 9.5C24.1317 12.3577 23.7769 15.434 22.3084 18.0255C20.8399 20.617 18.3832 22.5021 15.5 23.25C12.6167 22.5021 10.16 20.617 8.6915 18.0255C7.22299 15.434 6.86821 12.3577 7.70829 9.5C10.5642 9.63069 13.3588 8.64436 15.5 6.75'
                          stroke='white'
                          stroke-opacity='0.1'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </svg>
                    </p>
                  </Col>
                  <Col sm='3' className='d-flex flex-column align-items-center'>
                    <h5 className='p-0 m-1'>YEDEKLEME</h5>
                    <p>
                      <svg
                        width='31'
                        height='30'
                        viewBox='0 0 31 30'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <rect
                          x='0.5'
                          width='30'
                          height='30'
                          rx='15'
                          fill='#4DAF00'
                          fill-opacity='0.22'
                        />
                        <path
                          d='M21.9165 20.5C23.6884 20.5 25.1249 19.0636 25.1249 17.2917C25.1249 15.5197 23.6884 14.0833 21.9165 14.0833H20.9999C21.3637 12.4622 20.739 10.7896 19.3611 9.6954C17.9831 8.60124 16.0613 8.25181 14.3194 8.77874C12.5776 9.30567 11.2804 10.6289 10.9165 12.25C8.90111 12.1693 7.1082 13.4652 6.63906 15.3418C6.16992 17.2183 7.15596 19.1499 8.99153 19.95'
                          stroke='#53894E'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M21.9165 20.5C23.6884 20.5 25.1249 19.0636 25.1249 17.2917C25.1249 15.5197 23.6884 14.0833 21.9165 14.0833H20.9999C21.3637 12.4622 20.739 10.7896 19.3611 9.6954C17.9831 8.60124 16.0613 8.25181 14.3194 8.77874C12.5776 9.30567 11.2804 10.6289 10.9165 12.25C8.90111 12.1693 7.1082 13.4652 6.63906 15.3418C6.16992 17.2183 7.15596 19.1499 8.99153 19.95'
                          stroke='white'
                          stroke-opacity='0.1'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M15.4998 15.9167V24.1667'
                          stroke='#0DA000'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M15.4998 15.9167V24.1667'
                          stroke='white'
                          stroke-opacity='0.1'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M12.75 21.4167L15.5 24.1667L18.25 21.4167'
                          stroke='#0DA000'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M12.75 21.4167L15.5 24.1667L18.25 21.4167'
                          stroke='white'
                          stroke-opacity='0.1'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </svg>
                    </p>
                  </Col>
                </Row>
                <Row className='my-4'>
                  <Col sm='6'>
                    <Card>
                      <CardBody className='pb-0'>
                        <h5 className='text-center'>Performans</h5>
                        <SemiCircularChart serie='78' color='#53894E' />
                        <div className='text-muted text-center'>
                          <p className='m-1'>Son Test Tarihi:</p>
                          <p>21.02.2023 - 13.55</p>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col sm='6'>
                    <Card>
                      <CardBody className='pb-0'>
                        <h5 className='text-center'>Seo Puanı</h5>
                        <SemiCircularChart serie='75' color='#A03A00' />
                        <div className='text-muted text-center'>
                          <p className='m-1'>Son Test Tarihi:</p>
                          <p>21.02.2023 - 13.55</p>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
                <Row className='mt-2'>
                  <Card>
                    <CardBody>
                      <Col sm='12'>
                        <h4 className='my-2'>Analitik</h4>
                        <p className='my-2'>Aylık Tıklanma Sayısı</p>
                        <h4>112.000</h4>
                      </Col>
                      <Col sm='12'>
                        <AreaChart />
                        <p>01.02.2023-21.02.2023</p>
                        <div className='d-flex justify-content-center'>
                          <Button
                            style={{
                              backgroundColor: '#0d6efd',
                            }}
                          >
                            {' '}
                            <Link to='/seo/overview' style={{ color: '#fff' }}>
                              Siteye Git
                            </Link>
                          </Button>{' '}
                        </div>
                      </Col>
                    </CardBody>
                  </Card>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col sm='4'>
            <Card>
              <CardBody>
                <Row className='mb-4'>
                  <Col sm='1'>
                    <Form>
                      <FormGroup check inline>
                        <Input type='checkbox' />
                      </FormGroup>
                    </Form>
                  </Col>
                  <Col sm='9'>
                    <h5>PARATİK.NET</h5>
                  </Col>
                  <Col sm='2'>
                    {' '}
                    <RiMore2Fill fontSize='25px' />
                    <RiPencilLine fontSize='25px' />
                  </Col>
                  <Col sm='12'>Son Güncellenme Tarihi: 21.02.2023 - 15.23</Col>
                </Row>
                <Row className='my-4'>
                  <Col sm='3' className='d-flex flex-column align-items-center'>
                    <h5 className='p-0 m-1'>SUNUCU</h5>
                    <p>
                      <svg
                        width='30'
                        height='30'
                        viewBox='0 0 30 30'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <rect
                          width='30'
                          height='30'
                          rx='15'
                          fill='#4DAF00'
                          fill-opacity='0.22'
                        />
                        <ellipse
                          cx='14.9998'
                          cy='9.5'
                          rx='7.33333'
                          ry='2.75'
                          stroke='#0DA000'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <ellipse
                          cx='14.9998'
                          cy='9.5'
                          rx='7.33333'
                          ry='2.75'
                          stroke='white'
                          stroke-opacity='0.1'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M7.6665 9.5V15C7.6665 16.5188 10.9497 17.75 14.9998 17.75C19.0499 17.75 22.3332 16.5188 22.3332 15V9.5'
                          stroke='#53894E'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M7.6665 9.5V15C7.6665 16.5188 10.9497 17.75 14.9998 17.75C19.0499 17.75 22.3332 16.5188 22.3332 15V9.5'
                          stroke='white'
                          stroke-opacity='0.1'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M7.6665 15V20.5C7.6665 22.0188 10.9497 23.25 14.9998 23.25C19.0499 23.25 22.3332 22.0188 22.3332 20.5V15'
                          stroke='#53894E'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M7.6665 15V20.5C7.6665 22.0188 10.9497 23.25 14.9998 23.25C19.0499 23.25 22.3332 22.0188 22.3332 20.5V15'
                          stroke='white'
                          stroke-opacity='0.1'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </svg>
                    </p>
                  </Col>
                  <Col sm='3' className='d-flex flex-column align-items-center'>
                    <h5 className='p-0 m-1'>GÜVENLİK</h5>
                    <p>
                      <svg
                        width='31'
                        height='30'
                        viewBox='0 0 31 30'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <rect
                          x='0.5'
                          width='30'
                          height='30'
                          rx='15'
                          fill='#4DAF00'
                          fill-opacity='0.22'
                        />
                        <path
                          d='M12.75 15L14.5833 16.8334L18.25 13.1667'
                          stroke='#0DA000'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M12.75 15L14.5833 16.8334L18.25 13.1667'
                          stroke='white'
                          stroke-opacity='0.1'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M15.5 6.75C17.6411 8.64436 20.4357 9.63069 23.2916 9.5C24.1317 12.3577 23.7769 15.434 22.3084 18.0255C20.8399 20.617 18.3832 22.5021 15.5 23.25C12.6167 22.5021 10.16 20.617 8.6915 18.0255C7.22299 15.434 6.86821 12.3577 7.70829 9.5C10.5642 9.63069 13.3588 8.64436 15.5 6.75'
                          stroke='#53894E'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M15.5 6.75C17.6411 8.64436 20.4357 9.63069 23.2916 9.5C24.1317 12.3577 23.7769 15.434 22.3084 18.0255C20.8399 20.617 18.3832 22.5021 15.5 23.25C12.6167 22.5021 10.16 20.617 8.6915 18.0255C7.22299 15.434 6.86821 12.3577 7.70829 9.5C10.5642 9.63069 13.3588 8.64436 15.5 6.75'
                          stroke='white'
                          stroke-opacity='0.1'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </svg>
                    </p>
                  </Col>
                  <Col sm='3' className='d-flex flex-column align-items-center'>
                    <h5 className='p-0 m-1'>HOSTİNG</h5>
                    <p>
                      <svg
                        width='31'
                        height='30'
                        viewBox='0 0 31 30'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <rect
                          x='0.5'
                          width='30'
                          height='30'
                          rx='15'
                          fill='#4DAF00'
                          fill-opacity='0.22'
                        />
                        <path
                          d='M12.75 15L14.5833 16.8334L18.25 13.1667'
                          stroke='#0DA000'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M12.75 15L14.5833 16.8334L18.25 13.1667'
                          stroke='white'
                          stroke-opacity='0.1'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M15.5 6.75C17.6411 8.64436 20.4357 9.63069 23.2916 9.5C24.1317 12.3577 23.7769 15.434 22.3084 18.0255C20.8399 20.617 18.3832 22.5021 15.5 23.25C12.6167 22.5021 10.16 20.617 8.6915 18.0255C7.22299 15.434 6.86821 12.3577 7.70829 9.5C10.5642 9.63069 13.3588 8.64436 15.5 6.75'
                          stroke='#53894E'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M15.5 6.75C17.6411 8.64436 20.4357 9.63069 23.2916 9.5C24.1317 12.3577 23.7769 15.434 22.3084 18.0255C20.8399 20.617 18.3832 22.5021 15.5 23.25C12.6167 22.5021 10.16 20.617 8.6915 18.0255C7.22299 15.434 6.86821 12.3577 7.70829 9.5C10.5642 9.63069 13.3588 8.64436 15.5 6.75'
                          stroke='white'
                          stroke-opacity='0.1'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </svg>
                    </p>
                  </Col>
                  <Col sm='3' className='d-flex flex-column align-items-center'>
                    <h5 className='p-0 m-1'>YEDEKLEME</h5>
                    <p>
                      <svg
                        width='31'
                        height='30'
                        viewBox='0 0 31 30'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <rect
                          x='0.5'
                          width='30'
                          height='30'
                          rx='15'
                          fill='#4DAF00'
                          fill-opacity='0.22'
                        />
                        <path
                          d='M21.9165 20.5C23.6884 20.5 25.1249 19.0636 25.1249 17.2917C25.1249 15.5197 23.6884 14.0833 21.9165 14.0833H20.9999C21.3637 12.4622 20.739 10.7896 19.3611 9.6954C17.9831 8.60124 16.0613 8.25181 14.3194 8.77874C12.5776 9.30567 11.2804 10.6289 10.9165 12.25C8.90111 12.1693 7.1082 13.4652 6.63906 15.3418C6.16992 17.2183 7.15596 19.1499 8.99153 19.95'
                          stroke='#53894E'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M21.9165 20.5C23.6884 20.5 25.1249 19.0636 25.1249 17.2917C25.1249 15.5197 23.6884 14.0833 21.9165 14.0833H20.9999C21.3637 12.4622 20.739 10.7896 19.3611 9.6954C17.9831 8.60124 16.0613 8.25181 14.3194 8.77874C12.5776 9.30567 11.2804 10.6289 10.9165 12.25C8.90111 12.1693 7.1082 13.4652 6.63906 15.3418C6.16992 17.2183 7.15596 19.1499 8.99153 19.95'
                          stroke='white'
                          stroke-opacity='0.1'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M15.4998 15.9167V24.1667'
                          stroke='#0DA000'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M15.4998 15.9167V24.1667'
                          stroke='white'
                          stroke-opacity='0.1'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M12.75 21.4167L15.5 24.1667L18.25 21.4167'
                          stroke='#0DA000'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M12.75 21.4167L15.5 24.1667L18.25 21.4167'
                          stroke='white'
                          stroke-opacity='0.1'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </svg>
                    </p>
                  </Col>
                </Row>
                <Row className='my-4'>
                  <Col sm='6'>
                    <Card>
                      <CardBody className='pb-0'>
                        <h5 className='text-center'>Performans</h5>
                        <SemiCircularChart serie='78' color='#FBB347' />
                        <div className='text-muted text-center'>
                          <p className='m-1'>Son Test Tarihi:</p>
                          <p>21.02.2023 - 13.55</p>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col sm='6'>
                    <Card>
                      <CardBody className='pb-0'>
                        <h5 className='text-center'>Seo Puanı</h5>
                        <SemiCircularChart serie='75' color='#53894E' />
                        <div className='text-muted text-center'>
                          <p className='m-1'>Son Test Tarihi:</p>
                          <p>21.02.2023 - 13.55</p>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
                <Row className='mt-2'>
                  <Card>
                    <CardBody>
                      <Col sm='12'>
                        <h4 className='my-2'>Analitik</h4>
                        <p className='my-2'>Aylık Tıklanma Sayısı</p>
                        <h4>112.000</h4>
                      </Col>
                      <Col sm='12'>
                        <AreaChart />
                        <p>01.02.2023-21.02.2023</p>
                        <div className='d-flex justify-content-center'>
                          <Button
                            style={{
                              backgroundColor: '#0d6efd',
                            }}
                          >
                            {' '}
                            <Link to='/seo/overview' style={{ color: '#fff' }}>
                              Siteye Git
                            </Link>
                          </Button>{' '}
                        </div>
                      </Col>
                    </CardBody>
                  </Card>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <div className='d-flex justify-content-end'>
          <Pagination className='d-flex mt-3'>
            <PaginationItem>
              <PaginationLink href='#'>Önceki</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href='#'>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href='#'>2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href='#'>3</PaginationLink>
            </PaginationItem>
            <PaginationItem active>
              <PaginationLink href='#'>4</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href='#'>Sonraki</PaginationLink>
            </PaginationItem>
          </Pagination>
        </div>
      </Container>
    </div>
  )
}

export default Homepage
