import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="mt-5">
      <Container>
        <Row>
          <Col className="text-center py-3">
            <p>&copy; 2024 Weather Outfit Recommender. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
