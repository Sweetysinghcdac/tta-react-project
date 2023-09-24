import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Header() {
  return (
    <header>
      <Container >
      <Row className='head'>
        <Col className='column' xs={4}> <strong>LOREM IPSUM</strong></Col>
        <Col className='link'><strong> <a> LINK1</a></strong></Col>
      </Row>

      </Container>
    </header>
  );
}

export default Header;
