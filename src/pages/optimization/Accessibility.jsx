import React from 'react'
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Table,
  UncontrolledCollapse,
} from 'reactstrap'
import tn from './tn.png'
import AccessibilityChart from '../../charts/AccessibilityChart'
import { BsFillCircleFill } from 'react-icons/bs'

import { RiErrorWarningLine } from 'react-icons/ri'

function accessibility() {
  return (
    <div>
      <Row className='match-height my-4'>
        <Col sm='4'>
          <Card>
            <CardBody>
              <Row>
                <Col sm='6'>
                  <CardTitle>
                    <h4 className='mb-0'>Erişilebilirlik</h4>
                  </CardTitle>
                  <h6 className='text-muted my-0'>Son Tarama : Bugün</h6>
                  <div class='mt-5 gap-3'>
                    <h5 class='mb-0 text-muted'>Önceki : 90</h5>
                    <h5 class='text-success'>4.0%</h5>
                  </div>
                </Col>
                <Col sm='6'>
                  <AccessibilityChart />
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm='12'>
          <Card className='mb-3 p-5'>
            <Table bordered className='mb-3'>
              <thead>
                <tr>
                  <th>CONTRAST</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  color='primary'
                  id='toggler1'
                  style={{
                    marginBottom: '1rem',
                  }}
                >
                  <td className='bg-light'>
                    <BsFillCircleFill className='me-3' color='#FBB347' />
                    <span className='align-middle fw-bold ms-3'>
                      Arka plan ve ön plan renkleri yeterli kontrast oranına
                      sahip değil.
                    </span>
                  </td>
                </tr>
                <UncontrolledCollapse toggler='#toggler1'>
                  <Card>
                    <CardBody>
                      <Row>
                        <Col sm='1' className='d-flex align-items-center'>
                          <RiErrorWarningLine size='25px' color='yellow' />
                        </Col>
                        <Col sm='11'>
                          {' '}
                          Birçok kullanıcı, düşük kontrastlı metni okumakta
                          zorlanır veya okuyamaz.
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                  <Table bordered>
                    <thead>
                      <tr>
                        <th>Başarısız Öğeler</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <Row className='px-3'>
                            <Col
                              sm='1'
                              className='d-flex justify-content-center align-items-center'
                            >
                              <img src={tn} alt='logo' />
                            </Col>
                            <Col sm='11'>
                              <p className='fw-bolder'>
                                Birçok kullanıcı, düşük kontrastlı metni
                                okumakta zorlanır veya okuyamaz.
                              </p>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                              </p>
                            </Col>
                          </Row>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Row className='px-3'>
                            <Col
                              sm='1'
                              className='d-flex justify-content-center align-items-center'
                            >
                              <img src={tn} alt='logo' />
                            </Col>
                            <Col sm='11'>
                              <p className='fw-bolder'>
                                Birçok kullanıcı, düşük kontrastlı metni
                                okumakta zorlanır veya okuyamaz.
                              </p>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                              </p>
                            </Col>
                          </Row>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </UncontrolledCollapse>
              </tbody>
            </Table>

            <Table bordered className='mb-3'>
              <thead>
                <tr>
                  <th>ADLAR VE ETİKETLER</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  color='primary'
                  id='toggler2'
                  style={{
                    marginBottom: '1rem',
                  }}
                >
                  <td className='bg-light'>
                    <BsFillCircleFill className='me-3' color='#A03A00' />
                    <span className='align-middle fw-bold ms-3'>
                      Arka plan ve ön plan renkleri yeterli kontrast oranına
                      sahip değil.
                    </span>
                  </td>
                </tr>
                <UncontrolledCollapse toggler='#toggler2'>
                  <Card>
                    <CardBody>
                      <Row>
                        <Col sm='1' className='d-flex align-items-center'>
                          <RiErrorWarningLine size='25px' color='red' />
                        </Col>
                        <Col sm='11'>
                          {' '}
                          Birçok kullanıcı, düşük kontrastlı metni okumakta
                          zorlanır veya okuyamaz.
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                  <Table bordered>
                    <thead>
                      <tr>
                        <th>Başarısız Öğeler</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <Row className='px-3'>
                            <Col sm='11'>
                              <p className='fw-bolder'>
                                div.row > div.col-8 > div.card-body >
                                a.stretched-link
                              </p>
                              <p>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit.
                              </p>
                            </Col>
                          </Row>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Row className='px-3'>
                            <Col sm='11'>
                              <p className='fw-bolder'>
                                div.row > div.col-8 > div.card-body >
                                a.stretched-link
                              </p>
                              <p>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit.
                              </p>
                            </Col>
                          </Row>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Row className='px-3'>
                            <Col
                              sm='1'
                              className='d-flex justify-content-center align-items-center'
                            >
                              <img src={tn} alt='logo' />
                            </Col>
                            <Col sm='11'>
                              <p className='fw-bolder'>
                                div.row > div.col-sm-2 > div.tab-box > a.btn
                              </p>
                              <p>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit.
                              </p>
                            </Col>
                          </Row>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </UncontrolledCollapse>
              </tbody>
            </Table>

            <Table bordered className='mb-3'>
              <thead>
                <tr>
                  <th>GEZİNME</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  color='primary'
                  id='toggler3'
                  style={{
                    marginBottom: '1rem',
                  }}
                >
                  <td className='bg-light'>
                    <BsFillCircleFill className='me-3' color='#FBB347' />
                    <span className='align-middle fw-bold ms-3'>
                      Başlık öğeleri sırayla azalan düzende sıralı değil
                    </span>
                  </td>
                </tr>
                <UncontrolledCollapse toggler='#toggler3'>
                  <Card>
                    <CardBody>
                      <Row>
                        <Col sm='1' className='d-flex align-items-center'>
                          <RiErrorWarningLine size='25px' color='yellow' />
                        </Col>
                        <Col sm='11'>
                          {' '}
                          Düzey atlamayan gerektiği gibi sıralanmış başlıklar
                          sayfanın anlamsal yapısını iletir. Bu şekilde yardımcı
                          teknolojileri kullanırken gezinmeyi ve anlamayı
                          kolaylaştırır.
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                  <Table bordered>
                    <thead>
                      <tr>
                        <th>Başarısız Öğeler</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <Row className='px-3'>
                            <Col sm='11'>
                              <p className='fw-bolder'>
                                div.row > div.col-8 > div.card-body >
                                a.stretched-link
                              </p>
                              <p>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit.
                              </p>
                            </Col>
                          </Row>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Row className='px-3'>
                            <Col
                              sm='1'
                              className='d-flex justify-content-center align-items-center'
                            >
                              <img src={tn} alt='logo' />
                            </Col>
                            <Col sm='11'>
                              <p className='fw-bolder'>Para Kazanma </p>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                              </p>
                            </Col>
                          </Row>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </UncontrolledCollapse>
                <tr
                  color='primary'
                  id='toggler4'
                  style={{
                    marginBottom: '1rem',
                  }}
                >
                  <td className='bg-light'>
                    <BsFillCircleFill className='me-3' color='#A1A1A1' />
                    <span className='align-middle fw-bold ms-3'>
                      İstek sayısını az ve aktarma boyutlarını küçük tutun
                    </span>
                  </td>
                </tr>
                <UncontrolledCollapse toggler='#toggler4'>
                  <Table bordered>
                    <thead>
                      <tr>
                        <th style={{ width: '80%' }}>KAYNAK TÜRÜ</th>
                        <th style={{ width: '10%' }} className='text-center'>
                          İSTEK SAYISI{' '}
                        </th>
                        <th style={{ width: '10%' }} className='text-center'>
                          AKTARIM BOYUTU{' '}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='fw-bold'>TOPLAM</td>
                        <td className='text-center'>38</td>
                        <td className='text-center'>855,7 KiB</td>
                      </tr>
                      <tr>
                        <td className='fw-bold'>RESİM</td>
                        <td className='text-center'>38</td>
                        <td className='text-center'>855,7 KiB</td>
                      </tr>
                      <tr>
                        <td className='fw-bold'>DÖKÜMAN</td>
                        <td className='text-center'>1</td>
                        <td className='text-center'>855,7 KiB</td>
                      </tr>
                    </tbody>
                  </Table>
                </UncontrolledCollapse>
                <tr
                  color='primary'
                  style={{
                    marginBottom: '1rem',
                  }}
                >
                  <td className='bg-light'>
                    <BsFillCircleFill className='me-3' color='#A03A00' />
                    <span className='align-middle fw-bold ms-3'>
                      İstek sayısını az ve aktarma boyutlarını küçük tutun
                    </span>
                  </td>
                </tr>
                <tr
                  color='primary'
                  style={{
                    marginBottom: '1rem',
                  }}
                >
                  <td className='bg-light'>
                    <BsFillCircleFill className='me-3' color='#FBB347' />
                    <span className='align-middle fw-bold ms-3'>
                      İstek sayısını az ve aktarma boyutlarını küçük tutun
                    </span>
                  </td>
                </tr>
                <tr
                  color='primary'
                  style={{
                    marginBottom: '1rem',
                  }}
                >
                  <td className='bg-light'>
                    <BsFillCircleFill className='me-3' color='#A1A1A1' />
                    <span className='align-middle fw-bold ms-3'>
                      İstek sayısını az ve aktarma boyutlarını küçük tutun
                    </span>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default accessibility
