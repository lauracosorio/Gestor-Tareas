import React from "react";
import { Container } from "react-bootstrap";
import CreateTodo from "./modals/createTodo";

function Todo() {
  return (
    <Container>
      <h1>✔ Lista de Tareas</h1>
      <p className="m-0 p-0">
        Haga click en el botón<strong> Añadir</strong> para crear tareas nuevas{" "}
      </p>
      <p className="m-0 p-0">
        Haga click en una tarea existente para modificarla{" "}
      </p>
      <CreateTodo />
    </Container>
  );
}

export default Todo;
