import React, { useCallback, useEffect, useState } from "react";
import "./home.css";
import { Header, Modal, InputTodo, Deskripsi } from "../../component";
import { getTodo } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const [modalAdd, setModalAdd] = useState(false);
  const dispatch = useDispatch();
  const [dataAsc, setDataAsc] = useState([]);
  const [dataDesc, setDataDesc] = useState([]);
  const todo = useSelector((state) => state);
  const [openModalDesk, setOpenModalDesk] = useState(false);
  const [value, setValue] = useState({});
  const handleModal = (row) => {
    setOpenModalDesk(true);
    setValue(row);
  };

  useEffect(() => {
    dispatch(getTodo());
  }, [getTodo]);

  const SortingDesc = useCallback(() => {
    const sortDesc = todo.data.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    console.log("test1", sortDesc);
    return (
      <>
        {sortDesc.map(
          (row) =>
            row.status === 1 && (
              <div
                className="d-flex justify-content-between"
                key={row.id}
                onClick={() => handleModal(row)}
              >
                <div className="subtitle">{row?.title}</div>
                <div className="subtitle">{row?.createdAt}</div>
              </div>
            )
        )}
      </>
    );
  });

  const SortingAsc = useCallback(() => {
    const sortAsc = todo.data.sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );
    console.log("test2", sortAsc);
    return (
      <>
        {sortAsc.map(
          (row) =>
            row.status === 0 && (
              <div
                className="d-flex justify-content-between cursor-pointer"
                key={row.id}
                onClick={() => handleModal(row)}
              >
                <div className="subtitle">{row?.title}</div>
                <div className="subtitle">{row?.createdAt}</div>
              </div>
            )
        )}
      </>
    );
  });
  const handleNewTodo = () => {
    setModalAdd(true);
  };
  return (
    <div className="home-body">
      <Header title="To Do List" />
      <div className="m-2 text-center">
        <button onClick={handleNewTodo}>New To Do</button>
      </div>
      <div className="title done">To Do List Belum Selesai</div>
      <SortingAsc />
      <div className="title done">To Do List Selesai</div>
      <SortingDesc />
      <Modal isOpen={modalAdd} toggle={() => setModalAdd(!modalAdd)}>
        <InputTodo
          setAdd={true}
          modal={{ set: setModalAdd, value: modalAdd }}
        />
      </Modal>
      <Modal
        isOpen={openModalDesk}
        toggle={() => setOpenModalDesk(!openModalDesk)}
      >
        <Deskripsi
          data={value}
          modalClose={{ set: setOpenModalDesk, val: openModalDesk }}
          isDelete={false}
        />
      </Modal>
    </div>
  );
}

export default Home;
