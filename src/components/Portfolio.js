import React from 'react';
import { Card, Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap/Col';
import { propTypes } from 'react-bootstrap/esm/Image';

export default function Portfolio() {
  return (
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 6 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                { }
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
