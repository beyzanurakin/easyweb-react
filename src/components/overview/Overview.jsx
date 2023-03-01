import React from 'react';
import { Row, Col, Card, CardBody, CardTitle } from 'reactstrap';
import {
  LineChart,
  PieChart,
  AreaChart,
  BarChart,
  PillChart,
  StackedBar,
  ColumnChart,
} from '../../charts';
import { BsFillCircleFill } from 'react-icons/bs';

function Overview() {
  return (
    <div>
      <Row className='match-height gy-4'>
        <Col sm='4'>
          <Card>
            <CardBody>
              <CardTitle>
                <h5>Line Chart</h5>
              </CardTitle>
              <LineChart />
            </CardBody>
          </Card>
        </Col>
        <Col sm='4'>
          <Card>
            <CardBody>
              <CardTitle>
                <h5>Pie Chart</h5>
              </CardTitle>
              <PieChart />
            </CardBody>
          </Card>
        </Col>
        <Col sm='4'>
          <Card>
            <CardBody>
              <CardTitle>
                <h5>Area Chart</h5>
              </CardTitle>
              <AreaChart />
            </CardBody>
          </Card>
        </Col>
        <Col sm='4'>
          <Card>
            <CardBody>
              <CardTitle>
                <h5>Bar Chart</h5>
              </CardTitle>
              <BarChart />
            </CardBody>
          </Card>
        </Col>
        <Col sm='4'>
          <Card>
            <CardBody>
              <CardTitle>
                <h5>Pill Chart</h5>
              </CardTitle>
              <PillChart />
            </CardBody>
          </Card>
        </Col>
        <Col sm='4'>
          <Card>
            <CardBody>
              <CardTitle className='m-0'>
                <h5 className='m-0'>Temel Web Verileri</h5>
              </CardTitle>
              <div className='font-small-2 '>
                Önemli Web Verileri Değerlendirmesi: Başarılı Oldu
              </div>
              <StackedBar
                title='En Büyük İçerikli Boya (LCP)'
                values={[85, 3, 11]}
              />
              <StackedBar
                title='İlk Giriş Gecikmesi (FID)'
                values={[80, 15, 5]}
              />
              <StackedBar
                title='Kümülatif Düzen Kayması (CLS)'
                values={[70, 10, 20]}
              />
              <span>
                <BsFillCircleFill color='#14A44D' />
                Harika
              </span>
              <span>
                <BsFillCircleFill color='#E4A11B' />
                İyileştirme Gerekiyor
              </span>
              <span>
                <BsFillCircleFill color='#DC4C64' />
                Kötü
              </span>
            </CardBody>
          </Card>
        </Col>
        <Col sm='4'>
          <Card>
            <CardBody>
              <CardTitle>
                <h5>Column Chart</h5>
              </CardTitle>
              <ColumnChart />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Overview;
