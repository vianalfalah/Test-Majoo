import React, { useEffect, useState, memo } from "react";
import { getTodo } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Deskripsi } from "../../component";

function ToDoBelumSelesai() {
  const dispatch = useDispatch();
  const [dataAsc, setDataAsc] = useState([]);
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

  const SortingAsc = memo(() => {
    const sortAsc = todo.data.sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );
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

  return (
    <div>
      <div className="title done">To Do List Belum Selesai</div>
      <SortingAsc />
      <Modal
        isOpen={openModalDesk}
        toggle={() => setOpenModalDesk(!openModalDesk)}
      >
        <Deskripsi
          data={value}
          modalClose={{ set: setOpenModalDesk, val: openModalDesk }}
          isDelete={true}
        />
      </Modal>
    </div>
  );
}

export default ToDoBelumSelesai;
