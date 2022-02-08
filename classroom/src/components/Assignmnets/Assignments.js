import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import db from "../../lib/firebase";
import "./style.css";
const Assignments = ({ classData }) => {
  const [Assignments, setAssignments] = useState([]);

  useEffect(() => {
    if (classData) {
      let unsubscribe = db
        .collection("Assignments")
        .doc("classes")
        .collection(classData.id)
        .onSnapshot((snap) => {
          setAssignments(snap.docs.map((doc) => doc.data()));
        });
      return () => unsubscribe();
    }
  }, [classData]);
  console.log(Assignments);
  return (
    <div>
      {Assignments.map((item) => (
        <div className="amt">
          <div className="amt__Cnt">
            <div className="amt__top">
              <Avatar />
              <div>{item.sender}</div>
            </div>
            <p className="amt__txt">{item.text}</p>
            <img className="amt__img" src={item.imageUrl} alt={item.text} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Assignments;
