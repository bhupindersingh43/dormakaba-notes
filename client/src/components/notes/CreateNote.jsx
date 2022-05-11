import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import * as config from "../../config/config";
import "../../App.css";

export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const navigate = useNavigate();
    return <Component navigate={navigate} {...props} />;
  };
  return Wrapper;
};

class CreateNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      published_date: "",
      publisher: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const data = {
      title: this.state.title,
      description: this.state.description,
    };

    axios
      .post(config.baseUrl + "/notes", data)
      .then((res) => {
        this.setState({
          title: "",
          description: "",
        });
        this.props.navigate("/");
      })
      .catch((err) => {
        console.log("Error in CreateNote!");
      });
  };

  render() {
    return (
      <div className="CreateNote">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                Show Note List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Note</h1>
              <p className="lead text-center">Create new note</p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Note Title"
                    name="title"
                    className="form-control"
                    value={this.state.title}
                    onChange={this.onChange}
                  />
                </div>
                <br />
                <div className="form-group">
                  <textarea
                    type="text"
                    placeholder="Note Description"
                    name="description"
                    className="form-control"
                    value={this.state.description}
                    onChange={this.onChange}
                  />
                </div>
                <input
                  type="submit"
                  className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CreateNote);
