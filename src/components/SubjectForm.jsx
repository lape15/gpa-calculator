import React, { useState } from "react";

const SubjectForm = ({ setCourses, courses, show, handleShow }) => {
  const [subject, setSubject] = useState({
    course: "",
    unit: "",
    score: "",
    grade: "",
    point: 0,
  });

  const handleChange = (e) => {
    setSubject({
      ...subject,
      [e.target.name]: e.target.value,
    });
  };

  const handleGrade = () => {
    if (subject.score >= 75) {
      subject.grade = "A";
      subject.point = 4;
    }
    if (subject.score < 75) {
      subject.grade = "AB";
      subject.point = 3.5;
    }
    if (subject.score <= 69) {
      subject.grade = "B";
      subject.point = 3.25;
    }
    if (subject.score <= 64) {
      subject.grade = "BC";
      subject.point = 3.0;
    }
    if (subject.score <= 59) {
      subject.grade = "C";
      subject.point = 2.75;
    }
    if (subject.score <= 54) {
      subject.grade = "CD";
      subject.point = 2.5;
    }
    if (subject.score <= 49) {
      subject.grade = "D";
      subject.point = 2.25;
    }
    if (subject.score <= 44) {
      subject.grade = "D";
      subject.point = 2;
    }
    if (subject.score <= 39) {
      subject.grade = "F";
      subject.point = 0;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleGrade();
    setCourses([...courses, subject]);
    handleShow();
    setSubject({
      course: "",
      unit: "",
      score: "",
      grade: "",
      point: 0,
    });
  };

  return (
    <div className={`add-subject ${show ? "not-show" : "show"}`}>
      <form onSubmit={handleSubmit}>
        <div className="w-30">
          <label className={`${subject.course ? "shrink" : ""}`}>Course </label>
          <input
            type="text"
            value={subject.course}
            name="course"
            onChange={handleChange}
            required
            className={`${subject.course ? "busy" : ""}`}
          />
        </div>
        <div className="w-30">
          <label className={`${subject.unit ? "shrink" : ""}`}>Unit </label>
          <input
            type="text"
            value={subject.unit}
            name="unit"
            onChange={handleChange}
            required
            className={`${subject.unit ? "busy" : ""}`}
          />
        </div>
        <div className="w-30">
          <label className={`${subject.score ? "shrink" : ""}`}>
            Score(%){" "}
          </label>
          <input
            type="text"
            value={subject.score}
            name="score"
            onChange={handleChange}
            required
            className={`${subject.score ? "busy" : ""}`}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SubjectForm;
