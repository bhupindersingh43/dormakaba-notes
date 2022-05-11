import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../../App.css";
import * as config from "../../config/config";

function UpdateNoteInfo(props) {
  let params = useParams();
  let navigate = useNavigate();
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  React.useEffect(() => {
    fetch(config.baseUrl + "/notes/" + params.id)
      .then((results) => results.json())
      .then((data) => {
        setTitle(data.title);
        setDescription(data.description);
      })
      .catch((err) => console.log(err));
  }, [params]); // <-- Have to pass in [] here!

  const inputTitleHandler = (e) => {
    setTitle(e.target.value);
  };

  const inputDescHandler = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title: title,
      description: description,
    };
    axios
      .put(config.baseUrl + "/notes/" + params.id, data)
      .then((res) => {
        navigate("/show-note/" + params.id);
      })
      .catch((err) => {
        console.log("Error in UpdateNoteInfo!");
      });
  };

  return (
    <div className="UpdateNoteInfo">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br />
            <Link to="/" className="btn btn-outline-warning float-left">
              Show Note List
            </Link>
          </div>
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Edit Note</h1>
            <p className="lead text-center">Update Note's Info</p>
          </div>
        </div>

        <div className="col-md-8 m-auto">
          <form
            noValidate
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <div className="form-group">
              <input
                type="text"
                placeholder="Note Title"
                name="title"
                className="form-control"
                value={title}
                onChange={inputTitleHandler}
              />
            </div>
            <br />

            <div className="form-group">
              <textarea
                type="text"
                placeholder="Note Description"
                name="description"
                className="form-control"
                value={description}
                onChange={inputDescHandler}
              />
            </div>

            <button
              type="submit"
              className="btn btn-outline-info btn-lg btn-block"
            >
              Update Note
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateNoteInfo;
