import React, { useState } from "react";
import { Form, Col, Row, Modal, Button } from "react-bootstrap";

function CreateTodo() {
  //Hooks modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [nameTodos, setNameTodos] = useState();
  const [prioridadTodos, setPrioridadTodos] = useState();
  const [estadoTodos, setEstadoTodos] = useState();
  const [vencimientoTodos, setVencimientoTodos] = useState();

  const addTodo = (e) => {
    e.preventDefautl();

  };
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
          <Form
            onSubmit={(e) => {
              addTodo(e);
            }}
          >
            <Form.Group
              as={Row}
              controlId="formPlaintextPassword"
              className="d-flex justify-content-center"
            >
              <Form.File id="imagen" label="Inserte una imagen" />
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
                  onChange={(e) => {
                    setNameTodos(e.target.value);
                    console.log(nameTodos);
                  }}
                  name="name"
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
                <Form.Control
                  as="select"
                  defaultValue="Seleccionar..."
                  onChange={(e) => {
                    setPrioridadTodos(e.target.value);
                    console.log(prioridadTodos);
                  }}
                  name="prioridad"
                >
                  <option>Seleccionar...</option>
                  <option value="important">Importante</option>
                  <option value="urgent">Urgente</option>
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
                <Form.Control
                  as="select"
                  defaultValue="Seleccionar..."
                  onChange={(e) => {
                    setEstadoTodos(e.target.value);
                    console.log(nameTodos);
                  }}
                  name="estado"
                >
                  <option>Seleccionar...</option>
                  <option value="todo">Por realizar </option>
                  <option value="doing">Realizando </option>
                  <option value="done">Realizada </option>
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
                  onChange={(e) => {
                    setVencimientoTodos(e.target.value);
                  }}
                  name="vencimiento"
                />
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateTodo;
