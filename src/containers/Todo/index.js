import React from "react";
import { Input } from "reactstrap";
import { ListGroup } from "reactstrap";
import { Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import Item from "./Item";
import Header from "../Header/Header";
import {
  DELETE_ALL,
  DELETE_TASK,
  DOWN,
  EDIT_TASK,
  SET_VALUE,
  TOGGLE_COMPLETED,
  UP,
} from "./types";
import HeaderWrapper from "../Header/HeaderWrapper";

const Todo = (props) => {
  const dispatch = useDispatch();

  const value = useSelector((state) => state.value);
  const data = useSelector((state) => state.tasks);

  // const {value, data} = useSelector(state => state);

  const typing = (event) => {
    const action = { type: SET_VALUE, payload: event.target.value };
    dispatch(action);
  };

  const deleteTask = (index) => {
    const action = { type: DELETE_TASK, payload: index };
    dispatch(action);
  };

  const editTask = (value, index) => {
    const action = { type: EDIT_TASK, payload: { value, index } };
    dispatch(action);
  };

  const up = (index) => {
    const action = { type: UP, payload: index };
    dispatch(action);
  };

  const down = (index) => {
    const action = { type: DOWN, payload: index };
    dispatch(action);
  };

  const toggleCompleted = (index) => {
    console.log(index, "toggleCompleted");

    const action = { type: TOGGLE_COMPLETED, payload: index };
    dispatch(action);
  };

  const deleteAll = (index) => {
    const action = { type: DELETE_ALL, payload: index };
    dispatch(action);
  };

  return (
    <HeaderWrapper>
      <div className="rounded p-3 shadow Toy position-relative">
        <Header />

        <div className="d-flex mb-2">
          <Input
            placeholder="Yangi vazifa!"
            className="me-2 toy2 text-center shadow-none"
            value={value}
            onChange={typing}
          />
        </div>
        <ListGroup>
          {data?.map((value, index) => {
            return (
              <Item
                value={value}
                index={index}
                deleteTask={deleteTask}
                editTask={editTask}
                up={up}
                down={down}
                toggleCompleted={toggleCompleted}
              />
            );
          })}
        </ListGroup>
        <div className="mt-3 d-flex align-items-lg-center justify-content-between">
          <h5 className="toy3 btom position-absolute">All : {data.length}</h5>
          <Button className="fw-bold bton toy2 position-absolute" onClick={() => deleteAll()}>
            Clear All
          </Button>
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Todo;
