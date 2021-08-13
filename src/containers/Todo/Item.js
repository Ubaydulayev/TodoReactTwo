import {
  faArrowDown,
  faArrowUp,
  faBars,
  faEdit,
  faSave,
  faTimes,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { ListGroupItem } from "reactstrap";
import { Button, Input } from "reactstrap";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import styled from "styled-components";

const ItemWrapper = styled(ListGroupItem)`
  .completed {
    text-decoration: line-through pink 3px;
  }

  .drop {
    background-color: yellow;
  }
  .btnn {
    background-color: pink;
    border: none;
    outline: none;
    &:focus,
    &:hover {
      background-color: pink;
    }
  }

  .fontbtn {
    color: pink;
    &:focus,
    &:hover {
      background-color: #fff2f2;
      color: white;
    }
  }

  .fontb {
    background-color: pink;
    border: pink;
  }
`;

const Item = ({
  value: { title, completed },
  index,
  deleteTask,
  editTask,
  up,
  down,
  toggleCompleted,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(title);

  const save = () => {
    setIsEdit(false);
    editTask(value, index);
  };

  const cancel = () => {
    setIsEdit(false);
    setValue(title);
  };

  return (
    <ItemWrapper
      key={index}
      tag="a"
      href="#"
      action
      onDoubleClick={() => toggleCompleted(index)}
      className="d-flex align-items-center justify-content-between toy2"
    >
      {isEdit ? (
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="me-3 border-0"
        />
      ) : (
        <span className={`${(completed && "completed") || ""}`}>
          {index + 1}. {title}
        </span>
      )}

      {isEdit ? (
        <div className="d-flex align-items-center">
          <Button onClick={save} className="me-2 fontb">
            <FontAwesomeIcon icon={faSave} />{" "}
          </Button>
          <Button onClick={cancel} className="fontb">
            <FontAwesomeIcon icon={faTimes} />{" "}
          </Button>
        </div>
      ) : (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle  className="btnn shadow-none">
            <FontAwesomeIcon icon={faBars} />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header className="fontbtn">
              Functions
            </DropdownItem>
            <DropdownItem onClick={() => deleteTask(index)} className="fontbtn">
              <FontAwesomeIcon icon={faTrash} /> Delete
            </DropdownItem>
            <DropdownItem
              onClick={() => {
                setIsEdit(true);
              }}
              className="fontbtn"
            >
              <FontAwesomeIcon icon={faEdit} /> Edit
            </DropdownItem>
            <DropdownItem
              onClick={() => {
                up(index);
              }}
              className="fontbtn"
            >
              <FontAwesomeIcon icon={faArrowUp} /> Up
            </DropdownItem>
            <DropdownItem
              onClick={() => {
                down(index);
              }}
              className="fontbtn"
            >
              <FontAwesomeIcon icon={faArrowDown} /> Down
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      )}
    </ItemWrapper>
  );
};

export default Item;
