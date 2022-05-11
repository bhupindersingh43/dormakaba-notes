import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import moment from "moment";

const NoteItem = (props) => {
  const note = props.note;

  return (
    <tr>
      <td>{note.title}</td>
      <td>{note.description}</td>
      <td>{moment(note.created_date).format("YYYY-MM-DD h:mm:ss A")}</td>
      <td>
        <Link to={"/show-note/" + note._id} style={{ color: "white" }}>
          <button className="btn btn-secondary">View</button>{" "}
        </Link>
      </td>
    </tr>
  );
};

export default NoteItem;
