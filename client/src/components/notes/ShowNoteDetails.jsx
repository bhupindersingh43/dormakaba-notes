import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "../../App.css";
import axios from "axios";
import * as config from "../../config/config";
import moment from "moment";

function ShowNoteDetails(props) {
  let params = useParams();
  let navigate = useNavigate();
  const [title, setTitle] = React.useState(null);
  const [description, setDescription] = React.useState(null);
  const [created_date, setCreatedDate] = React.useState(null);

  React.useEffect(() => {
    fetch(config.baseUrl + "/notes/" + params.id)
      .then((results) => results.json())
      .then((data) => {
        setTitle(data.title);
        setDescription(data.description);
        setCreatedDate(data.created_date);
      })
      .catch((err) => console.log(err));
  }, [params]);

  const onDeleteClick = (id) => {
    if (window.confirm("Are you sure?")) {
      axios
        .delete(config.baseUrl + "/notes/" + id)
        .then((res) => {
          navigate("/");
        })
        .catch((err) => {
          console.log("Error form ShowNoteDetails_deleteClick");
        });
    }
  };

  return (
    <div className="ShowNoteDetails">
      <div className="container">
        <div className="row">
          <div className="col-md-10 m-auto">
            <br /> <br />
            <Link to="/" className="btn btn-outline-warning float-left">
              Show Note List
            </Link>
          </div>
          <br />
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Note's Record</h1>
            <p className="lead text-center">View Note's Info</p>
            <hr /> <br />
          </div>
        </div>
        <div>
          <div>
            <table className="table table-hover table-dark">
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Title</td>
                  <td>{title}</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Description</td>
                  <td>{description}</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Created Date</td>
                  <td>{moment(created_date).format("YYYY-MM-DD h:mm:ss A")}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <button
              type="button"
              className="btn btn-outline-danger btn-lg btn-block"
              onClick={() => onDeleteClick(params.id)}
            >
              Delete Note
            </button>
            <br />
          </div>

          <div className="col-md-6">
            <Link
              to={`/edit-note/${params.id}`}
              className="btn btn-outline-info btn-lg btn-block"
            >
              Edit Note
            </Link>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowNoteDetails;
