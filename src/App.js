import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SubjectForm from "./components/SubjectForm";
import Subject from "./components/Subject";

function App() {
  const [courses, setCourses] = useState([]);
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="App">
      <Header />
      <div className="random">
        <h2>Calculate your C.G.P.A</h2>
        <button onClick={handleShow}>
          {!show ? " Add subject" : "cancel"}
        </button>
      </div>
      <SubjectForm
        setCourses={setCourses}
        courses={courses}
        show={show}
        handleShow={handleShow}
      />
      <Subject courses={courses} />
    </div>
  );
}

export default App;
