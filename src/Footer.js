import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
function Footer() {
    return (
      <footer>
        <Container className='foot' >
           <div className='footer-content'>
              <strong>
                THIS IS THE FOOTER CONTENT WHICH IS ALIGNED 
                <div className='footer-lower-content'>LEFT</div>
              </strong>
           </div>
          
        </Container>
      </footer>
    );
  }
  

export default Footer;
