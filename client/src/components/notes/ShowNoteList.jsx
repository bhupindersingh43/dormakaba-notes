import React, { Component } from "react";
import "../../App.css";
import axios from "axios";
import { Link } from "react-router-dom";
import NoteItem from "./NoteItem";
import * as config from "../../config/config";

class ShowNoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
  }

  componentDidMount() {
    axios
      .get(config.baseUrl + "/notes")
      .then((res) => {
        this.setState({
          notes: res.data,
        });
      })
      .catch((err) => {
        console.log("Error from ShowNoteList");
      });
  }

  render() {
    const notes = this.state.notes;
    let noteItem;

    if (!notes) {
      noteItem = "there is no note record!";
    } else {
      noteItem = notes.map((note, k) => <NoteItem note={note} key={k} />);
    }

    return (
      <div className="ShowNoteList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Notes List</h2>
            </div>

            <div className="col-md-11">
              <Link
                to="/create-note"
                className="btn btn-outline-warning float-right"
              >
                + Add New Note
              </Link>
              <br />
              <br />
              <hr />
            </div>
          </div>

          <table className="table">
            <thead className="thead-light">
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Created Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{noteItem}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ShowNoteList;
