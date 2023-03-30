import React, { useState } from 'react'
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Table,
  UncontrolledCollapse,
  CardHeader,
} from 'reactstrap'

import tn from './tn.png'

import PerformanceChart from '../../charts/PerformanceChart'
import AccessibilityChart from '../../charts/AccessibilityChart'
import BestAppsChart from '../../charts/BestAppsChart'
import { BsFillCircleFill } from 'react-icons/bs'
import { StackedBar } from '../../charts'
import {
  RiErrorWarningLine,
  RiCloseCircleLine,
  RiCheckboxCircleLine,
  RiExternalLinkFill,
} from 'react-icons/ri'

function Performance() {
  return (
    <div>
      <Row className='my-3'>
        <Col sm='4'>
          <Card>
            <CardBody>
              <Row>
                <Col sm='6'>
                  <CardTitle>
                    <h4 className='mb-0'>Performans</h4>
                  </CardTitle>
                  <h6 className='text-muted my-0'>Son Tarama : Bugün</h6>
                  <div class='mt-5 gap-3'>
                    <h5 class='mb-0 text-muted'>Önceki : 84</h5>
                    <h5 class='text-success'>4.0%</h5>
                  </div>
                </Col>
                <Col sm='6'>
                  <PerformanceChart />
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className='my-3'>
        <Col sm='7'>
          <Card>
            <CardBody>
              <CardTitle className='m-0'>
                <h4 className='m-0'>Temel Web Verileri</h4>
              </CardTitle>
              <div className='font-small-2 '>
                Önemli Web Verileri Değerlendirmesi: Başarılı Oldu
              </div>
              <div className='mt-5'>
                <StackedBar
                  title='En Büyük İçerikli Boya (LCP)'
                  values={[85, 3, 11]}
                />
              </div>
              <div className='mt-5'>
                <StackedBar
                  title='İlk Giriş Gecikmesi (FID)'
                  values={[80, 15, 5]}
                />
              </div>
              <div className='mt-5 mb-5'>
                <StackedBar
                  title='Kümülatif Düzen Kayması (CLS)'
                  values={[70, 10, 20]}
                />
              </div>
              <div className='mt-3'>
                <span className='me-4'>
                  <BsFillCircleFill className='me-2' color='#14A44D' />
                  Harika
                </span>
                <span className='me-4'>
                  <BsFillCircleFill className='me-2' color='#E4A11B' />
                  İyileştirme Gerekiyor
                </span>
                <span className='me-4'>
                  <BsFillCircleFill className='me-2' color='#DC4C64' />
                  Kötü
                </span>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col sm='5'>
          <Card>
            <CardBody>
              <CardTitle>
                <h4>Metrikler</h4>
              </CardTitle>
              <div className='mt-5 mb-4 d-flex justify-content-between align-items-center'>
                <span>
                  <BsFillCircleFill className='me-3' color='#14A44D' />
                  <span className='fs-5 fw-bold'>İlk İçerikli Boya</span>
                </span>
                <span className='fs-5 text-muted fw-bold'>0,3 sn</span>
              </div>
              <div className='my-4 d-flex justify-content-between align-items-center'>
                <span>
                  <BsFillCircleFill className='me-3' color='#14A44D' />
                  <span className='fs-5 fw-bold'>Hız Endeksi</span>
                </span>
                <span className='fs-5 text-muted fw-bold'>0,5 sn</span>
              </div>
              <div className='my-4 d-flex justify-content-between align-items-center'>
                <span>
                  <BsFillCircleFill className='me-3' color='#14A44D' />
                  <span className='fs-5 fw-bold'>En Büyük İçerikli Boya</span>
                </span>
                <span className='fs-5 text-muted fw-bold'>0,6 sn</span>
              </div>
              <div className='my-4 d-flex justify-content-between align-items-center'>
                <span>
                  <BsFillCircleFill className='me-3' color='#14A44D' />
                  <span className='fs-5 fw-bold'>Etkileşim Zamanı</span>
                </span>
                <span className='fs-5 text-muted fw-bold'>0,3 sn</span>
              </div>
              <div className='my-4 d-flex justify-content-between align-items-center'>
                <span>
                  <BsFillCircleFill className='me-3' color='#14A44D' />
                  <span className='fs-5 fw-bold'>Toplam Engelleme Süresi</span>
                </span>
                <span className='fs-5 text-muted fw-bold'>0 ms</span>
              </div>
              <div className='my-4 d-flex justify-content-between align-items-center'>
                <span>
                  <BsFillCircleFill className='me-3' color='#14A44D' />
                  <span className='fs-5 fw-bold'>Kümülatif Düzen Kayması</span>
                </span>
                <span className='fs-5 text-muted fw-bold'>0,001</span>
              </div>
              <div className='mt-4 d-flex justify-content-between align-items-center'>
                <span>
                  <BsFillCircleFill className='me-3' color='#14A44D' />
                  <span className='fs-5 fw-bold'>Kümülatif Düzen Kayması</span>
                </span>
                <span className='fs-5 text-muted fw-bold'>0,001</span>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm='12'>
          <Card className='mb-3 p-5'>
            <Table bordered>
              <thead>
                <tr>
                  <th>TEŞHİS</th>
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
                      Doğru boyuta sahip resimler
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
                          Gerekli resim boyutlarının kullanılabilmesi için
                          resimleri doğrudan medya kitaplığından yükleyin,
                          ardından ideal resim boyutlarının kullanıldığından
                          (esnek ayrılma noktası için olanlar dahil) emin olmak
                          için resimleri medya kitaplığından ekleyin veya resim
                          widget'ını kullanın. Boyutları kullanım için yeterli
                          değilse `Full Size` resimler kullanmaktan kaçının.
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                  <Table bordered>
                    <thead>
                      <tr>
                        <th style={{ width: '80%' }}>KOD KISMI</th>
                        <th style={{ width: '10%' }}>KAYNAK BOYUTU</th>
                        <th style={{ width: '10%' }}>POTANSİYEL TASARRUFLAR</th>
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
                              <p className='fw-bolder'>
                                INSTAGRAMDA BUTİK AÇMAK
                              </p>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nunc ut urna at lacus sagittis
                                placerat ut et nulla. Fusce pulvinar et eros in
                                laoreet. Nunc consequat, velit id dignissim
                                pretium, lacus nulla scelerisque nunc, sit amet
                                placerat nunc erat ut dui. Praesent in nibh
                                elit. Curabitur bibendum vestibulum libero, sit
                                amet luctus mauris feugiat volutpat. Sed
                                porttitor nunc a cursus tristique. Duis vel
                                ultricies augue. Vestibulum vitae lobortis nisi.
                                Integer vitae enim nec turpis viverra luctus at
                                et tortor.
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
                        <td>67,7 KB</td>
                        <td>60,4 KB</td>
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
                              <p className='fw-bolder'>
                                INSTAGRAMDA BUTİK AÇMAK
                              </p>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nunc ut urna at lacus sagittis
                                placerat ut et nulla. Fusce pulvinar et eros in
                                laoreet. Nunc consequat, velit id dignissim
                                pretium, lacus nulla scelerisque nunc, sit amet
                                placerat nunc erat ut dui. Praesent in nibh
                                elit. Curabitur bibendum vestibulum libero, sit
                                amet luctus mauris feugiat volutpat. Sed
                                porttitor nunc a cursus tristique. Duis vel
                                ultricies augue. Vestibulum vitae lobortis nisi.
                                Integer vitae enim nec turpis viverra luctus at
                                et tortor.
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
                        <td>67,7 KB</td>
                        <td>60,4 KB</td>
                      </tr>
                    </tbody>
                  </Table>
                </UncontrolledCollapse>

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
                      Resim öğelerinin açıkça belirtilmiş width ve height
                      değerleri yok
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
                          Düzen kaymalarını azaltıp CLS'yi iyileştirmek için
                          görsel öğelerde genişliği ve yüksekliği açıkça
                          belirtilmiş şekilde ayarlayın.
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                  <Table bordered>
                    <thead>
                      <tr>
                        <th style={{ width: '80%' }}>KOD KISMI</th>
                        <th style={{ width: '10%' }}>KAYNAK BOYUTU</th>
                        <th style={{ width: '10%' }}>POTANSİYEL TASARRUFLAR</th>
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
                              <p className='fw-bolder'>
                                INSTAGRAMDA BUTİK AÇMAK
                              </p>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nunc ut urna at lacus sagittis
                                placerat ut et nulla. Fusce pulvinar et eros in
                                laoreet. Nunc consequat, velit id dignissim
                                pretium, lacus nulla scelerisque nunc, sit amet
                                placerat nunc erat ut dui. Praesent in nibh
                                elit. Curabitur bibendum vestibulum libero, sit
                                amet luctus mauris feugiat volutpat. Sed
                                porttitor nunc a cursus tristique. Duis vel
                                ultricies augue. Vestibulum vitae lobortis nisi.
                                Integer vitae enim nec turpis viverra luctus at
                                et tortor.
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
                        <td>67,7 KB</td>
                        <td>60,4 KB</td>
                      </tr>
                    </tbody>
                  </Table>
                </UncontrolledCollapse>

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
                      Statik öğeleri verimli bir önbellek politikasıyla
                      yayınlayın.
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
                          TTL'Yİ ÖNBELLEĞE ALMA{' '}
                        </th>
                        <th style={{ width: '10%' }} className='text-center'>
                          AKTARIM BOYUTU{' '}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <Row>
                            <Col sm='11'>
                              <p className='fw-bolder'>
                                INSTAGRAMDA BUTİK AÇMAK
                              </p>
                              <p>
                                <a href=' https://paratik.net/wp-content/uploads/2023/02/instagramda-butik-acmak-768x459.jpg.webp'>
                                  {' '}
                                  https://paratik.net/wp-content/uploads/2023/02/instagramda-butik-acmak-768x459.jpg.webp
                                </a>
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
                        <td>67,7 KB</td>
                        <td>60,4 KB</td>
                      </tr>
                      <tr>
                        <td>
                          <Row>
                            <Col sm='11'>
                              <p className='fw-bolder'>
                                INSTAGRAMDA BUTİK AÇMAK
                              </p>
                              <p>
                                <a href=' https://paratik.net/wp-content/uploads/2023/02/instagramda-butik-acmak-768x459.jpg.webp'>
                                  {' '}
                                  https://paratik.net/wp-content/uploads/2023/02/instagramda-butik-acmak-768x459.jpg.webp
                                </a>
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
                        <td>67,7 KB</td>
                        <td>60,4 KB</td>
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
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Performance
