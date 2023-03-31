import React from 'react'
import { Row, Col, Card, CardBody, CardTitle } from 'reactstrap'
import PerformanceChart from '../../charts/PerformanceChart'
import AccessibilityChart from '../../charts/AccessibilityChart'
import BestAppsChart from '../../charts/BestAppsChart'
import { BsFillCircleFill } from 'react-icons/bs'
import { StackedBar } from '../../charts'

function General() {
  return (
    <div>
      <Row className='match-height gy-4'>
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
        <Col sm='7'>
          <Card>
            <CardBody>
              <CardTitle className='m-0'>
                <h4 className='m-0'>Dikkate Değer Diğer Metrikler</h4>
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
      </Row>
    </div>
  )
}

export default General
