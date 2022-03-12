import React, { useEffect, useState, memo } from "react";
import { getTodo } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Deskripsi } from "../../component";

const ToDoSelesai = memo(() => {
  const dispatch = useDispatch();
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

  const SortingDesc = memo(() => {
    const sortDesc = todo.data.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
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

  return (
    <div>
      <div className="title done">To Do List Selesai</div>
      <SortingDesc />
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
});

export default ToDoSelesai;
