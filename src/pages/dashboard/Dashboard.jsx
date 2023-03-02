import React, { useState, useEffect } from 'react';
import {
  Nav,
  NavItem,
  Container,
  Row,
  Col,
  TabContent,
} from 'reactstrap';
import { Outlet, NavLink as Link} from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';

function Dashboard() {
  const [active, setActive] = useState('1');

  const [display, setDisplay] = useState(false);

  useEffect(() => {
    setTimeout(() => setDisplay(true), 2);
  }, []);


  if (!display) {
    return <></>;
  }
  return (
    <div>
      <Scrollbars style={{ width: '80vw', height: '100vh' }}>
        <Container className='my-3'>
          <Row className='match-height gy-4'>
            <Col sm='12'>
             
                <Nav pills>
                  <NavItem>
                    <Link
                      to='/overview'
                      active={active === '1'}
                      className='nav-link'>
                      Genel Bakış
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link
                      to='/issue-report'
                      active={active === '1'}
                      className='nav-link'>
                      Sorun Raporu
                    </Link>
                  </NavItem>

                  <NavItem>
                    <Link
                      to='/scanned-pages'
                      active={active === '1'}
                      className='nav-link'>
                      Taranan Sayfalar
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link
                      to='/scan-comparison'
                      active={active === '1'}
                      className='nav-link'>
                      Taranan Sayfalar
                    </Link>
                  </NavItem>
                </Nav>
             
            </Col>
          </Row>
        </Container>
        <Container>
          <TabContent className='py-50' activeTab={active}>
            <Outlet />
          </TabContent>
        </Container>
      </Scrollbars>
    </div>
  );
}

export default Dashboard;
