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

import BestAppsChart from '../../charts/BestAppsChart'
import { BsFillCircleFill } from 'react-icons/bs'
import { RiErrorWarningLine, RiExternalLinkFill } from 'react-icons/ri'
import tn from './tn.png'

function BestApps() {
  return (
    <div>
      {' '}
      <Row className='match-height my-4'>
        <Col sm='4'>
          <Card>
            <CardBody>
              <Row>
                <Col sm='6'>
                  <CardTitle>
                    <h4 className='mb-0'>En İyi Uygulamalar</h4>
                  </CardTitle>
                  <h6 className='text-muted my-0'>Son Tarama : Bugün</h6>
                  <div class='mt-5 gap-3'>
                    <h5 class='mb-0 text-muted'>Önceki : 79</h5>
                    <h5 class='text-success'>4.0%</h5>
                  </div>
                </Col>
                <Col sm='6'>
                  <BestAppsChart />
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
                  <th>KULLANICI DENEYİMİ</th>
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
                      Yanlış en boy oranına sahip resimler görüntülüyor
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
                          Resim görüntüleme boyutları doğal en boy oranıyla
                          eşleşmeli.
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                  <Table bordered>
                    <thead>
                      <tr>
                        <th style={{ width: '80%' }}>KOD KISMI</th>
                        <th style={{ width: '10%' }} className='text-center'>
                          EN BOY ORANI (GÖRÜNTÜLENEN)
                        </th>
                        <th style={{ width: '10%' }} className='text-center'>
                          EN BOY ORANI (GERÇEK)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <Row>
                            <Col
                              sm='2'
                              className='d-flex justify-content-center align-items-center'
                            >
                              <img src={tn} alt='logo' />
                            </Col>
                            <Col sm='9'>
                              <p className='fw-bolder'>Yeni İş Fikirleri</p>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nunc ut urna at lacus sagittis
                                placerat ut et nulla. Fusce pulvinar et eros in
                                laoreet. Nunc consequat, velit id dignissim
                                pretium, lacus nulla scelerisque nunc, sit amet
                                placerat nunc erat ut dui. Praesent in nibh
                                elit.
                              </p>
                            </Col>
                            <Col
                              sm='1'
                              className='d-flex justify-content-center align-items-center'
                            >
                              <RiExternalLinkFill />
                            </Col>
                          </Row>
                        </td>
                        <td className='text-center'>526 x 317 (1.66)</td>
                        <td className='text-center'>748 x 419 (1.79)</td>
                      </tr>
                      <tr>
                        <td>
                          <Row>
                            <Col
                              sm='2'
                              className='d-flex justify-content-center align-items-center'
                            >
                              <img src={tn} alt='logo' />
                            </Col>
                            <Col sm='9'>
                              <p className='fw-bolder '>Polonya Asgari Ücret</p>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nunc ut urna at lacus sagittis
                                placerat ut et nulla. Fusce pulvinar et eros in
                                laoreet. Nunc consequat, velit id dignissim
                                pretium, lacus nulla scelerisque nunc, sit amet
                                placerat nunc erat ut dui. Praesent in nibh
                                elit.
                              </p>
                            </Col>
                            <Col
                              sm='1'
                              className='d-flex justify-content-center align-items-center'
                            >
                              <RiExternalLinkFill />
                            </Col>
                          </Row>
                        </td>
                        <td className='text-center'>526 x 317 (1.66)</td>
                        <td className='text-center'>748 x 419 (1.79)</td>
                      </tr>
                    </tbody>
                  </Table>
                </UncontrolledCollapse>
              </tbody>
            </Table>

            <Table bordered className='mb-3'>
              <thead>
                <tr>
                  <th>GENEL</th>
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
                    <BsFillCircleFill className='me-3' color='#A03A00' />
                    <span className='align-middle fw-bold ms-3'>
                      Tarayıcı hataları konsola kaydedildi
                    </span>
                  </td>
                </tr>
                <UncontrolledCollapse toggler='#toggler3'>
                  <Card>
                    <CardBody>
                      <Row>
                        <Col sm='1' className='d-flex align-items-center'>
                          <RiErrorWarningLine size='25px' color='red' />
                        </Col>
                        <Col sm='11'>
                          Konsola kaydedilen hatalar çözülmemiş problemleri
                          belirtir Bunlar, ağ istek hatalarından ve diğer
                          tarayıcı sorunlarından gelebilir.
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                  <Table bordered>
                    <thead>
                      <tr>
                        <th>AÇIKLAMA</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <Row className='px-3'>
                            <Col sm='11'>
                              <p className='fw-bolder'>
                                The source list for the Content Security Policy
                                directive 'default-src' contains an invalid
                                source: ''unsafe-dynamic''. It will be ignored.
                              </p>
                            </Col>
                            <Col sm='1'>
                              <RiExternalLinkFill />
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
                    <BsFillCircleFill className='me-3' color='#FBB347' />
                    <span className='align-middle fw-bold ms-3'>
                      Statik öğeleri verimli bir önbellek politikasıyla
                      yayınlayın.
                    </span>
                  </td>
                </tr>
                <UncontrolledCollapse toggler='#toggler4'>
                  <Card>
                    <CardBody>
                      <Row>
                        <Col sm='1' className='d-flex align-items-center'>
                          <RiErrorWarningLine size='25px' color='yellow' />
                        </Col>
                        <Col sm='11'>
                          Uzun önbellek ömrü, sayfanızın tekrar ziyaret edilmesi
                          sürecini hızlandırabilir.
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                  <Table bordered>
                    <thead>
                      <tr>
                        <th style={{ width: '80%' }}>KOD KISMI</th>
                        <th style={{ width: '10%' }} className='text-center'>
                          TTL'Yİ ÖNBELLEĞE ALMA
                        </th>
                        <th style={{ width: '10%' }} className='text-center'>
                          AKTARIM BOYUTU{' '}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='fw-bold'>
                          <Row className='d-flex align-items-center'>
                            <Col sm='10'>
                              <p className='p-0 m-0'>İNSTAGRAMDA BUTİK AÇMAK</p>
                              <a href='https://paratik.net/wp-content/uploads/2023/02/instagramda-butik-acmak-768x459.jpg.webp'>
                                https://paratik.net/wp-content/uploads/2023/02/instagramda-butik-acmak-768x459.jpg.webp
                              </a>
                            </Col>
                            <Col sm='2'>
                              <a href='#'>
                                <RiExternalLinkFill />
                              </a>
                            </Col>
                          </Row>
                        </td>
                        <td className='text-center'>7 D</td>
                        <td className='text-center'>69 KiB</td>
                      </tr>
                      <tr>
                        <td className='fw-bold'>
                          <Row className='d-flex align-items-center'>
                            <Col sm='10'>
                              <p className='p-0 m-0'>İNSTAGRAMDA BUTİK AÇMAK</p>
                              <a href='https://paratik.net/wp-content/uploads/2023/02/instagramda-butik-acmak-768x459.jpg.webp'>
                                https://paratik.net/wp-content/uploads/2023/02/instagramda-butik-acmak-768x459.jpg.webp
                              </a>
                            </Col>
                            <Col sm='2'>
                              <a href='#'>
                                <RiExternalLinkFill />
                              </a>
                            </Col>
                          </Row>
                        </td>
                        <td className='text-center'>7 D</td>
                        <td className='text-center'>69 KiB</td>
                      </tr>
                      <tr>
                        <td className='fw-bold'>
                          <Row className='d-flex align-items-center'>
                            <Col sm='10'>
                              <p className='p-0 m-0'>İNSTAGRAMDA BUTİK AÇMAK</p>
                              <a href='https://paratik.net/wp-content/uploads/2023/02/instagramda-butik-acmak-768x459.jpg.webp'>
                                https://paratik.net/wp-content/uploads/2023/02/instagramda-butik-acmak-768x459.jpg.webp
                              </a>
                            </Col>
                            <Col sm='2'>
                              <a href='#'>
                                <RiExternalLinkFill />
                              </a>
                            </Col>
                          </Row>
                        </td>
                        <td className='text-center'>7 D</td>
                        <td className='text-center'>69 KiB</td>
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

export default BestApps
