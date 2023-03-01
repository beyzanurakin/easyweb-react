import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ScrollSpy from 'react-ui-scrollspy';
import {
  ListGroup,
  ListGroupItem,
  Badge,
  ListGroupItemHeading,
  ListGroupItemText,
  List,
  
  Card,
  CardBody,
  CardText,
  CardHeader,
} from 'reactstrap';
import { FaChevronRight, FaRegTimesCircle } from 'react-icons/fa';
import { RiErrorWarningLine, RiCloseCircleLine } from 'react-icons/ri';

function All() {
  return (
    <Fragment>
      <Container>
        <Row>
          <Col sm='3'>
            <ListGroup>
              <ListGroupItem className='d-flex justify-content-between align-items-center'>
                <a href={'#section-1'}>
                  <div data-to-scrollspy-id='section-1'>
                    Web Sitesi Güvenliği
                  </div>
                </a>
                <Badge color='primary' pill>
                  4
                </Badge>
              </ListGroupItem>
              <ListGroupItem className='d-flex justify-content-between align-items-center'>
                <p className='fw-bold fs-4'> 2) </p>
                <div className=''>
                  <div data-to-scrollspy-id='section-2'>Crawling</div>
                </div>

                <FaChevronRight />
              </ListGroupItem>
              <ListGroupItem
                className='text-center'
                action
                href='#section-2'
                data-to-scrollspy-id='section-2'
                tag='a'>
                <ListGroupItemHeading>Emekleme</ListGroupItemHeading>
                <ListGroupItemText>
                  <RiCloseCircleLine size='25px' color='red' />
                  <RiErrorWarningLine size='25px' color='#FBB347' />
                </ListGroupItemText>
              </ListGroupItem>
            </ListGroup>
            <List type='unstyled'>
              <li
                className='text-center my-2'
                action
                href='#section-2'
                data-to-scrollspy-id='section-2'
                tag='a'>
                <Card className='d-flex'>
                  <CardBody className='d-flex justify-content-between align-items-center'>
                    <div>2)</div>
                    <div className='text-center'>
                      <h5 className='fw-bold'>Emekleme</h5>
                      <RiCloseCircleLine size='25px' color='red' />
                      <RiErrorWarningLine size='25px' color='#FBB347' />
                    </div>
                    <div>
                      <FaChevronRight />
                    </div>
                  </CardBody>
                </Card>
              </li>
              <li>Consectetur adipiscing elit</li>
              <li>Integer molestie lorem at massa</li>
              <li>Facilisis in pretium nisl aliquet</li>

              <li>Faucibus porta lacus fringilla vel</li>
              <li>Aenean sit amet erat nunc</li>
              <li>Eget porttitor lorem</li>
            </List>
          </Col>

          <Col sm='9'>
            <ScrollSpy>
              <div id='section-1'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                dapibus facilisis purus vitae commodo. Morbi congue est eu felis
                lobortis varius. Integer ut dui a velit consequat hendrerit.
                Mauris aliquam aliquam arcu, quis varius metus ornare ut. Aenean
                ut leo ut diam viverra viverra ut eu lorem. Donec tempor
                pulvinar tellus in condimentum. Vivamus fringilla ullamcorper
                sollicitudin. In nec nibh erat. Suspendisse blandit, justo
                condimentum varius dapibus, tortor augue convallis nibh, in
                lobortis dolor diam nec magna. Proin vitae gravida lorem.
                Vestibulum porta mollis sagittis. Curabitur ornare gravida eros
                in vehicula. Nam feugiat laoreet arcu, eget sagittis ante
                tincidunt nec. Curabitur nisi metus, efficitur in mauris et,
                ultrices bibendum nulla. Pellentesque ut posuere sem, sit amet
                ullamcorper orci. Nullam vel porta magna. Sed eu ante pretium,
                vestibulum massa ac, laoreet arcu. Mauris nec elit lorem. In
                venenatis magna sit amet luctus consequat. In sed dui sit amet
                lectus ultricies lobortis. Curabitur lobortis enim quam, eget
                auctor leo mattis ut. Vestibulum quis leo tellus. Vivamus ut
                interdum dolor, at gravida ligula. Ut augue metus, semper a
                luctus eget, aliquet id magna. Sed a dictum libero. Fusce
                condimentum dapibus ipsum, in mattis justo porta vel. Nunc in
                facilisis sapien. Fusce et ornare enim. In leo lectus, mattis
                vel molestie ac, volutpat ac sem. Duis pellentesque lectus sed
                nulla varius sollicitudin. Proin condimentum ac augue in
                iaculis. Donec egestas massa dolor, eget egestas turpis rutrum
                eu. Nullam at lorem justo. Sed tristique eros vitae mi
                scelerisque, vel pulvinar purus semper. Donec in sapien id felis
                pharetra tempor vel vitae est. Ut euismod nunc nulla, in congue
                lorem tincidunt quis. Quisque quis vehicula magna. Ut blandit
                pulvinar lorem, quis pharetra justo congue quis. Integer tempor
                arcu vitae metus posuere, at facilisis lorem hendrerit. Cras
                maximus ligula ac erat finibus, nec dictum lacus lobortis. Nulla
                facilisi. Cras in sem sed nunc consectetur sagittis. Aenean
                faucibus rutrum imperdiet. Quisque scelerisque ultrices sem nec
                rutrum. Morbi sit amet semper nunc. Phasellus nibh ligula,
                maximus sit amet massa vitae, semper aliquet turpis. Integer
                risus elit, consequat non varius vel, feugiat non mi. Maecenas
                vitae velit efficitur quam volutpat faucibus. Cras vel vehicula
                sapien, quis condimentum odio. Suspendisse eget lobortis elit,
                eget pellentesque libero. Vestibulum ante ipsum primis in
                faucibus orci luctus et ultrices posuere cubilia curae; Sed
                tempor commodo libero id imperdiet. Integer laoreet ex odio, ut
                facilisis quam finibus nec. Mauris sed gravida nisi. Duis
                efficitur magna in ante tempor maximus.
              </div>
              <div id='section-2'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                dapibus facilisis purus vitae commodo. Morbi congue est eu felis
                lobortis varius. Integer ut dui a velit consequat hendrerit.
                Mauris aliquam aliquam arcu, quis varius metus ornare ut. Aenean
                ut leo ut diam viverra viverra ut eu lorem. Donec tempor
                pulvinar tellus in condimentum. Vivamus fringilla ullamcorper
                sollicitudin. In nec nibh erat. Suspendisse blandit, justo
                condimentum varius dapibus, tortor augue convallis nibh, in
                lobortis dolor diam nec magna. Proin vitae gravida lorem.
                Vestibulum porta mollis sagittis. Curabitur ornare gravida eros
                in vehicula. Nam feugiat laoreet arcu, eget sagittis ante
                tincidunt nec. Curabitur nisi metus, efficitur in mauris et,
                ultrices bibendum nulla. Pellentesque ut posuere sem, sit amet
                ullamcorper orci. Nullam vel porta magna. Sed eu ante pretium,
                vestibulum massa ac, laoreet arcu. Mauris nec elit lorem. In
                venenatis magna sit amet luctus consequat. In sed dui sit amet
                lectus ultricies lobortis. Curabitur lobortis enim quam, eget
                auctor leo mattis ut. Vestibulum quis leo tellus. Vivamus ut
                interdum dolor, at gravida ligula. Ut augue metus, semper a
                luctus eget, aliquet id magna. Sed a dictum libero. Fusce
                condimentum dapibus ipsum, in mattis justo porta vel. Nunc in
                facilisis sapien. Fusce et ornare enim. In leo lectus, mattis
                vel molestie ac, volutpat ac sem. Duis pellentesque lectus sed
                nulla varius sollicitudin. Proin condimentum ac augue in
                iaculis. Donec egestas massa dolor, eget egestas turpis rutrum
                eu. Nullam at lorem justo. Sed tristique eros vitae mi
                scelerisque, vel pulvinar purus semper. Donec in sapien id felis
                pharetra tempor vel vitae est. Ut euismod nunc nulla, in congue
                lorem tincidunt quis. Quisque quis vehicula magna. Ut blandit
                pulvinar lorem, quis pharetra justo congue quis. Integer tempor
                arcu vitae metus posuere, at facilisis lorem hendrerit. Cras
                maximus ligula ac erat finibus, nec dictum lacus lobortis. Nulla
                facilisi. Cras in sem sed nunc consectetur sagittis. Aenean
                faucibus rutrum imperdiet. Quisque scelerisque ultrices sem nec
                rutrum. Morbi sit amet semper nunc. Phasellus nibh ligula,
                maximus sit amet massa vitae, semper aliquet turpis. Integer
                risus elit, consequat non varius vel, feugiat non mi. Maecenas
                vitae velit efficitur quam volutpat faucibus. Cras vel vehicula
                sapien, quis condimentum odio. Suspendisse eget lobortis elit,
                eget pellentesque libero. Vestibulum ante ipsum primis in
                faucibus orci luctus et ultrices posuere cubilia curae; Sed
                tempor commodo libero id imperdiet. Integer laoreet ex odio, ut
                facilisis quam finibus nec. Mauris sed gravida nisi. Duis
                efficitur magna in ante tempor maximus.
              </div>
            </ScrollSpy>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default All;
