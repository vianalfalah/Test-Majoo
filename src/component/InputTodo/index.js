import React, { useState } from "react";

import { editTodo, createTodo } from "../../redux/action";
import { useDispatch } from "react-redux";
export default function Update({ data, modal, modalDesk, setAdd }) {
  const dispatch = useDispatch();
  const [formValue, setFormValue] = useState(
    setAdd
      ? {
          title: "",
          description: "",
          status: "",
        }
      : data
  );

  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (setAdd) {
      const newForm = {
        ...formValue,
        status: 0,
      };
      dispatch(createTodo(newForm));
      modal.set(false);
    } else {
      dispatch(editTodo(formValue.id, formValue));
      modal.set(false);
    }
  };
  return (
    <div>
      <h5 className="text-center p-2">{setAdd ? "New To Do" : "Edit To Do"}</h5>
      <input
        onChange={(e) => handleChange(e)}
        id="title"
        name="title"
        type="text"
        value={formValue?.title}
      />
      <textarea
        onChange={(e) => handleChange(e)}
        id="description"
        name="description"
        value={formValue?.description}
      />
      {!setAdd && (
        <select
          onChange={(e) => handleChange(e)}
          id="status"
          name="status"
          value={formValue?.status}
        >
          <option value="0">Belum Selesai</option>
          <option value="1">Selesai</option>
        </select>
      )}

      <button className="text-center" onClick={handleSubmit}>
        oke
      </button>
    </div>
  );
}
