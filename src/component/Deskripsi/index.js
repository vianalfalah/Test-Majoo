import React, { useState, memo } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../redux/action";
import { Modal, InputTodo } from "../index";

const Deskripsi = memo(({ data, isDelete, modalClose }) => {
  const [showEdit, setShowEdit] = useState(false);
  const dispatch = useDispatch();

  const handleEdit = (row) => {
    setShowEdit(true);
  };

  const handleDelete = () => {
    dispatch(deleteTodo(data.id));
    modalClose.set(false);
  };
  const collStatus = (status) => {
    const statusString = status?.toString();
    switch (statusString) {
      case "0":
        return "Belum Selesai";
      case "1":
        return "Selesai";

      default:
        break;
    }
  };
  const style = {
    buttonEdit: {
      width: 100,
      height: 30,
      margin: 10,
      backgroundColor: "#ffcc00",
      border: "none",
    },

    buttonDelete: {
      width: 100,
      height: 30,
      margin: 10,
      backgroundColor: "red",
      border: "none",
      color: "#fff",
    },
  };

  console.log(data);

  return (
    <div>
      {showEdit ? (
        <InputTodo data={data} modal={modalClose} />
      ) : (
        <>
          <h5 className="text-center p-2">{data.title}</h5>
          <h5>Deskripsi :</h5>
          <div className="mt-3 mb-3">{data.description}</div>
          <h5>Status :</h5>
          <div className="mt-3 mb-3">{collStatus(data.status)}</div>
          <div className="text-center ">
            <button style={style.buttonEdit} onClick={handleEdit}>
              Edit
            </button>
            {isDelete && (
              <button style={style.buttonDelete} onClick={handleDelete}>
                Delete
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
});

export default Deskripsi;
