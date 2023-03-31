import React, { useState } from 'react'
import { Nav, NavItem, Container, Row, Col, Card, CardBody } from 'reactstrap'
import { Outlet, NavLink as Link } from 'react-router-dom'

function Optimization() {
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
                      to='/optimization/general'
                      active={active === '1'}
                      className='nav-link'
                    >
                      Genel
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link
                      to='/optimization/performance'
                      active={active === '1'}
                      className='nav-link'
                    >
                      Performans
                    </Link>
                  </NavItem>

                  <NavItem>
                    <Link
                      to='/optimization/accessibility'
                      active={active === '1'}
                      className='nav-link'
                    >
                      Erişebilirlik
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link
                      to='/optimization/best-apps'
                      active={active === '1'}
                      className='nav-link'
                    >
                      En iyi Uygulamalar
                    </Link>
                  </NavItem>
                </Nav>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container fluid className='mx-0 w-100'>
        <Outlet />
      </Container>
    </div>
  )
}

export default Optimization
