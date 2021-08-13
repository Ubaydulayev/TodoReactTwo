import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderWrapper from "./HeaderWrapper";
import React from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faMinus, faExpand, faExpandAlt, faExpandArrowsAlt } from "@fortawesome/free-solid-svg-icons";


const setZero = (n) => (n < 10 ? "0" + n : n);

const Header = () => {
  const [time, setTime] = useState(new Date());
  const [date, setDate] = useState(new Date());

  const monthNames = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  const hour = setZero(time.getHours());
  const minute = setZero(time.getMinutes());

  const dateObj = new Date();
  const day = date.getDate();
  const month = monthNames[dateObj.getMonth()];
  const year = date.getFullYear();

  useEffect(() => {
    setTimeout(() => {
      setTime(new Date());
    }, 1000);
  }, [time]);
  useEffect(() => {
    setTimeout(() => {
      setDate(new Date());
    });
  });

  return (
    <HeaderWrapper>
      <div className="header">
        <div className="row p-3 justify-content-between">
          <div className="col-md-10 col-8 col-sm-9 d-flex align-items-center">
            <div className="day me-2 ">{day}</div>
            <div className="col-2">
              <div className="month">{month}</div>
              <div className="year">{year}</div>
            </div>
          </div>
          <div className="col-md-2 col-4 col-sm-3 d-flex align-items-center">
            <div className="hour">{hour}:</div>
            <div className="minutes">{minute}</div>
          </div>
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
