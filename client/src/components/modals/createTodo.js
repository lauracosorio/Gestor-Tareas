import React, { useState } from "react";
import { Form, Col, Row, Modal, Button } from "react-bootstrap";

function CreateTodo() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="info" className="p-1 mt-3" onClick={handleShow}>
        Añadir
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crear Tarea</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              as={Row}
              controlId="formPlaintextPassword"
              className="d-flex justify-content-center"
            >
              {/* <Form.Label column sm="3">
                    Inserte una imagen
                  </Form.Label> */}
              {/* <Col sm="12"> */}
              <Form.File id="imagen" label="Inserte una imagen" />
              {/* </Col> */}
            </Form.Group>
            <Form.Group
              as={Row}
              controlId="name"
              className="d-flex justify-content-center"
            >
              <Form.Label column sm="4" className="m-0 p-1">
                Nombre de la tarea
              </Form.Label>
              <Col sm="5">
                <Form.Control
                  type="text"
                  placeholder="Sacar al perro"
                  //   value={conocimiento}
                  //   onChange={(e) => setConocimiento(e.target.value)}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              controlId="prioridad"
              className="d-flex justify-content-center"
            >
              <Form.Label column sm="4" className="m-0 p-1">
                Prioridad de la tarea
              </Form.Label>
              <Col sm="5">
                <Form.Control as="select" defaultValue="Seleccionar...">
                  <option>Seleccionar...</option>
                  <option>Importante</option>
                  <option>Urgente</option>
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              controlId="prioridad"
              className="d-flex justify-content-center"
            >
              <Form.Label column sm="4" className="m-0 p-1">
                Estado de la tarea
              </Form.Label>
              <Col sm="5">
                <Form.Control as="select" defaultValue="Seleccionar...">
                  <option>Seleccionar...</option>
                  <option>Por realizar </option>
                  <option>Realizando </option>
                  <option>Realizada </option>
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              controlId="date"
              className="d-flex justify-content-center"
            >
              <Form.Label column sm="4" className="m-0 p-0">
                Fecha de vencimiento
              </Form.Label>
              <Col sm="5">
                <Form.Control
                  type="date"
                  placeholder="Autoevaluacion"
                  //   value={autoevaluacion}
                  //   onChange={(e) => setAutoevaluacion(e.target.value)}
                />
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateTodo;
