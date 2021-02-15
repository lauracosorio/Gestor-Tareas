import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Card, Container } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { saveToLocal } from "../functions/localStorage"


function FormSignUp() {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  const Registro = (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:5000/registro`, { name, email, password })
      .then((res) => {
        console.log(res);
        Swal.fire({
          title: "Bievenido!",
          text: "Por favor inicie sesión para poder autenticar los datos",
          icon: "success",
          confirmButtonText: "Ok",
        });
        saveToLocal("token", res.data);
        saveToLocal("email", email)
        saveToLocal("name", name);
        saveToLocal('pass', password)
        history.push("/"); //organizar ruta para que lleve al inicio
      })
      .catch((error) => {
        console.log(error);
        const Swal = require("sweetalert2");
        Swal.fire({
          title: "Error!",
          text: "No se pudo realizar el registro",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };

  const history = useHistory();

  return (
    <Container className="d-flex justify-content-center mt-5">
      <Card style={{ width: "25rem" }} className=" mt-5">
        <Form
          className=" mb-5"
          onSubmit={(e) => {
            Registro(e);
          }}
        >
          <h3 className="mt-5 mb-5 text-center">Registrarse</h3>

          <Form.Group className="ml-5 mr-5" controlId="name">
            <Form.Label>Nombre Completo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre Completo"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="ml-5 mr-5" controlId="email">
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control
              type="email"
              placeholder="ejemplo@email.com"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="ml-5 mr-5 mb-5" controlId="password">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Contraseña"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="ml-5 mr-5 ">
            <Button variant="primary" type="submit" block>
              Registrarse
            </Button>
            <Link to="/" className="mt-4 text-right link">
              <p className="mt-3">Iniciar Sesión</p>
            </Link>
          </Form.Group>
        </Form>
      </Card>
    </Container>
  );
}

export default FormSignUp;
