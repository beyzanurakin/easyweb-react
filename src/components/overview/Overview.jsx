import React from 'react'
import { Row, Col, Card, CardBody, CardTitle, Table } from 'reactstrap'
import {
  LineChart,
  PieChart,
  RadialBar,
  GreenRadialBar,
  AreaChart,
  BarChart,
  PillChart,
  StackedBar,
  ColumnChart,
} from '../../charts'
import { BsFillCircleFill } from 'react-icons/bs'
import {
  RiErrorWarningLine,
  RiCloseCircleLine,
  RiCheckboxCircleLine,
} from 'react-icons/ri'

function Overview() {
  return (
    <div>
      <Row className='match-height gy-4'>
        {/* FIRST ROW */}
        <Col sm='4'>
          <Card>
            <CardBody>
              <Row>
                <Col xs='6' className='d-flex flex-column'>
                  <div>
                    <CardTitle>
                      <h4>Seo Puanı</h4>
                    </CardTitle>
                    <p className=' font-weight-bold mb-0'>Son Tarama : Bugün</p>
                  </div>
                  <div class='mt-5 gap-3'>
                    <h5 class='mb-0 text-muted'>Önceki : 84</h5>
                    <p class='text-success'>4.0%</p>
                  </div>
                </Col>
                <Col xs='6'>
                  <GreenRadialBar />
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
                  <CardTitle>
                    <h4>Anahtar Kelimeler</h4>
                  </CardTitle>
                  <p className=' font-weight-bold mb-0'>Son Tarama : Bugün</p>
                  <div class='mt-5 gap-3'>
                    <h5 class='mb-0'>1243</h5>
                    <p class='text-success'>+12</p>
                  </div>
                </Col>
                <Col xs='6'>
                  <AreaChart />
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
                  <CardTitle>
                    <h4>Site Trafiği</h4>
                  </CardTitle>
                  <p className=' font-weight-bold mb-0'>Son Tarama : Bugün</p>
                  <div class='mt-5 gap-3'>
                    <h5 class='mb-0'>9243</h5>
                    <p class='text-success'>+112</p>
                  </div>
                </Col>
                <Col xs='6'>
                  <AreaChart />
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        {/* SECOND ROW */}
        <Col sm='3'>
          <Card>
            <CardBody>
              <CardTitle>
                <h4>Sayfa Derinliği (Tıklama Sayısı)</h4>
              </CardTitle>

              <ColumnChart />
            </CardBody>
          </Card>
        </Col>
        <Col sm='6'>
          <Card>
            <CardBody>
              <CardTitle>
                <h4>Linkler</h4>
              </CardTitle>
              <StackedBar values={[35, 5, 20, 40]} />
              <div className='mt-4'>
                <p>
                  <BsFillCircleFill className='me-3' color='#14A44D' />
                  No Follow
                </p>
                <p>
                  <BsFillCircleFill className='me-3' color='#E4A11B' />
                  Dofollow
                </p>
                <p>
                  <BsFillCircleFill className='me-3' color='#1F51FF' />
                  Noreferrer
                </p>
                <p>
                  <BsFillCircleFill className='me-3' color='#7F00FF' />
                  Noopener
                </p>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col sm='3'>
          <Card>
            <CardBody>
              <CardTitle>
                <h5>Domain Bilgisi</h5>
                <p>Domain Sona Erme Süresi</p>
                <p>Temmuz-01-2023</p>
              </CardTitle>
              <CardTitle>
                <h5>Hosting Bilgisi</h5>
                <p>Hosting Sona Erme Süresi</p>
                <p>Temmuz-01-2023</p>
              </CardTitle>
            </CardBody>
          </Card>
        </Col>

        {/* THIRD ROW */}
        <Col sm='2'>
          <Card>
            <CardBody>
              <CardTitle className='m-0'>
                <h4 className='m-0'>Sağlık Puanı</h4>
              </CardTitle>
              <GreenRadialBar />
              <BarChart />
            </CardBody>
          </Card>
        </Col>

        <Col sm='8'>
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
              <div className='mt-5'>
                <StackedBar
                  title='Kümülatif Düzen Kayması (CLS)'
                  values={[70, 10, 20]}
                />
              </div>
              <div className='mt-3'>
                <span className='me-4'>
                  <BsFillCircleFill color='#14A44D' />
                  Harika
                </span>
                <span className='me-4'>
                  <BsFillCircleFill color='#E4A11B' />
                  İyileştirme Gerekiyor
                </span>
                <span className='me-4'>
                  <BsFillCircleFill color='#DC4C64' />
                  Kötü
                </span>
              </div>
            </CardBody>
          </Card>
        </Col>

        <Col sm='2'>
          <Card>
            <CardBody>
              <CardTitle className='m-0'>
                <h4 className='m-0'>Taranan Sayfa Sayısı</h4>
              </CardTitle>

              <BarChart />
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle className='m-0'>
                <h5 className='m-0'>Bulunan Url Sayısı</h5>
              </CardTitle>

              <BarChart />
            </CardBody>
          </Card>
        </Col>

        {/* FORTH ROW */}
        <Col sm='5'>
          <Card>
            <CardBody>
              <CardTitle>
                <h4>Kategoriye Göre Dağılım</h4>
              </CardTitle>
              <PillChart />
            </CardBody>
          </Card>
        </Col>
        <Col sm='7'>
          <Card>
            <CardBody>
              <CardTitle>
                <Row>
                  <Col>
                    <h4>En Önemli Sorunlar</h4>
                  </Col>
                  <Col>
                    <p className='text-end'>Tümünü Görüntüle(2.103)</p>
                  </Col>
                </Row>
              </CardTitle>
              <Table className='p-3'>
                <tbody>
                  <tr>
                    <td>
                      <RiCloseCircleLine size='25px' color='red' />
                      <span className='ms-3'>
                        ÖZDEŞ BAŞLIK VE H1 ETİKETLERİ
                      </span>
                    </td>
                    <td>26</td>
                  </tr>
                  <tr>
                    <td>
                      <RiCloseCircleLine size='25px' color='red' />
                      <span className='ms-3'>
                        YİNELENEN SAYFA BAŞLIKLARINA SAHİP URL'LER
                      </span>
                    </td>{' '}
                    <td>24</td>
                  </tr>
                  <tr>
                    <td>
                      <RiCloseCircleLine size='25px' color='red' />
                      <span className='ms-3'>3XX GÖRSELLERİ</span>
                    </td>{' '}
                    <td>14</td>
                  </tr>
                  <tr>
                    <td>
                      <RiCloseCircleLine size='25px' color='red' />
                      <span className='ms-3'>4XX HTTP DURUM KODLARI</span>
                    </td>{' '}
                    <td>12</td>
                  </tr>
                  <tr>
                    <td>
                      <RiCloseCircleLine size='25px' color='red' />
                      <span className='ms-3'>4XX GÖRSEL BULUNAMADI</span>
                    </td>{' '}
                    <td>8</td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Overview
