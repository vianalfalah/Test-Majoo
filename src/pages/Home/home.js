import React, { useEffect, useState } from "react";
import "./home.css";
import { Header, Modal, InputTodo } from "../../component";
import ToDoBelumSelesai from "./ToDoBelumSelesai";
import ToDoSelesai from "./ToDoSelesai";

function Home() {
  const [modalAdd, setModalAdd] = useState(false);
  const handleNewTodo = () => {
    setModalAdd(true);
  };
  return (
    <div className="home-body">
      <Header title="To Do List" />
      <div className="m-2 text-center">
        <button onClick={handleNewTodo}>New To Do</button>
      </div>
      <ToDoBelumSelesai />
      <ToDoSelesai />
      <Modal isOpen={modalAdd} toggle={() => setModalAdd(!modalAdd)}>
        <InputTodo
          setAdd={true}
          modal={{ set: setModalAdd, value: modalAdd }}
        />
      </Modal>
    </div>
  );
}

export default Home;
