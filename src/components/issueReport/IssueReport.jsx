import React, { useState } from 'react';
import {
  Nav,
  NavItem,
  Row,
  Col,
  Card,
  CardBody,
  CardText,
  ButtonGroup,
} from 'reactstrap';
import { Outlet, NavLink as Link } from 'react-router-dom';

function IssueReport() {
  const [active, setActive] = useState('1');

  return (
    <div>
      <Row className='match-height gy-4'>
        <Col sm='4'>
          <Card>
            <CardBody>
              <div className='d-flex justify-content-between align-items-end'>
                <div>
                  <CardText className='fw-bold mb-0'>Hatalar</CardText>
                  <h2 className='fw-bolder mb-0 text-danger'>89</h2>
                </div>
                <div className='fs-4 text-danger'>+41</div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col sm='4'>
          <Card>
            <CardBody>
              <div className='d-flex justify-content-between align-items-end'>
                <div>
                  <CardText className='fw-bold mb-0'>Uyarılar</CardText>
                  <h2 className='fw-bolder mb-0 text-info'>452</h2>
                </div>
                <div className='fs-4 text-danger'>+9</div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col sm='4'>
          <Card>
            <CardBody>
              <div className='d-flex justify-content-between align-items-end'>
                <div>
                  <CardText className='fw-bold mb-0'>Bildirimler</CardText>
                  <h2 className='fw-bolder mb-0 text-success'>56</h2>
                </div>
                <div className='fs-4 text-danger'>+17</div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className='match-height my-4'>
        <Col sm='12'>
          <ButtonGroup>
            <Card>
              <CardBody className='py-2 px-2'>
                <Nav pills>
                  <NavItem>
                    <Link
                      to='/issue-report/all'
                      active={active === '1'}
                      className='nav-link'>
                      Tümü
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link
                      to='/issue-report/errors'
                      active={active === '1'}
                      className='nav-link'>
                      Hatalar
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link
                      to='/issue-report/warnings'
                      active={active === '1'}
                      className='nav-link'>
                      Uyarılar
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link
                      to='/issue-report/notifys'
                      active={active === '1'}
                      className='nav-link'>
                      Bildirimler
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link
                      to='/issue-report/controls'
                      active={active === '1'}
                      className='nav-link'>
                      Geçilen Kontroller
                    </Link>
                  </NavItem>
                </Nav>
              </CardBody>
            </Card>
          </ButtonGroup>
        </Col>
      </Row>
      <Row>
        <Outlet />
      </Row>
    </div>
  );
}

export default IssueReport;
