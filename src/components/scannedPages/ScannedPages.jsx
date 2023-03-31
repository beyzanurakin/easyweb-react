import React, { Fragment, useState } from 'react'
import DataTable from 'react-data-table-component'
import { BiAperture } from 'react-icons/bi'
import { NavLink as Link } from 'react-router-dom'

import ReactPaginate from 'react-paginate'

import {
  Card,
  CardBody,
  Row,
  Col,
  Nav,
  ButtonGroup,
  NavItem,
  Table,
} from 'reactstrap'

const ExpandedComponent = ({ data }) => (
  <Table striped bordered className='p-3'>
    <thead>
      <tr>
        <th>Genel tanım ve öncelik</th>
        <th>Detaylar</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Özdeş Başlık ve H1 etiketleri</td>
        <td>{data.h1_error}</td>
      </tr>
      <tr>
        <td>3XX yönlendirme sayfalarına dahili bağlantılar</td>
        <td>
          <a href='/'>{data.external_3xx_referring}</a>
        </td>
      </tr>
    </tbody>
  </Table>
)

const columns = [
  {
    name: 'URL(500)',
    width: '40%',
    textAlign: 'start',

    cell: (row) => (
      <td className='text-start'>
        <BiAperture size='24px' color='#2B66BD' />
        <span data-tag='allowRowEvents' className='ms-3 fs-5'>
          {row.url}
        </span>
      </td>
    ),
  },
  {
    name: 'YÖNLENDİRİLEN SAYFALAR',
    width: '10',
    cell: (row) => <td data-tag='allowRowEvents'>{row.referring_pages}</td>,
  },
  {
    name: 'SORUNLAR',
    width: '10',
    cell: (row) => <td data-tag='allowRowEvents'>{row.issues}</td>,
  },
  {
    name: 'URL PROTOKOLÜ',
    width: '10',
    cell: (row) => <td data-tag='allowRowEvents'>{row.protocol}</td>,
  },
  {
    name: 'SORUNLAR',
    width: '10',
    cell: (row) => <td data-tag='allowRowEvents'>{row.status_code}</td>,
  },
]
const customStyles = {
  tableWrapper: {
    style: {
      display: 'table',
    },
  },
  responsiveWrapper: {
    style: {
      border: '1px solid #DBDADE',
      borderRadius: '4px 4px 0px 0px',
    },
  },
  cells: {
    style: {
      padding: '12px',
      fontSize: '13px', // override the cell padding for head cells
    },
  },
  headCells: {
    style: {
      padding: '12px', // override the cell padding for head cells
      fontSize: '13px',
      backgroundColor: '#DBDADE',
    },
  },
}

const data = [
  {
    url: 'https://www.skyscanner.fr/',
    referring_pages: 2,
    issues: 19,
    protocol: 'No',
    status_code: 200,
    h1_error: '2023 Zara Çalışma Şartları | Zara Çalışan Maaş Bilgileri',
    external_3xx_referring: 'https://paratik.net/hakkimizda',
  },
  {
    url: 'https://www.skyscanner.fr/vols',
    referring_pages: 10,
    issues: 11,
    protocol: 'No',
    status_code: 200,
    h1_error: '2023 Zara Çalışma Şartları | Zara Çalışan Maaş Bilgileri',
    external_3xx_referring: 'https://paratik.net/hakkimizda',
  },
  {
    url: 'https://www.skyscanner.fr/cartevols/vols-tous-pays',
    referring_pages: 6,
    issues: 17,
    protocol: 'No',
    status_code: 200,
    h1_error: '2023 Zara Çalışma Şartları | Zara Çalışan Maaş Bilgileri',
    external_3xx_referring: 'https://paratik.net/hakkimizda',
  },
  {
    url: 'https://www.skyscanner.fr/cartevols/vols-toutes-villes',
    referring_pages: 9,
    issues: 14,
    protocol: 'No',
    status_code: 200,
    h1_error: '2023 Zara Çalışma Şartları | Zara Çalışan Maaş Bilgileri',
    external_3xx_referring: 'https://paratik.net/hakkimizda',
  },
  {
    url: 'https://www.skyscanner.fr/cartevols',
    referring_pages: 6,
    issues: 11,
    protocol: 'No',
    status_code: 200,
    h1_error: '2023 Zara Çalışma Şartları | Zara Çalışan Maaş Bilgileri',
    external_3xx_referring: 'https://paratik.net/hakkimizda',
  },
]

function ScannedPages() {
  const [active, setActive] = useState('1')

  return (
    <Fragment>
      <Row className='match-height'>
        <Col sm='12'>
          <ButtonGroup>
            <Card>
              <CardBody className='py-2 px-2'>
                <Nav pills>
                  <NavItem>
                    <Link
                      to='/scanned-pages/all'
                      active={active === '1'}
                      className='nav-link'
                    >
                      Tümü
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link
                      to='/scanned-pages/errors'
                      active={active === '1'}
                      className='nav-link'
                    >
                      Hatalar
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link
                      to='/scanned-pages/warnings'
                      active={active === '1'}
                      className='nav-link'
                    >
                      Uyarılar
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link
                      to='/scanned-pages/notifys'
                      active={active === '1'}
                      className='nav-link'
                    >
                      Bildirimler
                    </Link>
                  </NavItem>
                </Nav>
              </CardBody>
            </Card>
          </ButtonGroup>
        </Col>
      </Row>
      <Row className='match-height my-3'>
        <Col sm='12'>
          <Card>
            <CardBody>
              <DataTable
                fixedHeader
                columns={columns}
                data={data}
                expandableRows
                expandOnRowClicked='true'
                expandableRowsComponent={ExpandedComponent}
                customStyles={customStyles}
                highlightOnHover
                expandableRowsHideExpander
              />
            </CardBody>
            <div className='me-4 d-flex justify-content-end'>
              <ReactPaginate
                nextLabel='>'
                pageCount={10}
                breakLabel='...'
                previousLabel='<'
                pageRangeDisplayed={5}
                marginPagesDisplayed={2}
                activeClassName='active'
                pageClassName='page-item'
                breakClassName='page-item'
                pageLinkClassName='page-link'
                nextLinkClassName='page-link'
                breakLinkClassName='page-link'
                previousLinkClassName='page-link'
                containerClassName='pagination react-paginate'
              />
            </div>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default ScannedPages
