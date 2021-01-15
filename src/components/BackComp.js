import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Button } from "reactstrap";

export default function BackComp() {
  return (
    <Row>
      <Col className='mb-3'>
        <Link to={'/'}>
          <Button color="warning" >
            Back
          </Button>
        </Link>
      </Col>
    </Row>
  );
}
