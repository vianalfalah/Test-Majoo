import React, { useEffect, useState } from "react";

import { editTodo, createTodo } from "../../redux/action";
import { useDispatch } from "react-redux";
export default function Update({ data, modal, modalDesk, setAdd }) {
  const dispatch = useDispatch();
  const [error, setError] = useState({
    title: "",
    description: "",
  });
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

  useEffect(() => {
    if (formValue.title) {
      if (formValue.title.length < 6) {
        setError({ ...error, title: "Must be 6 - 20 Characters" });
      } else {
        setError({ ...error, title: "" });
      }
    }
  }, [formValue.title]);
  useEffect(() => {
    if (formValue.description) {
      if (formValue.description.length < 8) {
        setError({ ...error, description: "Must be 8 - 100 Characters" });
      } else {
        setError({ ...error, description: "" });
      }
    }
  }, [formValue.description]);

  return (
    <div>
      <h5 className="text-center p-2">{setAdd ? "New To Do" : "Edit To Do"}</h5>
      <input
        onChange={(e) => handleChange(e)}
        id="title"
        name="title"
        type="text"
        value={formValue?.title}
        required
        maxLength={20}
      />
      {error.title && <p className="p-2 red">{error.title}</p>}
      <textarea
        onChange={(e) => handleChange(e)}
        id="description"
        name="description"
        value={formValue?.description}
        required
        maxLength={100}
      />
      {error.description && <p className="p-2 red">{error.description}</p>}
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

      <button
        className="text-center"
        onClick={handleSubmit}
        disabled={
          error.description ||
          error.title ||
          !formValue.title ||
          !formValue.description
        }
      >
        oke
      </button>
    </div>
  );
}
