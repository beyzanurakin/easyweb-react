import React from 'react'
import { Row, Col, Card, CardBody, CardTitle, Table } from 'reactstrap'

function General() {
  return (
    <div>
      <Row className='match-height gy-4'>
        <Col sm='4'>
          {' '}
          <Card>
            {' '}
            <CardBody></CardBody>
          </Card>
        </Col>
        <Col sm='4'>
          {' '}
          <Card>
            {' '}
            <CardBody></CardBody>
          </Card>
        </Col>
        <Col sm='4'>
          {' '}
          <Card>
            {' '}
            <CardBody></CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default General
