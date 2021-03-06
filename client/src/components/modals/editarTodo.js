import React, { useState } from "react";
import axios from "axios";
import { Form, Col, Row, Modal, Button } from "react-bootstrap";
import { getFromLocal } from "../../functions/localStorage";

function EditarTodo(data) {
  const [todo, setTodo] = useState(data.data);
  const [imagen, setImagen] = useState(data.imagen);
  const [nombre, setNombre] = useState(todo.nombre);
  const [prioridad, setPrioridad] = useState(todo.prioridad);
  const [estado, setEstado] = useState(todo.estado);
  const [vencimiento, setVencimiento] = useState(todo.vencimiento);
  const fecha = vencimiento.split("T", 5);

  const urlBack = 'http://localhost:5000'

  //headers
  const email = getFromLocal("email");
  const pass = getFromLocal("pass");
  const tokenKey = getFromLocal("token");

  //Hooks modal
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setImagen(todo.imagen);
    setNombre(todo.nombre);
    setPrioridad(todo.prioridad);
    setEstado(todo.estado);
    setVencimiento(todo.vencimiento);
  };

  const close = () => {
    setShow(false);
    setImagen(todo.imagen);
    setNombre(todo.nombre);
    setPrioridad(todo.prioridad);
    setEstado(todo.estado);
    setVencimiento(todo.vencimiento);
  };

  const handleShow = () => setShow(true);

  const editTodo = async () => {
    const url = await sendImg();
    axios
      .put(
        `${urlBack}/editarTodo`,
        {
          imagen: url,
          nombre,
          prioridad,
          estado,
          vencimiento,
          _id: todo._id,
        },
        {
          headers: {
            user_token: `${tokenKey}`,
            autenticacion: `Basic ${email}:${pass}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
      });
    window.location = `/dashboard`;
  };

  const handleImage = async (e) => {
    const {files} = e.target;
    const file=files[0];
    let formData = new FormData();
    formData.append("file", file);
    setImagen(formData);
  }

  const sendImg = async() => {
    try {
      if(imagen!==''){
        const { data } = await axios.post(`${urlBack}/imagen`,imagen,{
          headers: {
            user_token: `${tokenKey}`,
            autenticacion: `Basic ${email}:${pass}`,
          },
        });
      return data;
      }
      return '';
    }catch (error) {
    console.log(error.message)
    }
  };

  return (
    <>
      <button
        type="button"
        data-target={`#id${todo._id}`}
        style={{
          width: "80%",
          backgroundColor: "white",
          borderRadius: "5px",
          borderColor: "#eeeeee",
          height: "80px",
        }}
        onClick={handleShow}
      >
        <img src={todo.imagen} alt={todo.nombre} style={{width:50, display:'block', margin: 'auto'}}/>{" "}
        {todo.nombre} {fecha[0]}
      </button>

      <Modal show={show} onHide={handleClose} id={`id${todo._id}`}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Tarea</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              as={Row}
              controlId="Imagen"
              className="d-flex justify-content-center"
            >
              <Form.File
                id="imagen"
                label="Inserte una imagen"
                onChange={handleImage}
                type="file"
                name="todoImage"
              />
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
                  value={nombre}
                  onChange={(e) => {
                    setNombre(e.target.value);
                  }}
                  name="nombre"
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
                    setPrioridad(e.target.value);
                  }}
                  name="prioridad"
                  value={prioridad}
                >
                  <option>Seleccionar...</option>
                  <option value="Importante">Importante</option>
                  <option value="Urgente">Urgente</option>
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
                    setEstado(e.target.value);
                  }}
                  name="estado"
                  value={estado}
                >
                  <option>Seleccionar...</option>
                  <option value="Por_Realizar">Por realizar </option>
                  <option value="Realizando">Realizando </option>
                  <option value="Realizada">Realizada </option>
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
                  onChange={(e) => {
                    setVencimiento(e.target.value);
                  }}
                  name="vencimiento"
                  value={fecha[0]}
                />
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button
            variant="info"
            onClick={() => {
              close();
              editTodo();
            }}
          >
            Editar Tarea
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditarTodo;
