import React from "react";
import { Container, Col, Row } from "react-bootstrap";

function TodoList() {
  return (
    <Container>
      <Container className="mt-5 ">
        <Container as={Row} className="m-auto text-center">
          <Col sm={12} md={4}>
            <span className="alert alert-danger p-1">Por Realizar</span>
            
          </Col>
          <Col sm={12}  md={4}>
            {" "}
            <span className="alert alert-warning p-1">Realizando</span>
          </Col>
          <Col sm={12}  md={4}>
            <span className="alert alert-success p-1">Realizando</span>
          </Col>
        </Container>
      </Container>
    </Container>
  );
}

export default TodoList;
