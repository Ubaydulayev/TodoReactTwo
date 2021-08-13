import React from "react";
import { Input } from "reactstrap";
import { ListGroup } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import Item from "./Item";
import Header from "../Header/Header";
import { SET_VALUE } from "./types";
import HeaderWrapper from "../Header/HeaderWrapper";
import Body from "../Body/Body";

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
    const action = { type: "DELETE_TASK", payload: index };
    dispatch(action);
  };

  const editTask = (value, index) => {
    const action = { type: "EDIT_TASK", payload: { value, index } };
    dispatch(action);
  };

  const up = (index) => {
    const action = { type: "UP", payload: index };
    dispatch(action);
  };

  const down = (index) => {
    const action = { type: "DOWN", payload: index };
    dispatch(action);
  };

  const toggleCompleted = (index) => {
    console.log(index, "toggleCompleted");

    const action = { type: "TOGGLE_COMPLETED", payload: index };
    dispatch(action);
  };

  return (
    <HeaderWrapper>
      <div className="bg-white rounded p-3 shadow Toy">
        <Header />

        <div className="d-flex mb-2">
          <Input
            placeholder="new task"
            className="me-2"
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
      </div>
    </HeaderWrapper>
  );
};

export default Todo;
