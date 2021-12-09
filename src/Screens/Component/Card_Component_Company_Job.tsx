import React = require("react")
import "../index.css";
import "../css/home.css";
import "../css/login.css";
import { FaRegTrashAlt } from "react-icons/fa";
var k, i, n;

const Cards = (props) => {
  k = "/editjobs/i=" + props.id;
  i = "/showapplicants/i=" + props.id;
  n = "/deljobs/i=" + props.id;
  return (
    <>
      <div className="card widths">
        <div className="card-body">
          <a href={n} className="text_size margin_left">
            <FaRegTrashAlt></FaRegTrashAlt>
          </a>
          <strong>
            <h4 className="card-title  centers">{props.title}</h4>
          </strong>
          <strong>
            <h6 className="card-title  centers">{props.location}</h6>
          </strong>
          <p className="card-text">{props.content}</p>
          <div className="pop">
            <a href={k} className="btn btn-primary text_size margin_left">
              Edit
            </a>
            <a href={i} className="btn btn-primary text_size margin_left">
              Show Aplicants
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cards;
