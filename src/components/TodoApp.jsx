import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, removeTask } from "../slices/tasksSlice.js";
import ModalRemove from "./ModalRemove.jsx";

let nextID = 0;

export default function TodoApp() {
  const [input, setInput] = useState("");
  const [show, setShow] = useState(false);
  const tasksList = useSelector((state) => state.tasks.value);
  const dispatch = useDispatch();

  function handlerSubmit(event) {
    event.preventDefault();
    dispatch(addTask({ id: nextID++, value: input }));
    setInput("");
  }
  function handlerRemoveTask() {
    dispatch(removeTask(show));
    setShow(false);
  }

  function renderList() {
    return (
      <ul className="list-group">
        {tasksList.map((task) => (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between align-items-center">
            <span>{task.value}</span>
            <button
              type="button"
              className="btn btn-danger"
              // onClick={() => dispatch(removeTask(task))}
              onClick={() => setShow(task)}>
              <span>&times;</span>
            </button>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <>
      <h1 className="text-center">ToDo App</h1>
      <form onSubmit={(e) => handlerSubmit(e)}>
        <div className="mb-3 field">
          <div className="form-group">
            <label>Добавление задачи</label>
            <input
              type="text"
              className="form-control"
              required
              value={input}
              placeholder={input.length === 0 ? "Введите задачу сюда" : ""}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary mt-4">
            Добавить
          </button>
        </div>
      </form>
      {tasksList && renderList()}
      {show && (
        <ModalRemove hideModal={() => setShow(false)} removeTask={() => handlerRemoveTask()} />
      )}
    </>
  );
}
