import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import CreateNote from "./components/notes/CreateNote";
import ShowNoteList from "./components/notes/ShowNoteList";
import ShowNoteDetails from "./components/notes/ShowNoteDetails";
import UpdateNoteInfo from "./components/notes/UpdateNoteInfo";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<ShowNoteList />} />
          <Route path="/create-note" element={<CreateNote />} />
          <Route path="/edit-note/:id" element={<UpdateNoteInfo />} />
          <Route path="/show-note/:id" element={<ShowNoteDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
