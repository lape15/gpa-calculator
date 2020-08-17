import React from "react";

const Subject = ({ courses }) => {
  let gp = 0;
  let singlePointScore = 0;
  let totalUnit = 0;
  for (let i = 0; i < courses.length; i++) {
    singlePointScore += Number(courses[i].unit) * Number(courses[i].point);
    totalUnit += Number(courses[i].unit);
  }
  gp = singlePointScore / totalUnit;

  return (
    <div className="box">
      {gp > 0 ? (
        <div className="gp-box">
          <b>Your CGPA</b>
          <span>{gp.toFixed(2)}</span>
        </div>
      ) : null}
      {courses.length > 0 ? (
        <div className="courses-box">
          <div className="title-box">
            <div className="w-20">Course</div>
            <div className="w-20">Unit</div>
            <div className="w-20">Score</div>
            <div className="w-20">Grade</div>
            <div className="w-20">Point</div>
          </div>
          <div className="item-box">
            {courses.map((course, index) => {
              return (
                <div className="course" key={index}>
                  <div className="value">
                    <b>Course:</b>
                    {course.course}
                  </div>
                  <div className="value">
                    <b>Unit:</b>
                    {course.unit}
                  </div>
                  <div className="value">
                    <b>Score:</b>
                    {course.score}
                  </div>
                  <div className="value">
                    <b>Grade:</b>
                    {course.grade}
                  </div>
                  <div className="value">
                    <b>Point:</b>
                    {course.point}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Subject;
