import BodyWrapper from "./BodyWrapper";
import React from "react";
import { Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Body = (props) => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.value);

  const add = () => {
    const action = { type: "ADD_TASK", payload: value };
    dispatch(action);
  };

  onkeydown = (event) => {
    if (event.keyCode == 13) add();
}
  return (
    <BodyWrapper>
      <div className="plus">
        <Button className="plusButton" onClick={add}>
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </div>
    </BodyWrapper>
  );
};

export default Body;
