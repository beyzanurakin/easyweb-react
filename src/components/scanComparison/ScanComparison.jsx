import React, { Fragment } from 'react';
import { Card, CardBody, Table } from 'reactstrap';
import RadialBar from '../../charts/RadialBar';
import {
  TbMedicineSyrup,
  TbShield,
  TbWifi,
  TbFileSearch,
} from 'react-icons/tb';

function ScanComparison() {
  return (
    <Fragment>
      <Card>
        <CardBody className='py-3 px-3'>
          <Card className='border-secondary '>
            <Table>
              <thead style={{ backgroundColor: '#F3F3F3' }}>
                <tr>
                  <th className='w-50'>
                    <TbMedicineSyrup size='24px' />
                    Denetim sonuçları
                  </th>
                  <th className='w-25'>20 şubat 2023 13.55</th>
                  <th className='w-25'>22 şubat 2023 13.55</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <TbMedicineSyrup size='24px' /> Sağlık Puanı
                  </td>
                  <td>
                    <RadialBar />
                  </td>
                  <td>
                    <RadialBar />
                  </td>
                </tr>
                <tr>
                  <td>
                    <TbMedicineSyrup size='24px' />
                    Sayfalar Tarandı
                  </td>
                  <td>438</td>
                  <td>7</td>
                </tr>
                <tr>
                  <td>
                    {' '}
                    <TbMedicineSyrup size='24px' />
                    Sayfalar Tarandı
                  </td>
                  <td>438</td>
                  <td>7</td>
                </tr>
              </tbody>
            </Table>
          </Card>
          <Card>
            <Table>
              <thead style={{ backgroundColor: '#F3F3F3' }}>
                <tr>
                  <th className='w-50'>
                    {' '}
                    <TbShield size='24px' /> Web Sitesi Güvenliği
                  </th>
                  <th className='w-25'></th>
                  <th className='w-25'></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <TbShield size='24px' /> Sağlık Puanı
                  </td>
                  <td>438</td>
                  <td>7</td>
                </tr>
                <tr>
                  <td>
                    <TbShield size='24px' /> Sayfalar Tarandı
                  </td>
                  <td>438</td>
                  <td>7</td>
                </tr>
                <tr>
                  <td>
                    <TbShield size='24px' /> Sayfalar Tarandı
                  </td>
                  <td>438</td>
                  <td>7</td>
                </tr>
              </tbody>
            </Table>
          </Card>
          <Card>
            <Table>
              <thead style={{ backgroundColor: '#F3F3F3' }}>
                <tr>
                  <th className='w-50'>
                    <TbFileSearch size='24px' /> Crawling
                  </th>
                  <th className='w-25'></th>
                  <th className='w-25'></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <TbFileSearch size='24px' /> Sağlık Puanı
                  </td>
                  <td>438</td>
                  <td>7</td>
                </tr>
                <tr>
                  <td>
                    <TbFileSearch size='24px' /> Sayfalar Tarandı
                  </td>
                  <td>438</td>
                  <td>7</td>
                </tr>
                <tr>
                  <td>
                    <TbFileSearch size='24px' /> Sayfalar Tarandı
                  </td>
                  <td>438</td>
                  <td>7</td>
                </tr>
              </tbody>
            </Table>
          </Card>
          <Card>
            <Table>
              <thead style={{ backgroundColor: '#F3F3F3' }}>
                <tr>
                  <th className='w-50'>
                    <TbWifi size='24px' /> HTTP Durum Kodu
                  </th>
                  <th className='w-25'></th>
                  <th className='w-25'></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <TbWifi size='24px' /> Sağlık Puanı
                  </td>
                  <td>438</td>
                  <td>7</td>
                </tr>
                <tr>
                  <td>
                    <TbWifi size='24px' /> Sayfalar Tarandı
                  </td>
                  <td>438</td>
                  <td>7</td>
                </tr>
                <tr>
                  <td>
                    <TbWifi size='24px' /> Sayfalar Tarandı
                  </td>
                  <td>438</td>
                  <td>7</td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </CardBody>
      </Card>
    </Fragment>
  );
}

export default ScanComparison;
