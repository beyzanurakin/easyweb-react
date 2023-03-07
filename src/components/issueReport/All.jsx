import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ScrollSpy from 'react-ui-scrollspy';
import {
  List,
  Card,
  CardBody,
  Table,
  UncontrolledCollapse,
  CardTitle,
  CardHeader,
  Badge,
} from 'reactstrap';
import { FaChevronRight } from 'react-icons/fa';
import {
  RiErrorWarningLine,
  RiCloseCircleLine,
  RiCheckboxCircleLine,
} from 'react-icons/ri';

function All() {
  return (
    <Fragment>
      <Container>
        <Row>
          <Col sm='4'>
            <List type='unstyled'>
              <a href='#section-2' data-to-scrollspy-id='section-2'>
                <li className='mb-2'>
                  <Card>
                    <CardBody className='p-3'>
                      <Row className='align-items-center'>
                        <Col sm='2'>
                          <h5>1)</h5>
                        </Col>
                        <Col sm='8' className='text-center'>
                          <h5 className='fw-bold mb-0'>Web Sitesi Güvenliği</h5>
                          <RiCloseCircleLine size='25px' color='red' /> 123
                          <RiErrorWarningLine size='25px' color='#FBB347' /> 12
                        </Col>
                        <Col sm='2'>
                          <FaChevronRight />
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </li>
              </a>
              <a href='#section-2' data-to-scrollspy-id='section-2'>
                <li className='mb-2'>
                  <Card>
                    <CardBody className='p-3'>
                      <Row className='align-items-center'>
                        <Col sm='2'>
                          <h5>2)</h5>
                        </Col>
                        <Col sm='8' className='text-center'>
                          <h5 className='fw-bold mb-0'>Crawling</h5>
                          <RiCloseCircleLine size='25px' color='red' />
                          44
                          <RiErrorWarningLine size='25px' color='#FBB347' /> 12
                        </Col>
                        <Col sm='2'>
                          <FaChevronRight />
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </li>
              </a>
              <a href='#section-2' data-to-scrollspy-id='section-2'>
                <li className='mb-2'>
                  <Card>
                    <CardBody className='p-3'>
                      <Row className='align-items-center'>
                        <Col sm='2'>
                          <h5>3)</h5>
                        </Col>
                        <Col sm='8' className='text-center'>
                          <h5 className='fw-bold mb-0'>HTTP Durum Kodu</h5>
                          <RiCloseCircleLine size='25px' color='red' />1
                          <RiErrorWarningLine size='25px' color='#FBB347' /> 12
                        </Col>
                        <Col sm='2'>
                          <FaChevronRight />
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </li>
              </a>
              <a href='#section-2' data-to-scrollspy-id='section-2'>
                <li className='mb-2'>
                  <Card>
                    <CardBody className='p-3'>
                      <Row className='align-items-center'>
                        <Col sm='2'>
                          <h5>4)</h5>
                        </Col>
                        <Col sm='8' className='text-center'>
                          <h5 className='fw-bold mb-0'>Duplicate Content</h5>
                          <RiCloseCircleLine size='25px' color='red' /> 0
                          <RiErrorWarningLine size='25px' color='#FBB347' />
                          12
                        </Col>
                        <Col sm='2'>
                          <FaChevronRight />
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </li>
              </a>
            </List>
          </Col>

          <Col sm='8'>
            <ScrollSpy>
              <Card className='mb-3'>
                <CardHeader>
                  <CardTitle tag='h5'>WEB SİTE GÜVENLİĞİ</CardTitle>
                </CardHeader>
                <Table bordered responsive>
                  <thead>
                    <tr>
                      <th className='col-sm-8 text-center'>SORUNLAR</th>
                      <th className='col-sm-2 text-center'>SAYFALAR</th>
                      <th className='col-sm-2 text-center'>ÇÖZÜM</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      color='primary'
                      id='toggler1'
                      style={{
                        marginBottom: '1rem',
                      }}>
                      <td>
                        <RiCheckboxCircleLine size='25px' color='green' />
                        <span className='align-middle fw-bold ms-3'>
                          XML site haritası
                        </span>
                      </td>
                      <td className='text-center'>1</td>
                      <td className='text-center'>2</td>
                    </tr>
                    <UncontrolledCollapse toggler='#toggler1'>
                      <Card>
                        <CardBody>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Nesciunt magni, voluptas debitis similique porro
                          a molestias consequuntur earum odio officiis natus,
                          amet hic, iste sed dignissimos esse fuga! Minus,
                          alias.
                        </CardBody>
                      </Card>
                    </UncontrolledCollapse>
                    <tr
                      color='primary'
                      id='toggler2'
                      style={{
                        marginBottom: '1rem',
                      }}>
                      <td>
                        <RiCheckboxCircleLine size='25px' color='green' />
                        <span className='align-middle fw-bold ms-3'>
                          Outdated security protocol version
                        </span>
                      </td>
                      <td className='text-center'>1</td>
                      <td className='text-center'>2</td>
                    </tr>
                    <UncontrolledCollapse toggler='#toggler2'>
                      <Card>
                        <CardBody>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Nesciunt magni, voluptas debitis similique porro
                          a molestias consequuntur earum odio officiis natus,
                          amet hic, iste sed dignissimos esse fuga! Minus,
                          alias.
                        </CardBody>
                      </Card>
                    </UncontrolledCollapse>
                  </tbody>
                </Table>
              </Card>

              <Card className='mb-3'>
                <CardHeader>
                  <CardTitle tag='h5'>CRAWLING</CardTitle>
                </CardHeader>
                <Table bordered responsive>
                  <thead>
                    <tr>
                      <th className='col-sm-8 text-center'>SORUNLAR</th>
                      <th className='col-sm-2 text-center'>SAYFALAR</th>
                      <th className='col-sm-2 text-center'>ÇÖZÜM</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      color='primary'
                      id='toggler3'
                      style={{
                        marginBottom: '1rem',
                      }}>
                      <td>
                        <RiCheckboxCircleLine size='25px' color='green' />
                        <span className='align-middle fw-bold ms-3'>
                          XML site haritası
                        </span>
                      </td>
                      <td className='text-center'>1</td>
                      <td className='text-center'>2</td>
                    </tr>
                    <tr>
                      <UncontrolledCollapse toggler='#toggler3'>
                        <td>GENEL TANIM VE ÖNCELİK</td>
                        <td>DETAYLAR</td>

                        <tr>
                          <td colSpan='1'>
                            <div className='d-flex align-items-center'>
                              <RiCloseCircleLine size='25px' color='red' />
                              <p className='ms-3 my-auto'>
                                Evde Pipet Paketleme İşi - Ayda 4.
                              </p>
                            </div>
                            <a href='/' className='my-3'>
                              https://finansko.com/evde-pipet-paketleme-isi/
                            </a>
                          </td>
                          <td colSpan='2'>
                            <Badge color='warning'>301</Badge>
                            <a href='/'>https://paratik.net/hakkimizda</a>
                          </td>
                        </tr>
                      </UncontrolledCollapse>
                    </tr>
                  </tbody>
                </Table>
              </Card>
            </ScrollSpy>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default All;
