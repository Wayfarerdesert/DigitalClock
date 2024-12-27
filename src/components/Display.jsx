import React from "react";

function Display(props) {
  return (
    <>
      <div className="">
        <span>{props.time.h >= 10 ? props.time.h : "0" + props.time.h}</span>
        &nbsp;:&nbsp;
        <span>{props.time.m >= 10 ? props.time.h : "0" + props.time.m}</span>&nbsp;:&nbsp;
        <span>{props.time.s >= 10 ? props.time.h : "0" + props.time.s}</span>&nbsp;:&nbsp;
        <span>{props.time.ms >= 10 ? props.time.h : "0" + props.time.ms}</span>
      </div>
    </>
  );
}

export default Display;
