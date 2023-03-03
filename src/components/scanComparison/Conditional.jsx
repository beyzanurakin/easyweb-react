import React from 'react';
import DataTable from 'react-data-table-component';
import { ListGroup, ListGroupItem } from 'reactstrap';

export const Rows = () => (
  <ListGroup>
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Morbi leo risus</ListGroupItem>
    <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup>
);

export default {
  title: 'Conditional Rows/Rows',
  component: Rows,
};
