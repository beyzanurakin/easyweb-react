import React, { useState, useEffect } from 'react'
import { Nav, NavItem, Container, Row, Col, Card, CardBody } from 'reactstrap'
import { Outlet, NavLink as Link } from 'react-router-dom'

function Dashboard() {
  const [active, setActive] = useState('1')

  const [display, setDisplay] = useState(false)

  useEffect(() => {
    setTimeout(() => setDisplay(true), 2)
  }, [])

  if (!display) {
    return <></>
  }
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
                      to='/seo/overview'
                      active={active === '1'}
                      className='nav-link'
                    >
                      Genel Bakış
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link
                      to='/seo/issue-report'
                      active={active === '1'}
                      className='nav-link'
                    >
                      Sorun Raporu
                    </Link>
                  </NavItem>

                  <NavItem>
                    <Link
                      to='/seo/scanned-pages'
                      active={active === '1'}
                      className='nav-link'
                    >
                      Taranan Sayfalar
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link
                      to='/seo/scan-comparison'
                      active={active === '1'}
                      className='nav-link'
                    >
                      Tarama Karşılaştırması
                    </Link>
                  </NavItem>
                </Nav>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container fluid className='mx-0 w-100 pb-5'>
        <Outlet />
      </Container>
    </div>
  )
}

export default Dashboard
