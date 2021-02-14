import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Col, Row, Table } from "react-bootstrap";
import EditarTodo from "./modals/editarTodo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TodoList() {
  const [data, setData] = useState([
    { nombre: "", prioridad: "", estado: "", vencimiento: "" },
  ]);

  useEffect(() => {
    axios.get(`http://localhost:5000/todos/`).then((res) => {
      setData(res.data);
    });
  }, []);

  const deleteTodo = (_id) => {
    axios.delete(`http://localhost:5000/deleteTodo/${_id}`).then((res) => {
      console.log(res);
    });
    window.location = `/dashboard`;
  };

  return (
    <Container>
      <Container className="mt-5 ">
        <Container as={Row} className="m-auto text-center">
          <Col sm={12} md={4}>
            <p>
              {" "}
              <span className="alert alert-danger p-1">Por Realizar</span>
            </p>
            <Table>
              <tr>
                <th style={{ border: "none" }}>Importante</th>
              </tr>
              {data.map((todo) => {
                return (
                  <>
                    {todo.estado === "Por_Realizar" &&
                    todo.prioridad === "Importante" ? (
                      <tr key={todo._id}>
                        <td
                          style={{ color: "red", border: "none", padding: 3 }}
                        >
                          {" "}
                          <EditarTodo data={todo} />
                          <button
                            style={{
                              backgroundColor: "white",
                              border: "none",
                              height: "40px",
                              margin: 0,
                            }}
                            onClick={() => {
                              deleteTodo(todo._id);
                            }}
                          >
                            ⛔
                          </button>
                        </td>
                      </tr>
                    ) : null}
                  </>
                );
              })}
              <tr>
                <th style={{ border: "none" }}>Urgente</th>
              </tr>
              {data.map((todo) => {
                return (
                  <>
                    {todo.estado === "Por_Realizar" &&
                    todo.prioridad === "Urgente" ? (
                      <tr key={todo._id}>
                        <td
                          style={{ color: "red", border: "none", padding: 3 }}
                        >
                          <EditarTodo data={todo} />
                          <button
                            style={{
                              backgroundColor: "white",
                              border: "none",
                              height: "40px",
                              margin: 0,
                            }}
                            onClick={() => {
                              deleteTodo(todo._id);
                            }}
                          >
                            ⛔
                          </button>
                        </td>
                      </tr>
                    ) : null}
                  </>
                );
              })}
            </Table>
          </Col>
          <Col sm={12} md={4}>
            {" "}
            <p>
              <span className="alert alert-warning p-1">Realizando</span>
            </p>
            <Table>
              <tr>
                <th style={{ border: "none" }}>Importante</th>
              </tr>
              {data.map((todo) => {
                return (
                  <>
                    {todo.estado === "Realizando" &&
                    todo.prioridad === "Importante" ? (
                      <tr key={todo._id}>
                        <td
                          style={{ color: "red", border: "none", padding: 3 }}
                        >
                          <EditarTodo data={todo} />
                          <button
                            style={{
                              backgroundColor: "white",
                              border: "none",
                              height: "40px",
                              margin: 0,
                            }}
                            onClick={() => {
                              deleteTodo(todo._id);
                            }}
                          >
                            ⛔
                          </button>
                        </td>
                      </tr>
                    ) : null}
                  </>
                );
              })}
              <tr>
                <th style={{ border: "none" }}>Urgente</th>
              </tr>
              {data.map((todo) => {
                return (
                  <>
                    {todo.estado === "Realizando" &&
                    todo.prioridad === "Urgente" ? (
                      <tr key={todo._id}>
                        <td
                          style={{ color: "red", border: "none", padding: 3 }}
                        >
                          <EditarTodo data={todo} />
                          <button
                            style={{
                              backgroundColor: "white",
                              border: "none",
                              height: "40px",
                              margin: 0,
                            }}
                            onClick={() => {
                              deleteTodo(todo._id);
                            }}
                          >
                            ⛔
                          </button>
                        </td>
                      </tr>
                    ) : null}
                  </>
                );
              })}
            </Table>
          </Col>
          <Col sm={12} md={4}>
            <p>
              <span className="alert alert-success p-1">Realizada</span>
            </p>
            <Table>
              <tr>
                <th style={{ border: "none" }}>Importante</th>
              </tr>
              {data.map((todo) => {
                return (
                  <>
                    {todo.estado === "Realizada" &&
                    todo.prioridad === "Importante" ? (
                      <tr key={todo._id}>
                        <td
                          style={{ color: "red", border: "none", padding: 3 }}
                        >
                          <EditarTodo data={todo} />{" "}
                          <button
                            style={{
                              backgroundColor: "white",
                              border: "none",

                              height: "40px",
                              margin: 0,
                            }}
                            onClick={() => {
                              deleteTodo(todo._id);
                            }}
                          >
                            ⛔
                          </button>
                        </td>
                      </tr>
                    ) : null}
                  </>
                );
              })}
              <tr>
                <th style={{ border: "none" }}>Urgente</th>
              </tr>
              {data.map((todo) => {
                return (
                  <>
                    {todo.estado === "Realizada" &&
                    todo.prioridad === "Urgente" ? (
                      <tr key={todo._id}>
                        <td
                          style={{ color: "red", border: "none", padding: 3 }}
                        >
                          <EditarTodo data={todo} />
                          <button
                            style={{
                              backgroundColor: "white",
                              border: "none",

                              height: "40px",
                              margin: 0,
                            }}
                            onClick={() => {
                              deleteTodo(todo._id);
                            }}
                          >
                            ⛔
                          </button>
                        </td>
                      </tr>
                    ) : null}
                  </>
                );
              })}
            </Table>
          </Col>
        </Container>
      </Container>
    </Container>
  );
}

export default TodoList;