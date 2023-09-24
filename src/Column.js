import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
function Column() {
  return (
    <Container className='middle-container'>
      <Row>

        <Col className='first-column'>
          <div className='center-content'>
           <strong> THIS IS SOME CONTENT ALIGNED IN THE CENTER
            <div className='lower-content'>
                   VERTICALLY AND HORIZONTALLY
                   </div> </strong> 
                   </div>
                    </Col>
        <Col></Col>

      </Row>
    </Container>

  );
}


export default Column;
