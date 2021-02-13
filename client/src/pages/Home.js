import React, { useContext } from "react";
import { CredentialsContext } from "../App";
import Todo from "../components/toDo";

function Home() {
  const [credentials] = useContext(CredentialsContext);
  return (
    <>
      <h1>Welcome {credentials.email}</h1>
      <Todo />
    </>
  );
}

export default Home;
