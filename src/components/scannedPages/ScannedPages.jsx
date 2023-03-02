import React from 'react';
import DataTable from 'react-data-table-component';
import { BiAperture } from 'react-icons/bi';

import {
  Card,
  CardBody,
  CardText,
  Row,
  Col,
  NavLink,
  Nav,
  ButtonGroup,
  NavItem,
  Table,
} from 'reactstrap';
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
          <a href=''>{data.external_3xx_referring}</a>
        </td>
      </tr>
    </tbody>
  </Table>
);

const columns = [
  {
    name: 'URL(500)',
    width: '40%',
    textAlign: 'start',
    cell: (row) => (
      <td className='text-start'>
        <BiAperture size='24px' color='blue' />
        <span className='ms-3 fs-5'>{row.url}</span>
      </td>
    ),
  },
  {
    name: 'YÖNLENDİRİLEN SAYFALAR',
    width: '10',
    cell: (row) => <td>{row.referring_pages}</td>,
  },
  {
    name: 'SORUNLAR',
    width: '10',
    cell: (row) => <td>{row.issues}</td>,
  },
  {
    name: 'URL PROTOKOLÜ',
    width: '10',
    cell: (row) => <td>{row.protocol}</td>,
  },
  {
    name: 'SORUNLAR',
    width: '10',
    cell: (row) => <td>{row.status_code}</td>,
  },
];
const customStyles = {
  rows: {
    style: {},
  },
  headCells: {
    style: {
      paddingLeft: '8px', // override the cell padding for head cells
      paddingRight: '8px',
    },
  },
};

const data = [
  {
    url: 'http://twitter.com',
    referring_pages: 2,
    issues: 19,
    protocol: 'No',
    status_code: 200,
    h1_error: '2023 Zara Çalışma Şartları | Zara Çalışan Maaş Bilgileri',
    external_3xx_referring: 'https://paratik.net/hakkimizda',
  },
  {
    url: 'https://instagram.com',
    referring_pages: 10,
    issues: 11,
    protocol: 'No',
    status_code: 200,
    h1_error: '2023 Zara Çalışma Şartları | Zara Çalışan Maaş Bilgileri',
    external_3xx_referring: 'https://paratik.net/hakkimizda',
  },
  {
    url: 'https://whatsapp.com',
    referring_pages: 6,
    issues: 17,
    protocol: 'No',
    status_code: 200,
    h1_error: '2023 Zara Çalışma Şartları | Zara Çalışan Maaş Bilgileri',
    external_3xx_referring: 'https://paratik.net/hakkimizda',
  },
  {
    url: 'https://guardian.co.uk',
    referring_pages: 9,
    issues: 14,
    protocol: 'No',
    status_code: 200,
    h1_error: '2023 Zara Çalışma Şartları | Zara Çalışan Maaş Bilgileri',
    external_3xx_referring: 'https://paratik.net/hakkimizda',
  },
  {
    url: 'https://whatsapp.com',
    referring_pages: 6,
    issues: 11,
    protocol: 'No',
    status_code: 200,
    h1_error: '2023 Zara Çalışma Şartları | Zara Çalışan Maaş Bilgileri',
    external_3xx_referring: 'https://paratik.net/hakkimizda',
  },
];

function ScannedPages() {
  return (
    <div>
      <Row className='match-height my-4'>
        <Col sm='12'>
          <ButtonGroup>
            <Nav pills>
              <NavItem>
                <NavLink active href='#'>
                  Tümü
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#'>Hatalar</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#'>Uyarılar</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#'>Bildirimler</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#'>Geçilen Kontroller</NavLink>
              </NavItem>
            </Nav>
          </ButtonGroup>
        </Col>
      </Row>

      <Card>
        <DataTable
          columns={columns}
          data={data}
          expandableRows
          expandableRowsComponent={ExpandedComponent}
          customStyles={customStyles}
          highlightOnHover
          pointerOnHover
        />
      </Card>
    </div>
  );
}

export default ScannedPages;
